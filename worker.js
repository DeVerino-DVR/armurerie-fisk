// ============================================================
// Carcan'hoes — Cloudflare Worker (état partagé + archive GitHub)
// ============================================================
//
// Ce Worker est le backend de l'app. Il gère :
//   - L'état partagé (ventes, customs, occas, employés, impôts)
//     stocké dans Cloudflare KV → tous les utilisateurs voient
//     la même chose en temps réel.
//   - L'archivage hebdomadaire vers GitHub (snapshot).
//
// Variables d'environnement à configurer dans Cloudflare :
//   GITHUB_TOKEN    (secret)  ghp_...
//   GITHUB_OWNER    (texte)   DeVerino-DVR
//   GITHUB_REPO     (texte)   armurerie-fisk
//   GITHUB_BRANCH   (texte)   main
//   TEAM_PASSWORD   (secret)  mot de passe équipe
//
// Binding KV à créer :
//   STATE  → nom du namespace KV (ex: "carcanhoes_state")
//
// Endpoints :
//   GET  /          healthcheck + stats
//   GET  /state     renvoie l'état courant (public, pas besoin de mot de passe)
//   POST /          body { action, password, ... } :
//                   - action=save    → écrit l'état (body.state) dans KV
//                   - action=archive → snapshot KV vers GitHub
//                   - action=reset   → vide l'état (confirmation requise)
// ============================================================

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const STATE_KEY = "state";
const DEFAULT_STATE = {
  ventes: [],
  customs: [],
  occas: [],
  depDed: [],
  depNonDed: [],
  employes: [
    { prenom: "Dikson",  nom: "Fisk",     statut: "Patron",    salaire: 300 },
    { prenom: "Nastos",  nom: "Martinez", statut: "Co-patron", salaire: 300 },
    { prenom: "William", nom: "Stilwell", statut: "Gérant",    salaire: 300 },
    { prenom: "Wyatt",   nom: "Earp",     statut: "Employé",   salaire: 300 },
    { prenom: "Butch",   nom: "Harison",  statut: "Employé",   salaire: 300 },
    { prenom: "James",   nom: "Heller",   statut: "Employé",   salaire: 300 }
  ],
  impots: { semaine: "", du: "", au: "", capital: 0 },
  meta: { updatedAt: null, updatedBy: null, version: 0 }
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS },
  });
}

function b64encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

async function readState(env) {
  const raw = await env.STATE.get(STATE_KEY);
  if (!raw) return { ...DEFAULT_STATE };
  try {
    return JSON.parse(raw);
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function writeState(env, state) {
  await env.STATE.put(STATE_KEY, JSON.stringify(state));
}

async function githubGetSha(owner, repo, branch, path, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "armurerie-fisk-worker",
    },
  });
  if (res.ok) return (await res.json()).sha;
  return null;
}

async function githubPutFile(owner, repo, branch, path, content, message, token) {
  const sha = await githubGetSha(owner, repo, branch, path, token);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "armurerie-fisk-worker",
    },
    body: JSON.stringify({
      message,
      content: b64encode(content),
      branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`${res.status}: ${err.message || "erreur GitHub"}`);
  }
  return res.json();
}

function fmt(n) { return "$" + Number(n || 0).toFixed(2); }

function buildBilan(state, weekDate) {
  const totalVentes = state.ventes.reduce((s, v) => s + (v.final || 0), 0);
  const totalCustomsFinal = state.customs.reduce((s, c) => s + (c.final || 0), 0);
  const totalCustomsPart = state.customs.reduce((s, c) => s + (c.part || 0), 0);
  const totalOccasVendues = state.occas.filter(o => o.vendue).reduce((s, o) => s + (o.prixRevente || 0), 0);
  const totalSal = state.employes.reduce((s, e) => s + (+e.salaire || 0) + (+e.prime || 0), 0);
  const totalDD = state.depDed.reduce((s, d) => s + (d.mnt || 0), 0);
  const totalDND = state.depNonDed.reduce((s, d) => s + (d.mnt || 0), 0);
  const revenus = totalVentes + totalCustomsFinal + totalOccasVendues;
  const imposable = Math.max(0, revenus - totalSal - totalDD);
  const impots = imposable * 0.5;
  const bilan = revenus - totalSal - totalDD - impots - totalDND;

  return `# Bilan semaine · ${weekDate}

**Carcan'hoes — L'armurerie des Fisk**

| Poste | Montant |
|---|---:|
| Revenus totaux | ${fmt(revenus)} |
| — ventes d'armes | ${fmt(totalVentes)} |
| — customs | ${fmt(totalCustomsFinal)} (part entreprise : ${fmt(totalCustomsPart)}) |
| — armes d'occas vendues | ${fmt(totalOccasVendues)} |
| Salaires | -${fmt(totalSal)} |
| Dépenses déductibles | -${fmt(totalDD)} |
| **Montant imposable** | **${fmt(imposable)}** |
| Impôts (50%) | ${fmt(impots)} |
| Dépenses non déductibles | -${fmt(totalDND)} |
| **Bilan** | **${fmt(bilan)}** |

## Statistiques

- Ventes : ${state.ventes.length}
- Customs : ${state.customs.length}
- Armes d'occas stock : ${state.occas.filter(o => !o.vendue).length} (vendues : ${state.occas.filter(o => o.vendue).length})
- Employés : ${state.employes.length}

*Généré automatiquement le ${new Date().toLocaleString("fr-FR")}*
`;
}

async function handleArchive(env, body) {
  const state = await readState(env);
  const weekDate = body.weekDate || new Date().toISOString().slice(0, 10);
  const folder = `saves/semaine-${weekDate}`;
  const msg = (body.commitMsg || `Sauvegarde semaine ${weekDate}`).slice(0, 200);
  const user = (body.user || "inconnu").slice(0, 60);
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const branch = env.GITHUB_BRANCH || "main";
  const token = env.GITHUB_TOKEN;

  const files = [
    { path: `${folder}/ventes.json`,    content: JSON.stringify(state.ventes,    null, 2) },
    { path: `${folder}/customs.json`,   content: JSON.stringify(state.customs,   null, 2) },
    { path: `${folder}/occas.json`,     content: JSON.stringify(state.occas,     null, 2) },
    { path: `${folder}/employes.json`,  content: JSON.stringify(state.employes,  null, 2) },
    { path: `${folder}/impots.json`,    content: JSON.stringify({
        semaine: state.impots,
        depensesDeductibles: state.depDed,
        depensesNonDeductibles: state.depNonDed
      }, null, 2) },
    { path: `${folder}/bilan.md`,       content: buildBilan(state, weekDate) }
  ];

  const results = [];
  for (const f of files) {
    const r = await githubPutFile(owner, repo, branch, f.path, f.content, `${msg} · ${f.path.split("/").pop()} · ${user}`, token);
    results.push({ path: f.path, url: r?.content?.html_url || null });
  }

  const folderUrl = `https://github.com/${owner}/${repo}/tree/${branch}/${folder}`;
  return { success: true, count: results.length, files: results, folderUrl };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (!env.STATE) {
      return json({ error: "Binding KV 'STATE' manquant côté Worker" }, 500);
    }

    const url = new URL(request.url);

    // ================ GET ================
    if (request.method === "GET") {
      if (url.pathname === "/state") {
        const state = await readState(env);
        return json({ ok: true, state });
      }
      // Healthcheck
      const state = await readState(env);
      return json({
        ok: true,
        service: "carcanhoes-sync",
        owner: env.GITHUB_OWNER || null,
        repo: env.GITHUB_REPO || null,
        stats: {
          ventes: state.ventes.length,
          customs: state.customs.length,
          occas: state.occas.length,
          employes: state.employes.length,
          updatedAt: state.meta?.updatedAt || null,
          version: state.meta?.version || 0
        }
      });
    }

    // ================ POST ================
    if (request.method !== "POST") {
      return json({ error: "Méthode non autorisée" }, 405);
    }

    let body;
    try { body = await request.json(); }
    catch { return json({ error: "JSON invalide" }, 400); }

    // Password required for all POST
    const required = ["GITHUB_TOKEN", "GITHUB_OWNER", "GITHUB_REPO", "TEAM_PASSWORD"];
    for (const k of required) {
      if (!env[k]) return json({ error: `Variable manquante côté Worker : ${k}` }, 500);
    }
    if (!body.password || body.password !== env.TEAM_PASSWORD) {
      return json({ error: "Mot de passe équipe incorrect" }, 403);
    }

    // --- action: save ---
    if (body.action === "save") {
      if (!body.state || typeof body.state !== "object") {
        return json({ error: "state manquant" }, 400);
      }
      const prev = await readState(env);
      const next = {
        ...body.state,
        meta: {
          updatedAt: new Date().toISOString(),
          updatedBy: (body.user || "inconnu").slice(0, 60),
          version: (prev.meta?.version || 0) + 1
        }
      };
      await writeState(env, next);
      return json({ success: true, version: next.meta.version, updatedAt: next.meta.updatedAt });
    }

    // --- action: archive ---
    if (body.action === "archive") {
      try {
        const result = await handleArchive(env, body);
        return json(result);
      } catch (err) {
        return json({ error: err.message || String(err) }, 502);
      }
    }

    // --- action: reset ---
    if (body.action === "reset") {
      if (body.confirm !== "RESET") {
        return json({ error: "Confirmation 'RESET' manquante" }, 400);
      }
      const blank = {
        ...DEFAULT_STATE,
        meta: { updatedAt: new Date().toISOString(), updatedBy: (body.user || "inconnu").slice(0, 60), version: 0 }
      };
      await writeState(env, blank);
      return json({ success: true });
    }

    return json({ error: `Action inconnue : ${body.action}` }, 400);
  }
};

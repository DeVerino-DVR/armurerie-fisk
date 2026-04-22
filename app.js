// ============================================================
// CATALOGUE
// ============================================================
const CATALOGUE = {
  "Revolvers": {
    "Double Action": 20, "Cattleman": 25, "Navy": 60, "Schofield": 55, "LeMat": 80
  },
  "Pistolets": {
    "Mauser": 55, "M1899": 55, "Volcanic": 70, "Pistolet semi-automatique": 55
  },
  "Pompes / Fusils de chasse": {
    "Canon scié": 45, "Double canon": 60, "Fusil à répétition": 140,
    "Pompe": 130, "Pompe semi-auto": 160, "Éléphant": 1000
  },
  "Carabines": {
    "Litchfield": 115, "Petit gibier": 15, "Springfield": 70,
    "Lancaster": 105, "Evans": 90, "Verrou": 250, "Carabine à répétition": 60
  },
  "Armes blanches / Lancer": {
    "Couteaux de chasse": 2, "Lasso": 2, "Lasso amélioré": 8,
    "Machette aguila": 11, "Marteau": 5, "Arc": 15,
    "Ceinture de couteau": 8, "Ceinture de bolas": 8,
    "Hachette de chasseur": 11, "Bolas": 5, "Couteaux de lancer": 3
  },
  "Munitions normales": {
    "Munitions revolver": 3, "Munitions pistolet": 3,
    "Munitions petit gibier (fusil)": 3, "Munitions carabine": 6,
    "Munitions pompe": 4, "Munitions fusil": 5, "Carquois flèches": 3
  },
  "Munitions spéciales": {
    "Revolver Express": 8, "Revolver Véloce": 5, "Revolver Tête creuse": 5,
    "Carabine Express": 11, "Carabine Véloce": 8, "Carabine Tête creuse": 8,
    "Fusil Express": 11, "Fusil Véloce": 8, "Fusil Tête creuse": 8,
    "Pistolet Express": 8, "Pistolet Véloce": 5, "Pistolet Tête creuse": 5,
    "Munition éléphant": 50, "Pompe Slug": 10,
    "Carquois empoisonné": 3, "Carquois petit gibier": 2
  },
  "Divers": {
    "Huile pour arme": 2, "Nettoyage arme": 1.5,
    "Jumelles": 3, "Carquois": 2, "Changement de nom": 2.5
  }
};

const OCCAS = {
  "Double Action":        {cat: 20,   rachat: 0,   revente: 0},
  "Cattleman":            {cat: 25,   rachat: 0,   revente: 0},
  "Navy":                 {cat: 60,   rachat: 25,  revente: 35},
  "Schofield":            {cat: 55,   rachat: 20,  revente: 0},
  "LeMat":                {cat: 80,   rachat: 40,  revente: 65},
  "Mauser":               {cat: 55,   rachat: 25,  revente: 45},
  "M1899":                {cat: 55,   rachat: 26,  revente: 46},
  "Volcanic":             {cat: 70,   rachat: 30,  revente: 55},
  "Pistolet semi-auto":   {cat: 55,   rachat: 23,  revente: 43},
  "Canon scié":           {cat: 45,   rachat: 20,  revente: 35},
  "Double canon":         {cat: 60,   rachat: 23,  revente: 42},
  "Fusil à répétition":   {cat: 140,  rachat: 65,  revente: 110},
  "Pompe":                {cat: 130,  rachat: 60,  revente: 105},
  "Pompe semi-auto":      {cat: 160,  rachat: 90,  revente: 130},
  "Éléphant":             {cat: 1000, rachat: 150, revente: 250},
  "Litchfield":           {cat: 115,  rachat: 60,  revente: 90},
  "Petit gibier":         {cat: 15,   rachat: 0,   revente: 0},
  "Springfield":          {cat: 70,   rachat: 20,  revente: 40},
  "Lancaster":            {cat: 105,  rachat: 40,  revente: 75},
  "Evans":                {cat: 90,   rachat: 35,  revente: 70},
  "Verrou":               {cat: 250,  rachat: 120, revente: 180},
  "Carabine à répétition":{cat: 60,   rachat: 0,   revente: 0}
};

// Matières premières suivies dans l'inventaire (ordre d'affichage)
const MATERIALS = [
  { id: 'iron',          label: 'Minerai de fer' },
  { id: 'iron_ingot',    label: 'Lingot de fer' },
  { id: 'copper_ingot',  label: 'Lingot de cuivre' },
  { id: 'gold_ingot',    label: "Lingot d'or" },
  { id: 'wood_plank',    label: 'Planche' },
  { id: 'small_leather', label: 'Petite pièce de cuir' },
  { id: 'big_leather',   label: 'Grosse pièce de cuir' },
  { id: 'cloth',         label: 'Chiffon' },
  { id: 'clothe_coton',  label: 'Linge de coton' },
  { id: 'coal',          label: 'Charbon' },
  { id: 'charcoal_bag',  label: 'Sac de charbon' },
];
const MAT_LABEL_TO_ID = Object.fromEntries(MATERIALS.map(m => [m.label, m.id]));

// Recettes : mapping nom du catalogue -> matières consommées par unité produite
const RECIPES = {
  // Revolvers
  "Double Action":             [{item:'iron_ingot',amount:1},{item:'wood_plank',amount:1}],
  "Cattleman":                 [{item:'iron_ingot',amount:1},{item:'wood_plank',amount:2}],
  "Navy":                      [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "Schofield":                 [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "LeMat":                     [{item:'iron_ingot',amount:2},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  // Pistolets
  "Mauser":                    [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "M1899":                     [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "Volcanic":                  [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "Pistolet semi-automatique": [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  // Pompes / Fusils
  "Canon scié":                [{item:'iron_ingot',amount:3},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:2}],
  "Double canon":              [{item:'iron_ingot',amount:3},{item:'copper_ingot',amount:3},{item:'wood_plank',amount:4}],
  "Fusil à répétition":        [{item:'iron_ingot',amount:4},{item:'copper_ingot',amount:4},{item:'wood_plank',amount:4}],
  "Pompe":                     [{item:'iron_ingot',amount:4},{item:'copper_ingot',amount:4},{item:'wood_plank',amount:4}],
  "Pompe semi-auto":           [{item:'iron_ingot',amount:4},{item:'copper_ingot',amount:4},{item:'wood_plank',amount:4}],
  "Éléphant":                  [{item:'iron_ingot',amount:3},{item:'copper_ingot',amount:4},{item:'gold_ingot',amount:3},{item:'wood_plank',amount:4}],
  // Carabines
  "Litchfield":                [{item:'iron_ingot',amount:4},{item:'copper_ingot',amount:3},{item:'wood_plank',amount:4}],
  "Petit gibier":              [{item:'iron_ingot',amount:1},{item:'wood_plank',amount:1}],
  "Springfield":               [{item:'iron_ingot',amount:3},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:4}],
  "Lancaster":                 [{item:'iron_ingot',amount:4},{item:'copper_ingot',amount:3},{item:'wood_plank',amount:4}],
  "Evans":                     [{item:'iron_ingot',amount:3},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:3}],
  "Verrou":                    [{item:'iron_ingot',amount:5},{item:'copper_ingot',amount:4},{item:'wood_plank',amount:4}],
  "Carabine à répétition":     [{item:'iron_ingot',amount:2},{item:'copper_ingot',amount:2},{item:'wood_plank',amount:3}],
  // Armes blanches / lancer
  "Couteaux de chasse":        [{item:'iron',amount:2},{item:'wood_plank',amount:1}],
  "Lasso":                     [{item:'small_leather',amount:1},{item:'cloth',amount:1}],
  "Lasso amélioré":            [{item:'clothe_coton',amount:2},{item:'cloth',amount:2},{item:'small_leather',amount:2}],
  "Machette aguila":           [{item:'iron',amount:4},{item:'small_leather',amount:2}],
  "Marteau":                   [{item:'iron',amount:4},{item:'small_leather',amount:2}],
  "Hachette de chasseur":      [{item:'iron',amount:4},{item:'small_leather',amount:2}],
  "Couteaux de lancer":        [{item:'big_leather',amount:2},{item:'cloth',amount:2}],
  // Munitions normales
  "Munitions revolver":              [{item:'iron',amount:2},{item:'coal',amount:2}],
  "Munitions pistolet":              [{item:'iron',amount:2},{item:'coal',amount:2}],
  "Munitions petit gibier (fusil)":  [{item:'iron',amount:2},{item:'coal',amount:2}],
  "Munitions carabine":              [{item:'iron',amount:2},{item:'coal',amount:2}],
  "Munitions pompe":                 [{item:'iron',amount:2},{item:'coal',amount:2}],
  "Munitions fusil":                 [{item:'iron',amount:2},{item:'coal',amount:2}],
  // Munitions spéciales
  "Revolver Express":        [{item:'iron',amount:2},{item:'charcoal_bag',amount:1}],
  "Revolver Véloce":         [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Revolver Tête creuse":    [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Carabine Express":        [{item:'iron',amount:2},{item:'charcoal_bag',amount:1}],
  "Carabine Véloce":         [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Carabine Tête creuse":    [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Fusil Express":           [{item:'iron',amount:2},{item:'charcoal_bag',amount:1}],
  "Fusil Véloce":            [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Fusil Tête creuse":       [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Pistolet Express":        [{item:'iron',amount:2},{item:'charcoal_bag',amount:1}],
  "Pistolet Véloce":         [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Pistolet Tête creuse":    [{item:'iron',amount:2},{item:'coal',amount:4}],
  "Munition éléphant":       [{item:'iron_ingot',amount:1},{item:'copper_ingot',amount:1},{item:'coal',amount:8}],
  "Pompe Slug":              [{item:'iron',amount:2},{item:'coal',amount:4}],
  // Divers
  "Jumelles":                [{item:'iron',amount:2}],
};

const ADMIN_ROLES = ["Patron", "Co-patron"];
const DEFAULT_ADMIN_PIN = "0826";

const EMPLOYES_DEFAULT = [
  {prenom:"Dikson",   nom:"Fisk",     statut:"Patron",    salaire:300, pin:DEFAULT_ADMIN_PIN},
  {prenom:"Nastos",   nom:"Martinez", statut:"Co-patron", salaire:300, pin:DEFAULT_ADMIN_PIN},
  {prenom:"William",  nom:"Stilwell", statut:"Gérant",    salaire:300},
  {prenom:"Wyatt",    nom:"Earp",     statut:"Employé",   salaire:300},
  {prenom:"Butch",    nom:"Harison",  statut:"Employé",   salaire:300},
  {prenom:"James",    nom:"Heller",   statut:"Employé",   salaire:300}
];

// ============================================================
// STORAGE — cache local + sync via Worker
// ============================================================
const STORAGE_KEY = "carcanhoes_data_v1";
const GITHUB_KEY = "carcanhoes_github_v1";
const USER_KEY = "carcanhoes_user_v1";

let data = loadData();
let githubConfig = loadGithubConfig();
let currentUser = null;
let syncStatus = "offline"; // offline | pending | syncing | synced | error
let syncMessage = "";
let saveTimer = null;
let isApplyingRemoteState = false;  // évite boucle push→pull→push
let lastRemoteVersion = 0;

function emptyInventory() {
  return Object.fromEntries(MATERIALS.map(m => [m.id, 0]));
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.inventory) parsed.inventory = emptyInventory();
      MATERIALS.forEach(m => { if (!(m.id in parsed.inventory)) parsed.inventory[m.id] = 0; });
      if (Array.isArray(parsed.employes)) {
        parsed.employes.forEach(e => {
          if (ADMIN_ROLES.includes(e.statut) && !e.pin) e.pin = DEFAULT_ADMIN_PIN;
        });
      }
      return parsed;
    } catch(e) {}
  }
  return {
    ventes: [],
    customs: [],
    occas: [],
    depDed: [],
    depNonDed: [],
    employes: [...EMPLOYES_DEFAULT],
    impots: { semaine: "", du: "", au: "", capital: 0 },
    inventory: emptyInventory()
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  schedulePushToWorker();
}

function saveDataLocalOnly() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadGithubConfig() {
  const raw = localStorage.getItem(GITHUB_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  return { workerUrl: "", teamPassword: "", userName: "", lastPush: null };
}

function saveGithubConfigObj() {
  localStorage.setItem(GITHUB_KEY, JSON.stringify(githubConfig));
}

// ============================================================
// SYNC STATUS (UI indicator in header)
// ============================================================
function setSyncStatus(state, message = "") {
  syncStatus = state;
  syncMessage = message;
  const dot = document.getElementById("sync-dot");
  const label = document.getElementById("sync-label");
  if (!dot || !label) return;
  dot.className = "h-2 w-2 rounded-full state-" + state;
  const labels = {
    offline: "Local",
    pending: "Modif en attente",
    syncing: "Synchro…",
    synced:  "Synchronisé",
    error:   "Erreur sync"
  };
  label.textContent = labels[state] || state;
  label.title = message || "";
}

// ============================================================
// WORKER SYNC — état partagé
// ============================================================
async function loadStateFromWorker() {
  if (!githubConfig.workerUrl) return;
  setSyncStatus("syncing");
  try {
    const res = await fetch(`${githubConfig.workerUrl}/state`);
    const j = await res.json();
    if (!res.ok || !j.ok) throw new Error(j.error || `HTTP ${res.status}`);
    isApplyingRemoteState = true;
    const { meta, ...rest } = j.state;
    data = { ...data, ...rest };
    if (!data.inventory) data.inventory = emptyInventory();
    MATERIALS.forEach(m => { if (!(m.id in data.inventory)) data.inventory[m.id] = 0; });
    lastRemoteVersion = meta?.version || 0;
    saveDataLocalOnly();
    refreshAll();
    isApplyingRemoteState = false;
    setSyncStatus("synced", meta?.updatedAt ? `Mis à jour le ${new Date(meta.updatedAt).toLocaleString("fr-FR")} par ${meta.updatedBy}` : "");
  } catch (e) {
    setSyncStatus("error", e.message);
  }
}

function schedulePushToWorker() {
  if (isApplyingRemoteState) return;
  if (!githubConfig.workerUrl || !githubConfig.teamPassword) {
    setSyncStatus("offline");
    return;
  }
  setSyncStatus("pending");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushStateToWorker, 800);
}

async function pushStateToWorker() {
  if (!githubConfig.workerUrl || !githubConfig.teamPassword) {
    setSyncStatus("offline");
    return;
  }
  setSyncStatus("syncing");
  try {
    const res = await fetch(githubConfig.workerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "save",
        password: githubConfig.teamPassword,
        user: githubConfig.userName || "inconnu",
        state: data
      })
    });
    const j = await res.json();
    if (!res.ok || !j.success) throw new Error(j.error || `HTTP ${res.status}`);
    lastRemoteVersion = j.version || lastRemoteVersion + 1;
    setSyncStatus("synced", `Version ${lastRemoteVersion}`);
  } catch (e) {
    setSyncStatus("error", e.message);
    toast("Erreur de synchronisation", e.message, "error", 5000);
  }
}

async function refreshFromWorker() {
  if (!githubConfig.workerUrl) {
    toast("Non configuré", "Configure d'abord le Worker dans les Paramètres.", "error");
    return;
  }
  await loadStateFromWorker();
  toast("Données actualisées", "État à jour depuis le serveur.", "success", 2000);
}

// Auto-refresh toutes les 45s si configuré et onglet visible
setInterval(() => {
  if (document.hidden) return;
  if (!githubConfig.workerUrl || syncStatus === "pending" || syncStatus === "syncing") return;
  // Poll léger : GET /state et compare version
  fetch(`${githubConfig.workerUrl}/state`)
    .then(r => r.json())
    .then(j => {
      if (j.ok && j.state?.meta?.version > lastRemoteVersion) {
        loadStateFromWorker();
      }
    })
    .catch(() => {});
}, 45000);

// Tab switching handled by inline script in HTML (shadcn-style)

// ============================================================
// HELPERS
// ============================================================
function fmt(n) { return "$" + Number(n||0).toFixed(2); }
function today() { return new Date().toISOString().slice(0,10); }

function isoWeek(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

function currentWeekRange() {
  const d = new Date();
  const day = d.getDay() || 7;
  const monday = new Date(d); monday.setDate(d.getDate() - day + 1);
  const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
  const iso = dt => dt.toISOString().slice(0,10);
  return { semaine: isoWeek(d), du: iso(monday), au: iso(sunday) };
}

function fillSelect(sel, options, placeholder) {
  sel.innerHTML = "";
  if (placeholder) {
    const o = document.createElement("option");
    o.value = ""; o.textContent = placeholder; o.disabled = true; o.selected = true;
    sel.appendChild(o);
  }
  options.forEach(opt => {
    if (typeof opt === 'string') {
      const o = document.createElement("option");
      o.value = opt; o.textContent = opt;
      sel.appendChild(o);
    } else if (opt.group) {
      const og = document.createElement("optgroup");
      og.label = opt.group;
      opt.items.forEach(it => {
        const o = document.createElement("option");
        o.value = it.value; o.textContent = it.label;
        og.appendChild(o);
      });
      sel.appendChild(og);
    }
  });
}

function employesList() {
  return data.employes.map(e => `${e.prenom} ${e.nom}`);
}

function armesVenteOptions() {
  const opts = [];
  for (const [cat, armes] of Object.entries(CATALOGUE)) {
    opts.push({
      group: cat,
      items: Object.entries(armes).map(([nom, prix]) => ({
        value: JSON.stringify({nom, prix}),
        label: `${nom} — ${fmt(prix)}`
      }))
    });
  }
  return opts;
}

function armesOccasOptions() {
  return Object.entries(OCCAS).map(([nom, p]) => ({
    value: JSON.stringify({nom, cat: p.cat}),
    label: `${nom} (neuf ${fmt(p.cat)})`
  }));
}

// ============================================================
// AUTH / PERMISSIONS
// ============================================================
function isAdmin() {
  return !!currentUser && ADMIN_ROLES.includes(currentUser.statut);
}

function requireAdmin() {
  if (!isAdmin()) {
    toast("Action réservée", "Seuls le Patron et le Co-patron peuvent effectuer cette action.", "error", 3500);
    return false;
  }
  return true;
}

function loadCurrentUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    const u = JSON.parse(raw);
    const match = data.employes.find(e => e.prenom === u.prenom && e.nom === u.nom);
    if (!match || match.statut !== u.statut) return null;
    return { prenom: match.prenom, nom: match.nom, statut: match.statut };
  } catch(e) { return null; }
}

function persistCurrentUser() {
  if (currentUser) localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
  else localStorage.removeItem(USER_KEY);
}

function logout() {
  currentUser = null;
  persistCurrentUser();
  refreshUserChip();
  applyAdminLock();
  showLoginModal();
}

function refreshUserChip() {
  const chip = document.getElementById("user-chip");
  if (!chip) return;
  if (!currentUser) {
    chip.classList.add("hidden");
    return;
  }
  chip.classList.remove("hidden");
  document.getElementById("user-chip-label").textContent = `${currentUser.prenom} ${currentUser.nom}`;
  const role = document.getElementById("user-chip-role");
  role.textContent = currentUser.statut;
  role.className = "badge " + (isAdmin() ? "badge-success" : "badge-muted");
}

function applyAdminLock() {
  const admin = isAdmin();
  document.querySelectorAll("[data-admin-only]").forEach(el => {
    if (admin) {
      el.disabled = false;
      el.removeAttribute("title");
      el.classList.remove("is-locked");
    } else {
      el.disabled = true;
      el.setAttribute("title", "Réservé au Patron / Co-patron");
      el.classList.add("is-locked");
    }
  });
}

function showLoginModal() {
  const modal = document.getElementById("login-modal");
  if (!modal) return;
  const select = document.getElementById("login-employe");
  select.innerHTML = '<option value="">-- Choisir --</option>' + data.employes.map((e, i) =>
    `<option value="${i}">${e.prenom} ${e.nom} — ${e.statut}</option>`
  ).join("");
  document.getElementById("login-pin").value = "";
  document.getElementById("login-pin-row").classList.add("hidden");
  document.getElementById("login-error").textContent = "";
  modal.classList.remove("hidden");
  setTimeout(() => select.focus(), 30);
}

function hideLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.add("hidden");
}

function onLoginEmployeChange() {
  const val = document.getElementById("login-employe").value;
  const row = document.getElementById("login-pin-row");
  document.getElementById("login-error").textContent = "";
  if (val === "" || !data.employes[val]) {
    row.classList.add("hidden");
    return;
  }
  const e = data.employes[val];
  if (ADMIN_ROLES.includes(e.statut)) {
    row.classList.remove("hidden");
    document.getElementById("login-pin").value = "";
    setTimeout(() => document.getElementById("login-pin").focus(), 30);
  } else {
    row.classList.add("hidden");
  }
}

function submitLogin() {
  const val = document.getElementById("login-employe").value;
  const errEl = document.getElementById("login-error");
  if (val === "" || !data.employes[val]) {
    errEl.textContent = "Choisis ton profil.";
    return;
  }
  const e = data.employes[val];
  if (ADMIN_ROLES.includes(e.statut)) {
    const pin = document.getElementById("login-pin").value;
    if (pin !== (e.pin || DEFAULT_ADMIN_PIN)) {
      errEl.textContent = "Code PIN incorrect.";
      return;
    }
  }
  currentUser = { prenom: e.prenom, nom: e.nom, statut: e.statut };
  persistCurrentUser();
  hideLoginModal();
  refreshUserChip();
  applyAdminLock();
  toast("Connexion réussie", `Bienvenue ${currentUser.prenom} — ${currentUser.statut}`, "success", 2500);
}

// ============================================================
// INIT UI
// ============================================================
function initUI() {
  document.getElementById("v-date").value = today();
  document.getElementById("c-date").value = today();
  document.getElementById("o-date").value = today();
  document.getElementById("dd-date").value = today();
  document.getElementById("dnd-date").value = today();

  fillSelect(document.getElementById("v-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("c-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("o-vendeur"), employesList(), "-- Armurier --");

  fillSelect(document.getElementById("v-arme"), armesVenteOptions(), "-- Choisir une arme --");
  fillSelect(document.getElementById("o-arme"), [{group:"Armes reprises", items: armesOccasOptions()}], "-- Choisir une arme --");

  const wk = currentWeekRange();
  document.getElementById("i-semaine").value = wk.semaine;
  document.getElementById("i-du").value = wk.du;
  document.getElementById("i-au").value = wk.au;
  data.impots.semaine = wk.semaine;
  data.impots.du = wk.du;
  data.impots.au = wk.au;
  document.getElementById("i-capital").value = data.impots.capital || 0;

  initGithubUI();
  refreshAll();

  // Charge l'état partagé depuis le Worker si configuré
  if (githubConfig.workerUrl) {
    loadStateFromWorker();
  } else {
    setSyncStatus("offline");
  }
}

// ============================================================
// VENTES
// ============================================================
function venteCalc() {
  const selArme = document.getElementById("v-arme").value;
  const qte = Number(document.getElementById("v-qte").value) || 1;
  const reduc = Number(document.getElementById("v-reduc").value) || 0;
  if (!selArme) {
    document.getElementById("v-prix-cat").value = "";
    document.getElementById("v-prix-final").value = "";
    return;
  }
  const {prix} = JSON.parse(selArme);
  const brut = prix * qte;
  const final = brut * (1 - reduc/100);
  document.getElementById("v-prix-cat").value = brut.toFixed(2);
  document.getElementById("v-prix-final").value = final.toFixed(2);
}

function applyRecipe(nom, qte, sign) {
  const r = RECIPES[nom];
  if (!r) return;
  r.forEach(({item, amount}) => {
    const delta = amount * qte * sign;
    data.inventory[item] = Math.max(0, (data.inventory[item] || 0) + delta);
  });
}

function addVente() {
  const selArme = document.getElementById("v-arme").value;
  const vendeur = document.getElementById("v-vendeur").value;
  if (!selArme) { alert("Choisissez une arme"); return; }
  if (!vendeur) { alert("Choisissez un vendeur"); return; }
  const {nom, prix} = JSON.parse(selArme);
  const qte = Number(document.getElementById("v-qte").value) || 1;
  const reduc = Number(document.getElementById("v-reduc").value) || 0;
  const brut = prix * qte;
  const final = brut * (1 - reduc/100);
  data.ventes.push({
    id: Date.now(),
    date: today(),
    vendeur,
    client: document.getElementById("v-client").value,
    serie: document.getElementById("v-serie").value,
    arme: nom,
    qte,
    prix: brut,
    reduc,
    final
  });
  applyRecipe(nom, qte, -1);
  saveData();
  document.getElementById("v-date").value = today();
  document.getElementById("v-client").value = "";
  document.getElementById("v-serie").value = "";
  document.getElementById("v-qte").value = "1";
  document.getElementById("v-reduc").value = "0";
  refreshVentes();
  refreshImpots();
  refreshInventory();
}

function delVente(id) {
  if (!requireAdmin()) return;
  if (!confirm("Supprimer cette vente ?")) return;
  const v = data.ventes.find(x => x.id === id);
  if (v) applyRecipe(v.arme, v.qte || 1, +1);
  data.ventes = data.ventes.filter(v => v.id !== id);
  saveData();
  refreshVentes();
  refreshImpots();
  refreshInventory();
}

function refreshVentes() {
  const tbody = document.getElementById("v-table");
  const search = (document.getElementById("v-search").value || "").toLowerCase();
  const filtered = data.ventes.filter(v =>
    !search ||
    (v.client||"").toLowerCase().includes(search) ||
    (v.arme||"").toLowerCase().includes(search) ||
    (v.vendeur||"").toLowerCase().includes(search) ||
    (v.serie||"").toLowerCase().includes(search)
  ).sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td>${v.date||""}</td>
      <td>${v.vendeur||""}</td>
      <td>${v.client||""}</td>
      <td>${v.serie||""}</td>
      <td>${v.arme||""}</td>
      <td>${v.qte||1}</td>
      <td>${fmt(v.prix)}</td>
      <td>${v.reduc||0}%</td>
      <td><b>${fmt(v.final)}</b></td>
      <td class="actions-cell"><button data-admin-only class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delVente(${v.id})">✕</button></td>
    </tr>
  `).join("");
  const total = data.ventes.reduce((s,v) => s + (v.final||0), 0);
  document.getElementById("v-total").textContent = fmt(total);
  document.getElementById("v-count").textContent = String(data.ventes.length);
  applyAdminLock();
}

// ============================================================
// CUSTOMS
// ============================================================
function customCalc() {
  const cout = Number(document.getElementById("c-cout").value) || 0;
  const reduc = Number(document.getElementById("c-reduc").value) || 0;
  const part = cout * 0.25;
  const final = (cout + part) * (1 - reduc/100);
  document.getElementById("c-prix-final").value = final.toFixed(2);
  document.getElementById("c-part-entreprise").value = (part * (1 - reduc/100)).toFixed(2);
}

function addCustom() {
  const cout = Number(document.getElementById("c-cout").value);
  const vendeur = document.getElementById("c-vendeur").value;
  if (!cout || cout<=0) { alert("Entrez un coût valide"); return; }
  if (!vendeur) { alert("Choisissez un vendeur"); return; }
  const reduc = Number(document.getElementById("c-reduc").value) || 0;
  const part = cout * 0.25;
  const final = (cout + part) * (1 - reduc/100);
  const partFinal = part * (1 - reduc/100);
  data.customs.push({
    id: Date.now(),
    date: today(),
    vendeur,
    client: document.getElementById("c-client").value,
    arme: document.getElementById("c-arme").value,
    cout,
    final,
    part: partFinal,
    reduc,
    info: document.getElementById("c-info").value
  });
  saveData();
  document.getElementById("c-date").value = today();
  document.getElementById("c-client").value = "";
  document.getElementById("c-arme").value = "";
  document.getElementById("c-cout").value = "";
  document.getElementById("c-info").value = "";
  document.getElementById("c-reduc").value = "0";
  customCalc();
  refreshCustoms();
  refreshImpots();
}

function delCustom(id) {
  if (!requireAdmin()) return;
  if (!confirm("Supprimer ce custom ?")) return;
  data.customs = data.customs.filter(c => c.id !== id);
  saveData();
  refreshCustoms();
  refreshImpots();
}

function refreshCustoms() {
  const tbody = document.getElementById("c-table");
  const search = (document.getElementById("c-search").value || "").toLowerCase();
  const filtered = data.customs.filter(c =>
    !search ||
    (c.client||"").toLowerCase().includes(search) ||
    (c.arme||"").toLowerCase().includes(search) ||
    (c.vendeur||"").toLowerCase().includes(search)
  ).sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td>${c.date||""}</td>
      <td>${c.vendeur||""}</td>
      <td>${c.client||""}</td>
      <td>${c.arme||""}</td>
      <td>${fmt(c.cout)}</td>
      <td><b>${fmt(c.final)}</b></td>
      <td style="color:#2d5a3d"><b>${fmt(c.part)}</b></td>
      <td>${c.reduc||0}%</td>
      <td>${c.info||""}</td>
      <td class="actions-cell"><button data-admin-only class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delCustom(${c.id})">✕</button></td>
    </tr>
  `).join("");
  const totalFinal = data.customs.reduce((s,c) => s + (c.final||0), 0);
  const totalPart = data.customs.reduce((s,c) => s + (c.part||0), 0);
  document.getElementById("c-total").textContent = fmt(totalFinal);
  document.getElementById("c-total-part").textContent = fmt(totalPart);
  document.getElementById("c-count").textContent = String(data.customs.length);
  applyAdminLock();
}

// ============================================================
// OCCAS
// ============================================================
function occasCalc() {
  const selArme = document.getElementById("o-arme").value;
  const taux = Number(document.getElementById("o-taux").value) || 50;
  if (!selArme) {
    document.getElementById("o-prix-reprise").value = "";
    document.getElementById("o-prix-revente").value = "";
    return;
  }
  const {cat} = JSON.parse(selArme);
  document.getElementById("o-prix-reprise").value = (cat * (taux / 100)).toFixed(2);
  document.getElementById("o-prix-revente").value = (cat * 0.85).toFixed(2);
}

function addOccas() {
  const selArme = document.getElementById("o-arme").value;
  const vendeur = document.getElementById("o-vendeur").value;
  if (!selArme) { alert("Choisissez une arme"); return; }
  if (!vendeur) { alert("Choisissez un armurier"); return; }
  const {nom, cat} = JSON.parse(selArme);
  const taux = Number(document.getElementById("o-taux").value) || 50;
  data.occas.push({
    id: Date.now(),
    date: today(),
    vendeur,
    client: document.getElementById("o-client").value,
    arme: nom,
    serie: document.getElementById("o-serie").value,
    tauxReprise: taux,
    prixReprise: cat * (taux / 100),
    prixRevente: cat * 0.85,
    vendue: false,
    info: document.getElementById("o-info").value
  });
  saveData();
  document.getElementById("o-date").value = today();
  document.getElementById("o-client").value = "";
  document.getElementById("o-serie").value = "";
  document.getElementById("o-info").value = "";
  refreshOccas();
  refreshImpots();
}

function toggleOccasVendue(id) {
  const o = data.occas.find(x => x.id === id);
  if (!o) return;
  o.vendue = !o.vendue;
  saveData();
  refreshOccas();
  refreshImpots();
}

function delOccas(id) {
  if (!requireAdmin()) return;
  if (!confirm("Supprimer cette arme d'occasion ?")) return;
  data.occas = data.occas.filter(o => o.id !== id);
  saveData();
  refreshOccas();
  refreshImpots();
}

function refreshOccas() {
  const tbody = document.getElementById("o-table");
  const hideSold = document.getElementById("o-hide-sold").checked;
  const filtered = data.occas
    .filter(o => !hideSold || !o.vendue)
    .sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(o => `
    <tr style="${o.vendue?'opacity:0.5;text-decoration:line-through':''}">
      <td>${o.date||""}</td>
      <td>${o.vendeur||""}</td>
      <td>${o.client||""}</td>
      <td>${o.arme||""}</td>
      <td>${o.serie||""}</td>
      <td>${o.tauxReprise||50}%</td>
      <td>${fmt(o.prixReprise)}</td>
      <td><b>${fmt(o.prixRevente)}</b></td>
      <td><input type="checkbox" ${o.vendue?'checked':''} onchange="toggleOccasVendue(${o.id})"></td>
      <td>${o.info||""}</td>
      <td class="actions-cell"><button data-admin-only class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delOccas(${o.id})">✕</button></td>
    </tr>
  `).join("");
  const stock = data.occas.filter(o => !o.vendue);
  document.getElementById("o-stock-count").textContent = stock.length;
  document.getElementById("o-stock-cout").textContent = fmt(stock.reduce((s,o) => s + (o.prixReprise||0), 0));
  document.getElementById("o-stock-revente").textContent = fmt(stock.reduce((s,o) => s + (o.prixRevente||0), 0));
  document.getElementById("o-count").textContent = String(data.occas.length);
  applyAdminLock();
}

// ============================================================
// IMPOTS
// ============================================================
function saveImpots() {
  data.impots.semaine = document.getElementById("i-semaine").value;
  data.impots.du = document.getElementById("i-du").value;
  data.impots.au = document.getElementById("i-au").value;
  data.impots.capital = Number(document.getElementById("i-capital").value) || 0;
  saveData();
  refreshImpots();
  alert("Fiche sauvegardée.");
}

function addDepDed() {
  const date = document.getElementById("dd-date").value;
  const lib = document.getElementById("dd-lib").value;
  const mnt = Number(document.getElementById("dd-mnt").value);
  const qte = Number(document.getElementById("dd-qte").value) || 0;
  if (!lib || !mnt) { alert("Remplir libellé et montant"); return; }
  const rec = {id:Date.now(), date, lib, mnt};
  const matId = MAT_LABEL_TO_ID[lib];
  if (matId && qte > 0) {
    rec.matItem = matId;
    rec.matQty = qte;
    data.inventory[matId] = (data.inventory[matId] || 0) + qte;
  }
  data.depDed.push(rec);
  saveData();
  document.getElementById("dd-lib").value = "";
  document.getElementById("dd-mnt").value = "";
  document.getElementById("dd-qte").value = "";
  refreshImpots();
  refreshInventory();
}

function delDepDed(id) {
  const d = data.depDed.find(x => x.id === id);
  if (d && d.matItem && d.matQty) {
    data.inventory[d.matItem] = Math.max(0, (data.inventory[d.matItem] || 0) - d.matQty);
  }
  data.depDed = data.depDed.filter(d => d.id !== id);
  saveData();
  refreshImpots();
  refreshInventory();
}

function addDepNonDed() {
  const date = document.getElementById("dnd-date").value;
  const lib = document.getElementById("dnd-lib").value;
  const mnt = Number(document.getElementById("dnd-mnt").value);
  if (!lib || !mnt) { alert("Remplir libellé et montant"); return; }
  data.depNonDed.push({id:Date.now(), date, lib, mnt});
  saveData();
  document.getElementById("dnd-lib").value = "";
  document.getElementById("dnd-mnt").value = "";
  refreshImpots();
}

function delDepNonDed(id) {
  data.depNonDed = data.depNonDed.filter(d => d.id !== id);
  saveData();
  refreshImpots();
}

function updateSalaire(idx, field, val) {
  if (!requireAdmin()) { refreshImpots(); return; }
  if (field === "heures") data.employes[idx].heures = Number(val)||0;
  else if (field === "salaire") data.employes[idx].salaire = Number(val)||0;
  else if (field === "prime") data.employes[idx].prime = Number(val)||0;
  saveData();
  refreshImpots();
}

function refreshImpots() {
  const dd = document.getElementById("dd-table");
  dd.innerHTML = data.depDed.map(d => `
    <tr><td>${d.date||""}</td><td>${d.lib}</td><td>${d.matQty||""}</td><td>${fmt(d.mnt)}</td>
    <td><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delDepDed(${d.id})">✕</button></td></tr>
  `).join("");
  const totalDD = data.depDed.reduce((s,d) => s + (d.mnt||0), 0);
  document.getElementById("dep-ded-total").textContent = fmt(totalDD);

  const dnd = document.getElementById("dnd-table");
  dnd.innerHTML = data.depNonDed.map(d => `
    <tr><td>${d.date||""}</td><td>${d.lib}</td><td>${fmt(d.mnt)}</td>
    <td><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delDepNonDed(${d.id})">✕</button></td></tr>
  `).join("");
  const totalDND = data.depNonDed.reduce((s,d) => s + (d.mnt||0), 0);
  document.getElementById("dep-nonded-total").textContent = fmt(totalDND);

  const sal = document.getElementById("sal-table");
  sal.innerHTML = data.employes.map((e,i) => {
    const s = Number(e.salaire)||0;
    const p = Number(e.prime)||0;
    return `<tr>
      <td>${i+1}</td>
      <td>${e.prenom} ${e.nom}</td>
      <td>${e.statut}</td>
      <td><input data-admin-only type="number" value="${e.heures||''}" onchange="updateSalaire(${i},'heures',this.value)" style="width:60px"></td>
      <td><input data-admin-only type="number" value="${s}" onchange="updateSalaire(${i},'salaire',this.value)" style="width:80px"></td>
      <td><input data-admin-only type="number" value="${p}" onchange="updateSalaire(${i},'prime',this.value)" style="width:80px"></td>
      <td><b>${fmt(s+p)}</b></td>
    </tr>`;
  }).join("");
  const totalSal = data.employes.reduce((acc,e) => acc + (Number(e.salaire)||0) + (Number(e.prime)||0), 0);
  document.getElementById("sal-total").textContent = fmt(totalSal);

  const revenus = data.ventes.reduce((s,v)=>s+(v.final||0),0)
                + data.customs.reduce((s,c)=>s+(c.final||0),0)
                + data.occas.filter(o=>o.vendue).reduce((s,o)=>s+(o.prixRevente||0),0);
  const capital = Number(data.impots.capital)||0;
  const imposable = Math.max(0, revenus - totalSal - totalDD);
  const impots = imposable * 0.5;
  const bilan = revenus - totalSal - totalDD - impots - totalDND;
  const capitalFin = capital + bilan;

  const neg = n => n > 0 ? "-" + fmt(n) : fmt(n);
  document.getElementById("r-capital").textContent = fmt(capital);
  document.getElementById("r-revenus").textContent = fmt(revenus);
  document.getElementById("r-export").textContent = fmt(0);
  document.getElementById("r-salaires").textContent = neg(totalSal);
  document.getElementById("r-dep-ded").textContent = neg(totalDD);
  document.getElementById("r-imposable").textContent = fmt(imposable);
  document.getElementById("r-impots").textContent = fmt(impots);
  document.getElementById("r-dep-nonded").textContent = neg(totalDND);
  document.getElementById("r-bilan").textContent = fmt(bilan);
  document.getElementById("r-capital-fin").textContent = fmt(capitalFin);
  applyAdminLock();
}

// ============================================================
// EMPLOYES
// ============================================================
function addEmp() {
  if (!requireAdmin()) return;
  const prenom = document.getElementById("emp-prenom").value.trim();
  const nom = document.getElementById("emp-nom").value.trim();
  const statut = document.getElementById("emp-statut").value;
  const salaire = Number(document.getElementById("emp-salaire").value) || 0;
  if (!prenom || !nom) { toast("Erreur", "Prénom et nom requis.", "error"); return; }
  const emp = {prenom, nom, statut, salaire};
  if (ADMIN_ROLES.includes(statut)) emp.pin = DEFAULT_ADMIN_PIN;
  data.employes.push(emp);
  saveData();
  document.getElementById("emp-prenom").value = "";
  document.getElementById("emp-nom").value = "";
  document.getElementById("emp-salaire").value = "300";
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé ajouté", `${prenom} ${nom} a rejoint l'équipe.`, "success", 2500);
}

function delEmp(idx) {
  if (!requireAdmin()) return;
  if (!confirm(`Supprimer ${data.employes[idx].prenom} ${data.employes[idx].nom} ?`)) return;
  data.employes.splice(idx, 1);
  saveData();
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé supprimé", "", "success", 2500);
}

function refreshVendeurSelects() {
  fillSelect(document.getElementById("v-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("c-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("o-vendeur"), employesList(), "-- Armurier --");
}

let editingEmpIdx = -1;

function startEditEmp(idx) {
  if (!requireAdmin()) return;
  editingEmpIdx = idx;
  refreshEmp();
}

function cancelEditEmp() {
  editingEmpIdx = -1;
  refreshEmp();
}

function saveEditEmp(idx) {
  if (!requireAdmin()) return;
  const prenom = document.getElementById(`emp-edit-prenom-${idx}`).value.trim();
  const nom = document.getElementById(`emp-edit-nom-${idx}`).value.trim();
  const statut = document.getElementById(`emp-edit-statut-${idx}`).value;
  const salaire = Number(document.getElementById(`emp-edit-salaire-${idx}`).value) || 0;
  if (!prenom || !nom) { toast("Erreur", "Prénom et nom requis.", "error"); return; }
  const updated = { ...data.employes[idx], prenom, nom, statut, salaire };
  if (ADMIN_ROLES.includes(statut) && !updated.pin) updated.pin = DEFAULT_ADMIN_PIN;
  data.employes[idx] = updated;
  saveData();
  editingEmpIdx = -1;
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé modifié", `${prenom} ${nom} mis à jour.`, "success", 2500);
}

function statutOptions(selected) {
  return ["Patron","Co-patron","Gérant","Employé"]
    .map(s => `<option ${s===selected?"selected":""}>${s}</option>`).join("");
}

function refreshEmp() {
  const tbody = document.getElementById("emp-table");
  const badge = document.getElementById("emp-count-badge");
  if (badge) badge.textContent = String(data.employes.length);
  tbody.innerHTML = data.employes.map((e,i) => {
    if (editingEmpIdx === i) {
      return `
        <tr class="bg-zinc-800/40">
          <td class="text-zinc-400">${i+1}</td>
          <td><input id="emp-edit-prenom-${i}" class="shadcn-input" value="${e.prenom}"></td>
          <td><input id="emp-edit-nom-${i}" class="shadcn-input" value="${e.nom}"></td>
          <td>
            <select id="emp-edit-statut-${i}" class="shadcn-input">${statutOptions(e.statut)}</select>
          </td>
          <td class="text-right">
            <input id="emp-edit-salaire-${i}" class="shadcn-input text-right" type="number" value="${Number(e.salaire)||0}" step="10">
          </td>
          <td class="text-right">
            <div class="inline-flex gap-1">
              <button class="shadcn-btn shadcn-btn-primary shadcn-btn-sm shadcn-btn-icon" onclick="saveEditEmp(${i})" title="Enregistrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </button>
              <button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon" onclick="cancelEditEmp()" title="Annuler">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }
    return `
      <tr>
        <td class="text-zinc-400">${i+1}</td>
        <td class="font-medium">${e.prenom}</td>
        <td class="font-medium">${e.nom}</td>
        <td><span class="badge badge-outline">${e.statut}</span></td>
        <td class="text-right mono">${fmt(e.salaire)}</td>
        <td class="text-right">
          <div class="inline-flex gap-1">
            <button data-admin-only class="shadcn-btn shadcn-btn-ghost shadcn-btn-sm shadcn-btn-icon" onclick="startEditEmp(${i})" title="Modifier">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </button>
            <button data-admin-only class="shadcn-btn shadcn-btn-ghost shadcn-btn-sm shadcn-btn-icon text-red-400 hover:bg-red-950/30" onclick="delEmp(${i})" title="Supprimer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
  applyAdminLock();
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function toast(title, desc, type = "info", duration = 4500) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  el.innerHTML = `
    <div class="toast-body">
      <div class="toast-title"></div>
      <div class="toast-desc"></div>
    </div>
    <button class="toast-close" aria-label="Fermer">×</button>
  `;
  el.querySelector(".toast-title").textContent = title;
  el.querySelector(".toast-desc").innerHTML = desc || "";
  const remove = () => {
    el.classList.add("removing");
    setTimeout(() => el.remove(), 200);
  };
  el.querySelector(".toast-close").onclick = remove;
  container.appendChild(el);
  if (duration > 0) setTimeout(remove, duration);
}

// ============================================================
// GITHUB SYNC via Cloudflare Worker
// ============================================================

function initGithubUI() {
  document.getElementById("wk-url").value      = githubConfig.workerUrl    || "";
  document.getElementById("wk-password").value = githubConfig.teamPassword || "";
  document.getElementById("wk-user").value     = githubConfig.userName     || "";
  document.getElementById("gh-week-date").value = today();
  updateGithubStatusPill();
  if (githubConfig.lastPush) {
    document.getElementById("gh-last-push").innerHTML =
      `Dernier push : <span class="mono">${new Date(githubConfig.lastPush.date).toLocaleString("fr-FR")}</span> → <a class="link" href="${githubConfig.lastPush.url}" target="_blank" rel="noreferrer">voir sur GitHub</a>`;
  }
}

function updateGithubStatusPill() {
  const pill = document.getElementById("gh-status-pill");
  if (!pill) return;
  const cfg = githubConfig;
  if (cfg.workerUrl && cfg.teamPassword) {
    pill.className = "badge badge-success";
    pill.textContent = "Configuré";
  } else {
    pill.className = "badge badge-muted";
    pill.textContent = "Non configuré";
  }
}

function saveGithubConfig() {
  if (!requireAdmin()) return;
  const urlBefore = githubConfig.workerUrl;
  githubConfig.workerUrl    = document.getElementById("wk-url").value.trim().replace(/\/$/, "");
  githubConfig.teamPassword = document.getElementById("wk-password").value;
  githubConfig.userName     = document.getElementById("wk-user").value.trim();
  saveGithubConfigObj();
  updateGithubStatusPill();
  toast("Configuration sauvegardée", "Les infos sont stockées dans ton navigateur uniquement.", "success");
  // Si URL nouvelle ou qu'on vient d'activer, recharger l'état partagé
  if (githubConfig.workerUrl && githubConfig.workerUrl !== urlBefore) {
    loadStateFromWorker();
  }
}

async function testGithubConnection() {
  const { workerUrl } = githubConfig;
  if (!workerUrl) {
    toast("Configuration incomplète", "Renseigne l'URL du Worker avant de tester.", "error");
    return;
  }
  try {
    const res = await fetch(workerUrl, { method: "GET" });
    const json = await res.json();
    if (res.ok && json.ok) {
      toast("Connexion OK", `Worker actif — cible : <span class="mono">${json.owner}/${json.repo}</span>`, "success");
    } else {
      toast("Échec de la connexion", json.error || `Réponse ${res.status}`, "error");
    }
  } catch (err) {
    toast("Erreur réseau", err.message, "error");
  }
}

function buildBilanMarkdown(weekDate) {
  const totalVentes = data.ventes.reduce((s,v) => s + (v.final||0), 0);
  const totalCustomsFinal = data.customs.reduce((s,c) => s + (c.final||0), 0);
  const totalCustomsPart = data.customs.reduce((s,c) => s + (c.part||0), 0);
  const totalOccasVendues = data.occas.filter(o => o.vendue).reduce((s,o) => s + (o.prixRevente||0), 0);
  const totalSal = data.employes.reduce((s,e) => s + (Number(e.salaire)||0) + (Number(e.prime)||0), 0);
  const totalDD = data.depDed.reduce((s,d) => s + (d.mnt||0), 0);
  const totalDND = data.depNonDed.reduce((s,d) => s + (d.mnt||0), 0);
  const revenus = totalVentes + totalCustomsFinal + totalOccasVendues;
  const imposable = Math.max(0, revenus - totalSal - totalDD);
  const impots = imposable * 0.5;
  const bilan = revenus - totalSal - totalDD - impots - totalDND;

  const f = n => "$" + Number(n||0).toFixed(2);
  return `# Bilan semaine · ${weekDate}

**Carcan'hoes — L'armurerie des Fisk**

---

## Récapitulatif

| Poste | Montant |
|---|---:|
| Revenus totaux (ventes + customs + occas) | ${f(revenus)} |
| — dont ventes d'armes | ${f(totalVentes)} |
| — dont customs | ${f(totalCustomsFinal)} (part entreprise : ${f(totalCustomsPart)}) |
| — dont armes d'occas vendues | ${f(totalOccasVendues)} |
| Salaires | -${f(totalSal)} |
| Dépenses déductibles | -${f(totalDD)} |
| **Montant imposable** | **${f(imposable)}** |
| Impôts à venir (50%) | ${f(impots)} |
| Dépenses non déductibles | -${f(totalDND)} |
| **Bilan** | **${f(bilan)}** |

## Statistiques

- Ventes enregistrées : **${data.ventes.length}**
- Customs enregistrés : **${data.customs.length}**
- Armes d'occas en stock : **${data.occas.filter(o => !o.vendue).length}** (vendues : ${data.occas.filter(o => o.vendue).length})
- Employés : **${data.employes.length}**

---

*Sauvegarde générée automatiquement le ${new Date().toLocaleString("fr-FR")}*
`;
}

async function pushWeekToGithub() {
  if (!requireAdmin()) return;
  const { workerUrl, teamPassword, userName } = githubConfig;
  if (!workerUrl || !teamPassword) {
    toast("Configuration incomplète", "Renseigne l'URL du Worker et le mot de passe équipe.", "error");
    return;
  }
  const btn = document.getElementById("gh-push-btn");
  const label = document.getElementById("gh-push-label");
  const originalLabel = label.textContent;
  btn.disabled = true;
  label.innerHTML = '<span class="spinner"></span> Envoi en cours…';

  try {
    // S'assure que les dernières modifs sont bien poussées avant l'archive
    if (saveTimer) { clearTimeout(saveTimer); await pushStateToWorker(); }

    const weekDate = document.getElementById("gh-week-date").value || today();
    const msg = (document.getElementById("gh-commit-msg").value || `Sauvegarde semaine ${weekDate}`).trim();

    const res = await fetch(workerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "archive",
        password: teamPassword,
        user: userName || "inconnu",
        commitMsg: msg,
        weekDate
      })
    });
    const json = await res.json();
    if (!res.ok || !json.success) {
      throw new Error(json.error || `Erreur Worker ${res.status}`);
    }

    const folderUrl = json.folderUrl;
    githubConfig.lastPush = { date: new Date().toISOString(), url: folderUrl };
    saveGithubConfigObj();
    document.getElementById("gh-last-push").innerHTML =
      `Dernier push : <span class="mono">${new Date().toLocaleString("fr-FR")}</span> → <a class="link" href="${folderUrl}" target="_blank" rel="noreferrer">voir sur GitHub</a>`;

    toast(
      "Semaine archivée sur GitHub",
      `${json.count} fichier(s) commité(s). <a class="link" href="${folderUrl}" target="_blank" rel="noreferrer">Ouvrir sur GitHub</a>`,
      "success", 8000
    );
  } catch (err) {
    toast("Erreur lors de l'archivage", err.message, "error", 8000);
  } finally {
    btn.disabled = false;
    label.textContent = originalLabel;
  }
}

// ============================================================
// EXPORT / IMPORT / RESET
// ============================================================
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `carcanhoes_sauvegarde_${today()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  if (!requireAdmin()) { event.target.value = ""; return; }
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!confirm("Remplacer toutes les données actuelles par la sauvegarde ?")) return;
      data = imported;
      saveData();
      refreshAll();
      alert("Données importées.");
    } catch(err) {
      alert("Fichier invalide.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

async function resetAll() {
  if (!requireAdmin()) return;
  const c1 = confirm("⚠ ATTENTION ⚠\n\nTu vas supprimer TOUTES les données PARTAGÉES :\n— toutes les ventes\n— tous les customs\n— toutes les armes d'occas\n— toute la fiche impôts\n— tous les employés\n\nTous les utilisateurs de l'app seront impactés.\nCette action est IRRÉVERSIBLE.\n\nContinuer ?");
  if (!c1) return;
  const c2 = prompt('Pour confirmer, tape : RESET');
  if (c2 !== "RESET") { toast("Reset annulé", "", "info"); return; }

  // Si Worker configuré, reset côté serveur
  if (githubConfig.workerUrl && githubConfig.teamPassword) {
    try {
      const res = await fetch(githubConfig.workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reset",
          password: githubConfig.teamPassword,
          user: githubConfig.userName || "inconnu",
          confirm: "RESET"
        })
      });
      const j = await res.json();
      if (!res.ok || !j.success) throw new Error(j.error || `HTTP ${res.status}`);
    } catch (e) {
      toast("Erreur reset serveur", e.message, "error");
      return;
    }
  }

  // Reset local
  localStorage.removeItem(STORAGE_KEY);
  data = loadData();
  refreshAll();
  toast("Données réinitialisées", "Le reset a été propagé à tous les utilisateurs.", "success", 4000);

  // Recharge l'état vide depuis le serveur pour caler la version
  if (githubConfig.workerUrl) loadStateFromWorker();
}

// ============================================================
// REFRESH ALL
// ============================================================
const PRIX_CATEGORIES = ["Revolvers", "Pistolets", "Pompes / Fusils de chasse", "Carabines"];

// Surcharges quand le fichier image ne correspond pas au slug auto
const ARME_IMAGE_OVERRIDE = {
  "Pistolet semi-automatique": "pistol-semi-auto",
  "Double canon":              "double-barrel",
  "Fusil à répétition":        "pompe-repetition",
  "Verrou":                    "fusil-a-verrou",
  "Carabine à répétition":     "carabine-repetition",
};

function armeSlug(nom) {
  if (ARME_IMAGE_OVERRIDE[nom]) return ARME_IMAGE_OVERRIDE[nom];
  return nom.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderPrix() {
  const container = document.getElementById("prix-container");
  if (!container) return;
  container.innerHTML = PRIX_CATEGORIES.map(cat => {
    const items = CATALOGUE[cat];
    if (!items) return "";
    const rows = Object.entries(items).map(([nom, prix]) => {
      const slug = armeSlug(nom);
      return `<tr>
        <td style="width:110px">
          <img src="images/armes/${slug}.png" alt="${nom}"
               style="width:90px;height:48px;object-fit:contain;display:block"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div style="width:90px;height:48px;display:none;align-items:center;justify-content:center;border:1px dashed hsl(var(--border));border-radius:6px;color:hsl(var(--muted-foreground));font-size:0.7rem">—</div>
        </td>
        <td><b>${nom}</b></td>
        <td style="text-align:right" class="mono">${fmt(prix)}</td>
        <td style="text-align:right" class="mono" style="color:#fbbf24">${fmt(prix * 0.95)}</td>
        <td style="text-align:right" class="mono" style="color:#34d399">${fmt(prix * 0.90)}</td>
      </tr>`;
    }).join("");
    return `
      <div class="shadcn-card p-6">
        <h2 class="text-xl font-semibold tracking-tight mb-4">${cat}</h2>
        <div class="overflow-hidden rounded-md border border-zinc-800">
          <table class="shadcn-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nom</th>
                <th style="text-align:right">Prix catalogue</th>
                <th style="text-align:right">-5%</th>
                <th style="text-align:right">-10%</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");
}

function refreshInventory() {
  const tbody = document.getElementById("inv-table");
  if (!tbody) return;
  tbody.innerHTML = MATERIALS.map(m => {
    const qty = data.inventory[m.id] || 0;
    return `<tr>
      <td>${m.label}</td>
      <td style="text-align:center${qty < 50 ? ';color:#ef4444' : ''}" class="mono"><b>${qty}</b></td>
      <td>
        <div class="flex gap-1 justify-center">
          <button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm" onclick="invAdjust('${m.id}', -1)">−1</button>
          <button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm" onclick="invAdjust('${m.id}', 1)">+1</button>
          <button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm" onclick="invSet('${m.id}')">Définir</button>
        </div>
      </td>
    </tr>`;
  }).join("");
}

function invAdjust(item, delta) {
  data.inventory[item] = Math.max(0, (data.inventory[item] || 0) + delta);
  saveData();
  refreshInventory();
}

function invSet(item) {
  const current = data.inventory[item] || 0;
  const v = prompt(`Nouvelle quantité pour ${item} :`, current);
  if (v === null) return;
  const n = Number(v);
  if (Number.isNaN(n) || n < 0) { alert("Valeur invalide"); return; }
  data.inventory[item] = Math.floor(n);
  saveData();
  refreshInventory();
}

function refreshAll() {
  refreshVentes();
  refreshCustoms();
  refreshOccas();
  refreshImpots();
  refreshEmp();
  refreshInventory();
  renderPrix();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener("input", e => {
  if (["v-arme","v-qte","v-reduc"].includes(e.target.id)) venteCalc();
  if (["c-cout","c-reduc"].includes(e.target.id)) customCalc();
  if (["o-arme","o-taux"].includes(e.target.id)) occasCalc();
  if (["i-semaine","i-du","i-au","i-capital"].includes(e.target.id)) {
    data.impots.semaine = document.getElementById("i-semaine").value;
    data.impots.du = document.getElementById("i-du").value;
    data.impots.au = document.getElementById("i-au").value;
    data.impots.capital = Number(document.getElementById("i-capital").value) || 0;
    saveData();
    refreshImpots();
  }
});
document.addEventListener("change", e => {
  if (["v-arme","v-qte","v-reduc"].includes(e.target.id)) venteCalc();
  if (["c-cout","c-reduc"].includes(e.target.id)) customCalc();
  if (["o-arme","o-taux"].includes(e.target.id)) occasCalc();
});

document.getElementById("v-search").addEventListener("input", refreshVentes);
document.getElementById("c-search").addEventListener("input", refreshCustoms);
document.getElementById("o-hide-sold").addEventListener("change", refreshOccas);

// ============================================================
// BOOT
// ============================================================
initUI();
currentUser = loadCurrentUser();
refreshUserChip();
applyAdminLock();
if (!currentUser) showLoginModal();

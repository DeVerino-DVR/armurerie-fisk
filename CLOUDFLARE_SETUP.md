# Setup Cloudflare Worker + KV (15 min)

Objectif : un seul token GitHub est stocké côté serveur (invisible pour tous). L'état de l'app (ventes, customs, etc.) est **partagé** entre tous les utilisateurs via Cloudflare KV. Les modifs de l'un sont visibles par les autres. Une archive hebdomadaire GitHub est poussée depuis le serveur.

## Étape 1 — Créer un compte Cloudflare (gratuit)

1. https://dash.cloudflare.com/sign-up
2. Créer le compte

## Étape 2 — Créer le namespace KV

1. Menu gauche → **Workers & Pages**
2. Onglet **KV** → **Create a namespace**
3. Nom : `carcanhoes_state`
4. Valider (note l'ID du namespace qui apparaît)

## Étape 3 — Créer le Worker

1. **Workers & Pages** → **Create** → **Hello World** → **Get started**
2. Nom : `carcanhoes-sync`
3. Clique **Deploy** puis **Edit code**
4. Supprime tout le contenu de l'éditeur
5. Ouvre `worker.js` de ce projet, copie tout, colle dans l'éditeur Cloudflare
6. Clique **Deploy** (en haut à droite)

Note l'URL du Worker, par ex. :
```
https://carcanhoes-sync.TON-SOUS-DOMAINE.workers.dev
```

## Étape 4 — Binder le KV au Worker

1. Sur la page du Worker → onglet **Settings** → **Bindings**
2. Clique **Add** → **KV namespace**
3. Configurer :
   - **Variable name** : `STATE` *(important — c'est ce nom que le code attend)*
   - **KV namespace** : sélectionne `carcanhoes_state`
4. **Save**

## Étape 5 — Configurer les variables d'environnement

Toujours dans **Settings** → **Variables and Secrets** → **Add** pour chacune :

| Nom              | Type   | Valeur                                              |
|------------------|--------|-----------------------------------------------------|
| `GITHUB_OWNER`   | Text   | `DeVerino-DVR`                                      |
| `GITHUB_REPO`    | Text   | `armurerie-fisk`                                    |
| `GITHUB_BRANCH`  | Text   | `main`                                              |
| `GITHUB_TOKEN`   | Secret | `ghp_...` (nouveau PAT, scope `repo`)               |
| `TEAM_PASSWORD`  | Secret | mot de passe équipe (ex: `Carcan-Hoes-2026!`)       |

### Pour `GITHUB_TOKEN`
- **Révoquer l'ancien d'abord** : https://github.com/settings/tokens
- **Generate new token (classic)** → scope `repo` uniquement
- Copier `ghp_...` → coller dans Cloudflare comme **Secret**

### Pour `TEAM_PASSWORD`
- Choisir un mot de passe robuste, c'est ce que tes employés vont entrer dans l'app

Ne pas oublier de cliquer **Deploy** après avoir ajouté toutes les variables.

## Étape 6 — Tester

Dans un navigateur, visite `https://carcanhoes-sync.XXX.workers.dev`. Tu dois voir :

```json
{
  "ok": true,
  "service": "carcanhoes-sync",
  "owner": "DeVerino-DVR",
  "repo": "armurerie-fisk",
  "stats": { "ventes": 0, "customs": 0, ... }
}
```

Si oui, le Worker est en ligne et KV fonctionne.

## Étape 7 — Configurer l'app

Ouvre `armurerie.html` → onglet **Paramètres** → section **Sauvegarde GitHub** :

| Champ              | Valeur                                                   |
|--------------------|----------------------------------------------------------|
| URL du Worker      | `https://carcanhoes-sync.XXX.workers.dev` (ton URL)      |
| Mot de passe équipe| le mot de passe que tu as mis dans le Worker             |
| Ton nom            | `Dikson`, `Nastos`… (apparaît dans les commits)          |

Clique **Enregistrer la config** → l'indicateur de sync passe en vert ("Synchronisé") en haut à droite.

## Étape 8 — Distribuer l'app à l'équipe

Héberger le site sur GitHub Pages (voir README). Donner à chaque employé :
- L'URL du site
- **Uniquement** l'URL du Worker et le mot de passe équipe

Chacun configure dans son navigateur une fois, puis les modifs de tous les utilisateurs se synchronisent en temps réel (rafraîchissement auto toutes les 45s + bouton "Actualiser" en haut).

## Archive hebdomadaire

Une fois par semaine : onglet **Paramètres** → **Sauvegarder la semaine sur GitHub**. Le Worker :
1. Lit l'état actuel depuis KV
2. Crée `saves/semaine-YYYY-MM-DD/` dans le repo avec 6 fichiers JSON + un bilan Markdown

Les données restent dans KV (pas réinitialisées). Si tu veux "repartir à zéro" après l'archive, clique ensuite sur **Tout réinitialiser** dans la zone rouge.

## Sécurité / rotation

- Le token GitHub est stocké **uniquement** dans Cloudflare (environ `env.GITHUB_TOKEN`), jamais exposé au navigateur
- Le mot de passe équipe peut être changé à tout moment dans Cloudflare → demander à l'équipe de reconfigurer
- Quotas gratuits Cloudflare Workers : 100 000 requêtes/jour · KV : 100k lectures, 1k écritures/jour (large pour cet usage)

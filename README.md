# Carcan'hoes — L'armurerie des Fisk

Application de gestion commerciale **multi-utilisateurs** pour l'armurerie. Tout le monde voit le même état (ventes, customs, armes d'occas, employés, impôts) et toute modification est synchronisée en temps réel.

## Architecture

```
┌─────────────┐     ┌─────────────────────┐     ┌──────────────┐
│  Navigateur │◄───►│  Cloudflare Worker  │◄───►│    GitHub    │
│   (HTML/JS) │     │     + KV Storage    │     │   (archive)  │
└─────────────┘     └─────────────────────┘     └──────────────┘
     (front)        (backend + état partagé)     (snapshots hebdo)
```

- **Front** (`armurerie.html`, `style.css`, `app.js`) : interface utilisateur, hébergée sur GitHub Pages.
- **Backend** (`worker.js`) : Cloudflare Worker, détient le token GitHub, gère l'état partagé via KV, pousse les archives vers GitHub.
- **Archive** : chaque semaine, `saves/semaine-YYYY-MM-DD/` est créé dans ce repo avec les historiques en JSON + un bilan Markdown.

## Fichiers

```
.
├── armurerie.html           # interface
├── style.css                # styles (shadcn dark)
├── app.js                   # logique front + sync Worker
├── worker.js                # Cloudflare Worker (backend)
├── CLOUDFLARE_SETUP.md      # guide de déploiement Worker + KV
├── saves/                   # archives hebdomadaires (créées par le Worker)
│   └── semaine-YYYY-MM-DD/
│       ├── ventes.json
│       ├── customs.json
│       ├── occas.json
│       ├── employes.json
│       ├── impots.json
│       └── bilan.md
└── README.md
```

## Installation

### 1. Backend (une seule fois)

Suivre **[CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md)** : créer le compte Cloudflare, déployer le Worker, binder le KV, configurer les variables (token GitHub, mot de passe équipe).

### 2. Front

Deux options au choix :

**A. Local** : double-clic sur `armurerie.html`
**B. GitHub Pages** :
- Repo → Settings → Pages
- Source : `Deploy from a branch` · Branch : `main` · Folder : `/ (root)`
- L'app est accessible sur `https://DeVerino-DVR.github.io/armurerie-fisk/armurerie.html`

### 3. Config utilisateur (chaque employé une fois)

Ouvrir l'app → onglet **Paramètres** → section **Sauvegarde GitHub** :
- URL du Worker : `https://carcanhoes-sync.xxx.workers.dev`
- Mot de passe équipe : (celui choisi dans Cloudflare)
- Ton nom : pour que les commits soient attribués

L'indicateur en haut à droite passe en vert quand la sync est active.

## Utilisation quotidienne

- Ajouter ventes / customs / armes d'occas → sync auto chez tous
- Actualiser manuellement avec le bouton **Actualiser** (ou attendre 45s)
- Une fois par semaine : **Paramètres → Sauvegarder la semaine sur GitHub**

## Sécurité

- Le token GitHub est **uniquement** côté Cloudflare (jamais dans le navigateur)
- Le mot de passe équipe est stocké localement par chaque utilisateur (localStorage)
- Pour révoquer un utilisateur : changer le `TEAM_PASSWORD` dans Cloudflare et communiquer le nouveau aux autres

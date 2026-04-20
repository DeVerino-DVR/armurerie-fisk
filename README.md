# Carcan'hoes — L'armurerie des Fisk

Application de gestion commerciale pour l'armurerie : ventes, customs, armes d'occasion, fiche impôts hebdomadaire.

## Structure

```
.
├── armurerie.html       # interface
├── style.css            # styles (shadcn dark)
├── app.js               # logique (stockage local + sync GitHub)
├── saves/               # archives hebdomadaires créées par l'app
│   └── semaine-YYYY-MM-DD/
│       ├── ventes.json
│       ├── customs.json
│       ├── occas.json
│       ├── employes.json
│       ├── impots.json
│       └── bilan.md
└── README.md
```

## Utilisation

1. Ouvrir `armurerie.html` dans un navigateur (double-clic).
2. Les données sont sauvegardées automatiquement dans le `localStorage` du navigateur.
3. Une fois par semaine, aller dans **Paramètres → Sauvegarde GitHub** et cliquer sur **Sauvegarder la semaine sur GitHub** pour archiver.

## Configuration GitHub

Dans l'onglet **Paramètres**, renseigner :

- **Username GitHub** : ton pseudo GitHub
- **Nom du repo** : `armurerie-fisk` (ou celui que tu choisis)
- **Branche** : `main`
- **Personal Access Token** : token avec scope `repo` (voir section ci-dessous)

### Créer un Personal Access Token

1. Aller sur https://github.com/settings/tokens
2. Cliquer **Generate new token (classic)**
3. Nom : `armurerie-fisk-sync`
4. Expiration : **No expiration** (ou longue durée)
5. Cocher le scope **`repo`** (accès complet aux repos privés)
6. Générer, copier le token (commence par `ghp_…`)
7. Le coller dans la config de l'app

### Notes

- Le token est stocké dans le `localStorage` du navigateur (uniquement en local).
- Le reset de l'app n'efface pas la config GitHub.
- L'app ne fait que des `PUT` sur l'API GitHub Contents — pas besoin d'installer git localement.

## Hébergement (GitHub Pages)

Dans les settings du repo : **Pages → Source → Deploy from branch → main / root**. L'app sera accessible sur `https://DeVerino-DVR.github.io/armurerie-fisk/armurerie.html`.

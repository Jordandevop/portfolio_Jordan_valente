# Portfolio — Jordan Valente

Portfolio personnel de Jordan Valente, Développeur Full Stack en alternance chez Reconomia.

Site en une page, bilingue FR/EN, construit autour d'une ligne de trajet qui relie chaque section comme des arrêts, un clin d'oeil à mes dix ans passés comme conducteur receveur avant ma reconversion dans le développement.

## Stack technique

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) — styles
- [Lucide React](https://lucide.dev/) — icônes

Aucun backend, aucune base de données : c'est un site statique.

## Installation

Prérequis : [Node.js](https://nodejs.org/) 18 ou plus récent.

```bash
# cloner le repo
git clone https://github.com/Jordandevop/portfolio-jordan-valente.git
cd portfolio-jordan-valente

# installer les dépendances
npm install

# lancer le serveur de dev (http://localhost:5173)
npm run dev
```

## Scripts disponibles

| Commande          | Description                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement local       |
| `npm run build`   | Génère la version de production dans `dist/`  |
| `npm run preview` | Prévisualise la build de production en local  |

## Structure du projet

```
portfolio-jordan-valente/
├── index.html            # point d'entrée HTML, polices Google Fonts
├── src/
│   ├── main.jsx           # point d'entrée React
│   ├── App.jsx             # mise en page, sections, logique (langue, modale projet)
│   ├── data.js             # tout le contenu : projets, compétences, textes FR/EN
│   └── index.css           # Tailwind + petites animations
├── tailwind.config.js       # palette et polices custom
└── vite.config.js
```

## Personnaliser le contenu

Toutes les infos affichées (projets, compétences, textes, coordonnées) sont centralisées dans **`src/data.js`**. Pas besoin de toucher au reste du code pour :

- ajouter, modifier ou retirer un projet (objet dans le tableau `projects`, avec `repo`/`demo` à `null` si non applicable)
- changer la liste de compétences (`skills`)
- modifier les textes FR/EN (`T.fr` / `T.en`)
- mettre à jour l'email, LinkedIn ou GitHub (`contact`)

Les couleurs et polices sont définies dans `tailwind.config.js` (clés `line`, `amber`, `ink`, `muted`, `border`, `bg` et `fontFamily.display/body/mono`).

## Déployer sur Vercel




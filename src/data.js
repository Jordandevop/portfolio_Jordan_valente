export const projects = [
  {
    id: "pokedex",
    name: "like-pokedex",
    tech: ["React", "JavaScript", "REST API"],
    repo: "https://github.com/Jordandevop/like-pokedex",
    demo: "https://like-pokedex.vercel.app/",
    image: "/projects/pokedex.jpg",
    fr: {
      tag: "Pokédex",
      desc: "Un Pokédex en React qui reproduit l'expérience de recherche et de consultation des Pokémon du jeu original : liste, fiches détaillées, types et statistiques.",
    },
    en: {
      tag: "Pokédex",
      desc: "A React-built Pokédex recreating the original game's browsing experience: list view, detail pages, types and stats.",
    },
  },
  {
    id: "wanderlog",
    name: "wanderlog",
    tech: ["React Native", "Expo"],
    repo: "https://github.com/Jordandevop/wanderlog",
    demo: "https://wanderlog-iota.vercel.app/",
    image: "/projects/wanderlog.jpg",
    fr: {
      tag: "Réseau social mobile",
      desc: "Une application mobile React Native inspirée d'Instagram : fil d'actualité, publications et interactions entre utilisateurs.",
    },
    en: {
      tag: "Mobile social app",
      desc: "A React Native mobile app inspired by Instagram: feed, posts and interactions between users.",
    },
  },
  {
    id: "lol",
    name: "League-of-legend",
    tech: ["React", "JavaScript"],
    repo: "https://github.com/Jordandevop/League-of-legend",
    demo: "https://league-of-legend-iota.vercel.app/",
    image: "/projects/lol.jpg",
    fr: {
      tag: "Site vitrine gaming",
      desc: "Un site autour de l'univers League of Legends : présentation des personnages, du lore et des mécaniques du jeu.",
    },
    en: {
      tag: "Gaming showcase",
      desc: "A site exploring the League of Legends universe: champions, lore and game mechanics.",
    },
  },
  {
    id: "moviedb",
    name: "movie-db",
    tech: ["React", "REST API"],
    repo: "https://github.com/Jordandevop/movie-db",
    demo: "https://movie-db-demo-xi.vercel.app/",
    image: "/projects/moviedb.jpg",
    fr: {
      tag: "Base de données films",
      desc: "Une base de données de films : recherche, fiches détaillées et exploration du catalogue cinéma.",
    },
    en: {
      tag: "Movie database",
      desc: "A movie database app: search, detailed film pages and catalog exploration.",
    },
  },
  {
    id: "communityhub",
    name: "community_hub",
    tech: ["React"],
    repo: null,
    demo: "https://community-hub-rho-hazel.vercel.app/",
    image: "/projects/communityhub.jpg",
    fr: {
      tag: "Plateforme communautaire",
      desc: "Une plateforme communautaire déployée en ligne, pensée comme un espace d'échange entre utilisateurs.",
    },
    en: {
      tag: "Community platform",
      desc: "A live community platform, built as a space for users to connect and exchange.",
    },
  },
];

export const skills = {
  frontend: ["React", "React Native", "TypeScript", "JavaScript", "Redux Toolkit", "HTML", "CSS"],
  backend: ["Node.js", "Express", "Python", "FastAPI", "PHP", "Symfony", "Odoo"],
  data: ["SQL", "PostgreSQL", "MongoDB", "DBeaver"],
  design: ["Figma"],
  tools: ["Docker", "Git & CI/CD"],
};

export const timeline = {
  fr: [
    { t: "Conducteur Receveur", s: "10 ans - Keolis Nord / TADAO" },
    { t: "Reconversion", s: "Bachelor Développeur Full Stack (RNCP 38606)" },
    { t: "Développeur Full Stack", s: "En alternance chez Reconomia" },
  ],
  en: [
    { t: "Bus Driver", s: "10 years - Keolis Nord / TADAO" },
    { t: "Career switch", s: "Full Stack Developer Bachelor's (RNCP 38606)" },
    { t: "Full Stack Developer", s: "Apprenticeship - Reconomia" },
  ],
};

export const contact = {
  email: "jordan.valente@hotmail.fr",
  linkedin: "https://www.linkedin.com/in/jordan-valente-7a8486325",
  github: "https://github.com/Jordandevop",
};

export const routeNumber = "59";

export const T = {
  fr: {
    nav: ["À propos", "Compétences", "Projets", "Contact"],
    eyebrowHero: "DÉVELOPPEUR FULL STACK · MÉTROPOLE LILLOISE",
    tagline: "De la ligne de bus à la ligne de code.",
    heroDesc:
      "En alternance chez Reconomia. Je construis des parcours numériques qui tiennent la route, du premier commit à la mise en production.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCV: "Télécharger mon CV",
    stop1: "ARRÊT 01",
    aboutTitle: "À propos",
    aboutBody:
      "Avant de coder, j'ai conduit pendant plus de dix ans les lignes de deux réseaux de transport différents, à Lille et à Lens. J'y ai appris à tenir un itinéraire, à gérer l'imprévu en temps réel et à livrer, jour après jour. Aujourd'hui je code avec la même exigence, depuis la Métropole Lilloise : construire, ligne par ligne, des produits qui tiennent la route.",
    stop2: "ARRÊT 02",
    skillsTitle: "Compétences",
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Données",
      design: "Design",
      tools: "Outils & DevOps",
    },
    stop3: "ARRÊT 03",
    projectsTitle: "Projets",
    projectsSub: "Quelques arrêts choisis sur la ligne.",
    code: "Code",
    demo: "Démo",
    terminus: "TERMINUS",
    contactTitle: "On en parle ?",
    contactBody: "Ouvert aux échanges autour de nouvelles opportunités en développement full stack.",
    close: "Fermer",
    footer: "Fait avec React, pensé comme une ligne de bus.",
    learnMore: "En savoir plus",
    marquee: "PROCHAIN ARRÊT - DÉVELOPPEUR FULL STACK ★ MÉTROPOLE LILLOISE ★ DISPONIBLE POUR NOUVELLES OPPORTUNITÉS ★ ",
    ticketPrefix: "N°",
    toggleLangLabel: "Changer de langue",
    menuOpenLabel: "Ouvrir le menu",
    menuCloseLabel: "Fermer le menu",
    rightsReserved: "Tous droits réservés.",
  },
  en: {
    nav: ["About", "Skills", "Projects", "Contact"],
    eyebrowHero: "FULL STACK DEVELOPER · LILLE METROPOLE, FRANCE",
    tagline: "From bus routes to code routes.",
    heroDesc:
      "Apprentice developer at Reconomia. I build digital journeys that hold the road, from first commit to production.",
    ctaProjects: "See my projects",
    ctaContact: "Get in touch",
    ctaCV: "Download my CV",
    stop1: "STOP 01",
    aboutTitle: "About",
    aboutBody:
      "Before I wrote code, I spent over ten years driving bus routes for two different transport networks, in Lille and Lens. I learned to hold a schedule, handle the unexpected in real time, and deliver, day after day. I code with the same standard now, from the Lille metropolitan area: building, line by line, products that hold the road.",
    stop2: "STOP 02",
    skillsTitle: "Skills",
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      design: "Design",
      tools: "Tools & DevOps",
    },
    stop3: "STOP 03",
    projectsTitle: "Projects",
    projectsSub: "A few chosen stops along the line.",
    code: "Code",
    demo: "Live",
    terminus: "TERMINUS",
    contactTitle: "Let's talk",
    contactBody: "Open to conversations about new full stack development opportunities.",
    close: "Close",
    footer: "Built with React, mapped like a bus line.",
    learnMore: "Learn more",
    marquee: "NEXT STOP - FULL STACK DEVELOPER ★ LILLE METROPOLE ★ OPEN TO NEW OPPORTUNITIES ★ ",
    ticketPrefix: "No.",
    toggleLangLabel: "Toggle language",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
    rightsReserved: "All rights reserved.",
  },
};

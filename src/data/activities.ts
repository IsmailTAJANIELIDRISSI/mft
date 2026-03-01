export type ActivityContentBlock = {
  title?: string;
  text?: string;
  bullets?: string[];
};

export type Activity = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  images: string[];
  content: ActivityContentBlock[];
};

export const activities: Activity[] = [
  {
    id: 1,
    slug: "stations-service",
    title: "Stations-service & infrastructures de distribution",
    summary:
      "Réalisation, modernisation et extension de stations-service avec des solutions complètes, sûres et conformes.",
    heroImage: "/activities/stations-service/img-01.jpeg",
    images: [
      "/activities/stations-service/img-01.jpeg",
      "/activities/stations-service/img-02.jpeg",
      "/activities/stations-service/img-03.jpeg",
      "/activities/stations-service/img-04.jpeg",
      "/activities/stations-service/img-05.jpeg",
    ],
    content: [
      {
        text: "Nous intervenons dans la réalisation, la modernisation et l'extension des stations-service, en proposant des solutions complètes et adaptées aux besoins des exploitants.",
      },
      {
        title: "Nos activités couvrent",
        bullets: [
          "Conception et aménagement des stations-service",
          "Installation des équipements de distribution de carburant",
          "Intégration des systèmes de sécurité et de contrôle",
          "Mise en conformité des installations existantes",
          "Modernisation et rénovation des stations",
        ],
      },
      {
        text: "Notre expertise garantit des stations performantes, sûres et conformes aux normes en vigueur.",
      },
    ],
  },
  {
    id: 2,
    slug: "construction-metallique",
    title: "Construction métallique & charpente – supports de citernes",
    summary:
      "Conception et réalisation de structures métalliques robustes pour infrastructures carburant, industrielles et techniques.",
    heroImage: "/activities/construction-metallique/img-01.jpeg",
    images: [
      "/activities/construction-metallique/img-01.jpeg",
      "/activities/construction-metallique/img-02.jpeg",
      "/activities/construction-metallique/img-03.jpeg",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie réalise des travaux de construction métallique et de charpente destinés aux infrastructures carburant, industrielles et techniques, notamment pour l'installation et le support de citernes.",
      },
      {
        text: "Nos réalisations sont conçues pour garantir stabilité, sécurité et durabilité, tout en répondant aux contraintes mécaniques et environnementales des sites.",
      },
      {
        title: "Charpente métallique",
        bullets: [
          "Étude et réalisation de charpentes métalliques",
          "Structures porteuses pour équipements industriels",
          "Ossatures métalliques sur mesure",
        ],
      },
      {
        title: "Supports et structures pour citernes",
        bullets: [
          "Supports métalliques pour citernes aériennes",
          "Châssis et plateformes pour réservoirs",
          "Structures de maintien et de protection des citernes",
        ],
      },
      {
        title: "Travaux de montage et assemblage",
        bullets: [
          "Fabrication et montage sur site",
          "Assemblage boulonné ou soudé",
          "Ajustement selon les contraintes du terrain",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "installations-industrielles",
    title: "Installations industrielles & dépôts privés",
    summary:
      "Mise en place d'infrastructures carburant adaptées aux industriels, transporteurs et gestionnaires de flottes.",
    heroImage: "/activities/installations-industrielles/img-01.jpeg",
    images: [
      "/activities/installations-industrielles/img-01.jpeg",
      "/activities/installations-industrielles/img-02.jpeg",
      "/activities/installations-industrielles/img-03.jpeg",
      "/activities/installations-industrielles/img-04.jpeg",
      "/activities/installations-industrielles/img-05.jpeg",
      "/activities/installations-industrielles/img-06.jpeg",
    ],
    content: [
      {
        text: "Nous accompagnons les industriels, transporteurs et gestionnaires de flottes dans la mise en place d'infrastructures carburant adaptées à leurs activités.",
      },
      {
        title: "Domaines d'intervention",
        bullets: [
          "Dépôts carburant privés",
          "Installations pour flottes de véhicules",
          "Réseaux de transfert et de distribution interne",
          "Solutions sur mesure selon les contraintes du site",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "gestion-supervision-carburant",
    title: "Gestion & supervision des installations carburant",
    summary:
      "Supervision en temps réel, traçabilité des opérations, alarmes et centralisation multi-sites pour une exploitation maîtrisée.",
    heroImage: "/activities/gestion-supervision-carburant/img-01.jpeg",
    images: ["/activities/gestion-supervision-carburant/img-01.jpeg"],
    content: [
      {
        text: "Maghreb Fueling Technologie accompagne ses clients dans la gestion intelligente et la supervision technique des installations carburant afin d'assurer un contrôle précis, sécurisé et continu des opérations.",
      },
      {
        text: "Cette activité permet aux exploitants de suivre leurs installations en temps réel, d'optimiser la gestion des stocks et de renforcer la sécurité des infrastructures.",
      },
      {
        title: "Supervision des réservoirs et des stocks",
        bullets: [
          "Surveillance en temps réel des niveaux de carburant",
          "Suivi des volumes disponibles dans chaque citerne",
          "Détection des niveaux d'eau et des variations anormales",
          "Visualisation claire des données via consoles ou interfaces dédiées",
        ],
      },
      {
        title: "Gestion automatisée des données carburant",
        bullets: [
          "Enregistrement automatique des opérations de remplissage",
          "Suivi des consommations",
          "Génération de rapports détaillés (journaliers, mensuels, périodiques)",
          "Historisation des données pour analyse et audit",
        ],
      },
      {
        title: "Alarmes, sécurité & prévention des risques",
        bullets: [
          "Alarmes de niveau haut / bas",
          "Alertes en cas de variation anormale ou de suspicion de fuite",
          "Surveillance continue des paramètres critiques",
          "Réduction des risques environnementaux et opérationnels",
        ],
      },
      {
        title: "Centralisation & supervision multi-sites",
        bullets: [
          "Centralisation des données de plusieurs sites",
          "Supervision à distance",
          "Accès simplifié aux informations clés",
          "Meilleure coordination des opérations",
        ],
      },
      {
        title: "Intégration avec les équipements existants",
        bullets: [
          "Intégration aux installations existantes",
          "Compatibilité avec les systèmes de jaugeage et de mesure",
          "Communication avec les équipements de terrain",
          "Évolutivité selon les besoins futurs du client",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "aeronautique-installations",
    title: "Aéronautique – installations techniques",
    summary:
      "Installations techniques au sol pour zones aéroportuaires: air comprimé, aspiration industrielle et électricité.",
    heroImage: "/activities/aeronautique-installations/img-01.jpeg",
    images: [
      "/activities/aeronautique-installations/img-01.jpeg",
      "/activities/aeronautique-installations/img-02.jpeg",
      "/activities/aeronautique-installations/img-03.jpeg",
      "/activities/aeronautique-installations/img-04.jpeg",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie intervient dans le secteur aéronautique à travers la réalisation d'installations techniques au sol, destinées aux zones aéroportuaires et aux infrastructures de maintenance.",
      },
      {
        text: "Notre expertise porte spécifiquement sur les réseaux d'air comprimé, les systèmes d'aspiration et les installations électriques, réalisés dans le respect des exigences de sécurité et des normes applicables au milieu aéronautique.",
      },
      {
        title: "Installations d'air comprimé",
        bullets: [
          "Réseaux d'air pour ateliers et zones de maintenance",
          "Dimensionnement et installation des lignes d'air",
          "Intégration d'équipements de production et de distribution d'air",
        ],
      },
      {
        title: "Systèmes d'aspiration",
        bullets: [
          "Installations d'aspiration industrielle",
          "Réseaux d'extraction pour zones techniques",
          "Amélioration de la sécurité et de la qualité de l'air",
        ],
      },
      {
        title: "Installations électriques",
        bullets: [
          "Installations électriques industrielles et techniques",
          "Tableaux électriques et réseaux de distribution",
          "Mise en conformité et sécurisation des installations",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "activite-gaz",
    title: "Activité Gaz – installations techniques",
    summary:
      "Réseaux et équipements gaz sécurisés pour sites industriels, commerciaux et techniques, en conformité réglementaire.",
    heroImage: "/activities/activite-gaz/img-01.jpg",
    images: [
      "/activities/activite-gaz/img-01.jpg",
      "/activities/activite-gaz/img-02.jpeg",
      "/activities/activite-gaz/img-03.jpeg",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie intervient dans le domaine du gaz à travers la réalisation d'installations techniques sécurisées, destinées aux sites industriels, commerciaux et techniques.",
      },
      {
        text: "Notre activité gaz se concentre sur la mise en place des réseaux, des équipements de distribution et des installations de sécurité, dans le respect strict des normes en vigueur.",
      },
      {
        title: "Réseaux et installations gaz",
        bullets: [
          "Installation de réseaux de distribution gaz",
          "Tuyauterie et raccordements gaz",
          "Intégration des équipements de régulation",
        ],
      },
      {
        title: "Équipements et sécurité",
        bullets: [
          "Installation de détendeurs et systèmes de régulation",
          "Mise en place de dispositifs de sécurité",
          "Contrôle d'étanchéité et essais de mise en service",
        ],
      },
      {
        title: "Intégration technique",
        bullets: [
          "Coordination avec les installations électriques et mécaniques",
          "Adaptation aux contraintes du site",
          "Mise en conformité des installations existantes",
        ],
      },
      {
        title: "Sécurité & conformité",
        bullets: [
          "Conformité avec les normes de sécurité gaz applicables",
          "Respect des exigences techniques et réglementaires",
          "Application des règles de prévention des risques",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "solutions-paiement",
    title: "Solutions de paiement pour installations carburant",
    summary:
      "Solutions de paiement sécurisées et intégrées aux systèmes carburant, supervision et reporting.",
    heroImage: "/activities/solutions-paiement/img-01.jpg",
    images: [
      "/activities/solutions-paiement/img-01.jpg",
      "/activities/solutions-paiement/img-02.jpg",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie propose des solutions de paiement adaptées aux installations carburant, permettant de sécuriser les transactions, de faciliter l'exploitation et d'améliorer l'expérience des utilisateurs.",
      },
      {
        text: "Nos solutions sont conçues pour s'intégrer aux équipements de distribution et aux systèmes de gestion existants.",
      },
      {
        title: "Paiement en station-service",
        bullets: [
          "Systèmes de paiement intégrés aux distributeurs",
          "Solutions de paiement par carte carburant",
          "Interfaces de paiement sécurisées",
          "Gestion des autorisations et des transactions",
        ],
      },
      {
        title: "Intégration avec les systèmes de gestion",
        bullets: [
          "Connexion aux systèmes de gestion carburant",
          "Lien avec les outils de supervision et de reporting",
          "Centralisation pour une vision globale des opérations",
        ],
      },
      {
        title: "Sécurité & fiabilité",
        bullets: [
          "Protocoles de sécurité renforcés",
          "Gestion sécurisée des données",
          "Mécanismes de contrôle et d'authentification",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "car-wash-services",
    title: "Car Wash & Services",
    summary:
      "Solutions complètes de lavage automobile avec installation, mise en service, maintenance et intégration station-service.",
    heroImage: "/activities/car-wash-services/img-01.jpg",
    images: [
      "/activities/car-wash-services/img-01.jpg",
      "/activities/car-wash-services/img-02.webp",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie propose des solutions complètes de lavage automobile (Car Wash) ainsi que des services associés, destinées aux stations-service, sites commerciaux et installations privées.",
      },
      {
        text: "Nous accompagnons nos clients depuis l'étude jusqu'à l'installation et le suivi des équipements de lavage.",
      },
      {
        title: "Solutions de lavage automobile",
        bullets: [
          "Stations de lavage automatique",
          "Stations de lavage haute pression",
          "Systèmes de lavage en libre-service",
          "Équipements de lavage adaptés aux besoins du site",
        ],
      },
      {
        title: "Installation & mise en service",
        bullets: [
          "Installation complète des équipements Car Wash",
          "Raccordement électrique et hydraulique",
          "Tests de fonctionnement et réglages",
          "Mise en service et prise en main",
        ],
      },
      {
        title: "Services & accompagnement technique",
        bullets: [
          "Maintenance préventive et corrective",
          "Diagnostic et dépannage des équipements",
          "Fourniture de pièces et accessoires",
          "Optimisation du fonctionnement des installations",
        ],
      },
      {
        title: "Intégration avec les stations-service",
        bullets: [
          "Intégration aux infrastructures de station-service",
          "Association aux systèmes de gestion et de paiement",
          "Inclusion dans une offre globale de services",
        ],
      },
    ],
  },
];

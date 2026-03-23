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
  detailTitle?: string;
};

export const activities: Activity[] = [
  {
    id: 1,
    slug: "stations-service",
    title: "Stations-service & infrastructures de distribution",
    summary:
      "Nous intervenons dans la réalisation, la modernisation et l'extension des stations-service, en proposant des solutions complètes et adaptées aux besoins des exploitants.",
    heroImage: "/images/activite1/img.png",
    images: [
      "/images/activite1/img.png",
      "/images/activities/stations-service/img-02.jpeg",
      "/images/activities/stations-service/img-03.jpeg",
      "/images/activities/stations-service/img-04.jpeg",
      "/images/activities/stations-service/img-05.jpeg",
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
          "Installation des équipements électriques (armoires, câblage, raccordements, mise en service)",
          "Installation de la tuyauterie KPS et réseaux carburant",
          "Raccordement et intégration des systèmes RIDART",
          "Intégration des systèmes de gestion automatisés avec les solutions de paiement",
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
    title: "Construction métallique & charpente",
    summary:
      "Conception et réalisation de structures métalliques robustes pour infrastructures carburant, industrielles et techniques.",
    detailTitle: "Construction métallique : charpente et réservoir de stockage",
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
        title: "Charpente métallique",
        bullets: [
          "Étude et réalisation de charpentes métalliques",
          "Structures porteuses pour équipements industriels",
          "Ossatures métalliques sur mesure",
        ],
      },
      {
        title: "Citernes de stockage",
        bullets: [
          "Citernes aériennes",
          "Citernes enterrées",
          "Citernes simple paroi",
          "Citernes double paroi",
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
    slug: "depots-petroliers",
    title: "Dépôts Pétroliers",
    summary:
      "Maghreb Fueling Technologie propose des solutions complètes pour la conception, l'installation et la maintenance de dépôts pétroliers destinés au stockage et à la distribution des produits pétroliers.",
    heroImage: "/activities/depots-petroliers/img-01.jpeg",
    images: [
      "/activities/depots-petroliers/img-01.jpeg",
      "/activities/depots-petroliers/img-02.jpeg",
      "/activities/depots-petroliers/img-03.jpeg",
      "/activities/depots-petroliers/img-04.jpeg",
      "/activities/depots-petroliers/img-05.jpeg",
      "/activities/depots-petroliers/img-06.jpeg",
    ],
    content: [
      {
        text: "Maghreb Fueling Technologie propose des solutions complètes pour la conception, l'installation et la maintenance de dépôts pétroliers destinés au stockage et à la distribution des produits pétroliers.",
      },
      {
        text: "Nos équipes interviennent dans toutes les étapes du projet afin de garantir des installations sécurisées, conformes aux normes industrielles et parfaitement adaptées aux besoins du client.",
      },
      {
        title: "Nos services comprennent",
        bullets: [
          "Étude et conception de dépôts pétroliers",
          "Installation de cuves de stockage et équipements associés",
          "Réalisation des réseaux de tuyauterie et systèmes de pompage",
          "Mise en place des systèmes de sécurité et de contrôle",
          "Maintenance et assistance technique",
        ],
      },
      {
        title: "Liste d'équipements",
        bullets: [
          "Cuves de stockage carburant",
          "Bras de chargement",
          "Systèmes de pompage",
          "Systèmes de mesure et jaugeage",
          "Skids pétroliers",
          "Systèmes de sécurité (détection fuite, incendie)",
          "Automatisation et supervision",
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
];

import type { Language } from "./LanguageContext";

export const languages = [
  { code: "fr" as Language, name: "Français" },
  { code: "en" as Language, name: "English" },
  { code: "ar" as Language, name: "العربية" },
];

export const translations = {
  fr: {
    nav: {
      links: [
        { name: "Services", href: "#services" },
        { name: "Activités", href: "#activites" },
        { name: "Réalisations", href: "#realisations" },
        { name: "Produits", href: "#produits" },
        { name: "À Propos", href: "#about" },
        { name: "Références", href: "#references" },
        { name: "Contact", href: "#contact" },
      ],
      quote: "Demander un devis",
      language: "Langue",
    },
    hero: {
      badge: "Solutions Industrielles Pétrolières",
      title: ["VOTRE PARTENAIRE", "DE CONFIANCE EN", "ÉQUIPEMENTS"],
      suffix: "PÉTROLIERS.",
      description:
        "De l'étude technique à la mise en service, MFT vous accompagne à chaque étape de vos projets de stations-service et d'industrie pétrolière.",
      primary: "Découvrir nos services",
      secondary: "Nous contacter",
      stats: [
        { value: "15+", label: "Années d'expérience" },
        { value: "200+", label: "Installations réalisées" },
        { value: "3", label: "Marques certifiées" },
      ],
    },
    about: {
      label: "À PROPOS",
      titlePrefix: "Maghreb Fueling",
      titleHighlight: "Technologies",
      paragraphs: [
        "Maghreb Fueling Technologie est une entreprise spécialisée dans les solutions techniques et les services pour les installations carburant, les infrastructures industrielles et énergétiques.",
        "Grâce à une équipe d'experts techniques et à une expérience solide dans le domaine, nous proposons des solutions fiables, innovantes et adaptées aux besoins spécifiques de chaque site, en respectant les normes industrielles et environnementales.",
      ],
      features: [
        {
          title: "Expertise Technique",
          desc: "Équipes certifiées et expérimentées pour garantir la fiabilité de vos installations.",
        },
        {
          title: "Engagement Environnemental",
          desc: "Solutions conformes aux normes environnementales les plus strictes.",
        },
        {
          title: "Équipements Certifiés",
          desc: "Équipements de référence mondiale, fiables et performants.",
        },
      ],
      badge: "Solutions sur mesure",
      imageAlt: "MFT en action",
    },
    services: {
      label: "NOS SERVICES",
      titleBefore: "Solutions complètes pour",
      titleHighlight: "l'industrie pétrolière",
      description:
        "De l'installation à la maintenance, nous couvrons tous vos besoins techniques avec rigueur et précision industrielle.",
      more: "En savoir plus",
      items: [
        {
          category: "Installation",
          title: "Installation & Mise en service",
          desc: "Réalisation complète des projets, de la préparation à la mise en service finale.",
        },
        {
          category: "Ingénierie",
          title: "Études Techniques & Ingénierie",
          desc: "Études de faisabilité, dimensionnement, conformité et assistance réglementaire.",
        },
        {
          category: "Maintenance",
          title: "Maintenance & Dépannage",
          desc: "Maintenance préventive programmée et interventions de dépannage rapide.",
        },
        {
          category: "Rénovation",
          title: "Rénovation & Mise à niveau",
          desc: "Modernisation des installations pour répondre aux normes actuelles.",
        },
        {
          category: "Contrats",
          title: "Contrats de Maintenance",
          desc: "Suivi régulier, interventions prioritaires et maîtrise de vos coûts d'exploitation.",
        },
        {
          category: "Équipements",
          title: "Fourniture d'Équipements",
          desc: "Distributeurs, pompes, systèmes de jaugeage, et équipements de sécurité.",
        },
      ],
    },
    process: {
      label: "PROCESSUS",
      title: "Notre méthodologie",
      description: "De la conception à la maintenance, une approche éprouvée en 4 étapes.",
      steps: [
        {
          title: "Prise de contact",
          desc: "Définition des besoins initiaux et périmètre du projet.",
          detail:
            "Notre équipe d'experts analyse votre demande et identifie les solutions techniques les mieux adaptées à vos objectifs opérationnels.",
        },
        {
          title: "Étude technique",
          desc: "Analyse approfondie et dimensionnement précis.",
          detail:
            "Études de faisabilité, plans techniques détaillés et recommandations d'équipements pour une mise en œuvre optimale.",
        },
        {
          title: "Installation",
          desc: "Pose professionnelle et mise en service sur site.",
          detail:
            "Nos techniciens certifiés assurent une installation conforme aux normes internationales avec un contrôle qualité rigoureux.",
        },
        {
          title: "Suivi & Maintenance",
          desc: "Assistance continue et contrat de service dédié.",
          detail:
            "Programme de maintenance préventive, interventions rapides et suivi personnalisé pour garantir la pérennité de vos installations.",
        },
      ],
    },
    activities: {
      label: "NOS ACTIVITÉS",
      title: "Nos domaines d'expertise",
      description:
        "Découvrez nos 8 pôles d'activité, nos réalisations et notre savoir-faire terrain.",
      details: "Voir les détails",
      useArrows: "Utilisez les flèches pour naviguer",
      photos: "photos",
      activity: "Activité",
      gallery: "Galerie",
    },
    realisations: {
      headingBefore: "Des projets concrets, des",
      headingHighlight: "résultats prouvés",
      seeImages: "Voir les images",
      imageUnavailable:
        "Image non disponible. Placez vos images dans le dossier indiqué avec les noms img-01.jpeg, img-02.jpeg, etc.",
      tabs: {
        b2b: {
          label: "B2B",
          sublabel: "Industriels",
          title:
            "Réalisations B2B – Sites industriels, flottes & installations spécialisées",
          intro:
            "Nous accompagnons les entreprises et industriels dans la réalisation de :",
          bullets: [
            "Mise en place des installations des équipement pour le carburant",
            "Solutions de distribution sécurisée et contrôlée",
            "Systèmes de gestion, supervision et paiement dédiés",
            "Réseaux gaz et installations techniques industrielles",
            "Travaux de construction métallique",
          ],
          conclusion:
            "Ces projets sont conçus pour garantir fiabilité, contrôle et continuité d'exploitation.",
        },
        b2c: {
          label: "B2C",
          sublabel: "Stations",
          title: "Réalisations B2C – Stations-service & services au public",
          intro:
            "Nous réalisons des projets destinés aux stations-service ouvertes au public, en assurant :",
          bullets: [
            "Installation complète de stations-service",
            "Mise en place des équipements de distribution carburant",
            "Intégration des systèmes de gestion, supervision et paiement",
            "Installation de solutions Car Wash & services associés",
            "Rénovation et modernisation de stations existantes",
          ],
          conclusion:
            "Nos solutions permettent d'améliorer la performance, la sécurité et l'expérience client.",
        },
        depots: {
          label: "Dépôts",
          sublabel: "pétrolier",
          title: "Réalisations Dépôts carburant & infrastructures de stockage",
          intro:
            "Nous réalisons des projets pour les dépôts carburant et infrastructures de stockage, comprenant :",
          bullets: [
            "Installation de citernes aériennes et enterrées",
            "Réseaux de tuyauterie et raccordements",
            "Pompes, systèmes de mesure et de jaugeage",
            "Supervision des stocks et sécurité des installations",
            "Structures métalliques et charpentes associées",
          ],
          conclusion:
            "Nos réalisations respectent les normes de sécurité et environnementales les plus exigeantes.",
        },
      },
    },
    produits: {
      label: "PRODUITS",
      titleBefore: "Nos équipements et",
      titleHighlight: "solutions techniques",
      voirDetails: "Voir les détails",
      fermer: "Fermer",
      downloadDossier: "Télécharger le dossier technique",
    },
    equipment: {
      label: "ÉQUIPEMENTS",
      titleBefore: "Équipements certifiés, fiables et",
      titleHighlight: "performants",
      items: [
        {
          name: "Distributeurs de carburant",
          desc: "Équipements de distribution haute performance certifiés.",
        },
        {
          name: "Pompes & tuyauteries",
          desc: "Systèmes de transfert et de raccordement conformes.",
        },
        {
          name: "Systèmes de jaugeage",
          desc: "Mesure et supervision des niveaux en temps réel.",
        },
        {
          name: "Équipements de sécurité",
          desc: "Dispositifs de sécurité et prévention des risques.",
        },
      ],
    },
    why: {
      label: "POURQUOI MFT",
      title: "Pourquoi nous choisir ?",
      description:
        "La confiance de nos clients repose sur notre expertise, nos équipements et notre réactivité.",
      more: "En savoir plus",
      reasons: [
        {
          title: "Expertise Locale",
          desc: "15+ ans d'expérience au Maroc avec une connaissance approfondie du terrain.",
          stat: "15+",
          statLabel: "ans",
        },
        {
          title: "Équipements Certifiés",
          desc: "Marques internationales de référence, testées et approuvées.",
          stat: "3",
          statLabel: "marques",
        },
        {
          title: "Atelier Mobile",
          desc: "Intervention rapide sur tout le territoire national.",
          stat: "24h",
          statLabel: "délai",
        },
      ],
    },
    references: {
      label: "RÉFÉRENCES",
      title: "Ils nous font confiance",
      description:
        "Une sélection de partenaires et de clients avec lesquels nous avons collaboré sur des projets industriels, pétroliers et techniques.",
    },
    contact: {
      label: "CONTACT",
      titleBefore: "Parlons de votre",
      titleHighlight: "prochain projet",
      description:
        "Nos experts sont à votre disposition pour analyser vos besoins et vous proposer les solutions techniques les plus adaptées.",
      infoTitles: ["Siège Social", "Téléphone", "Email", "Site Web"],
      formTitle: "Envoyez-nous un message",
      successTitle: "Demande envoyée !",
      successText:
        "Merci pour votre message. Notre équipe technique vous répondra dans les 24h.",
      newRequest: "Nouvelle demande",
      error:
        "Une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.",
      fields: {
        name: "Nom complet *",
        company: "Société",
        email: "Email *",
        phone: "Téléphone *",
        service: "Type de service",
        message: "Message *",
      },
      placeholders: {
        name: "Jean Dupont",
        company: "Nom de l'entreprise",
        email: "jean@email.com",
        phone: "+212 6 XX XX XX XX",
        message: "Comment pouvons-nous vous aider ?",
      },
      options: {
        empty: "Sélectionnez un service",
        installation: "Installation & Mise en service",
        maintenance: "Maintenance & Dépannage",
        etudes: "Études Techniques",
        formation: "Formation",
        equipement: "Achat de Produits / Équipement",
        autre: "Autre demande",
      },
      sending: "Envoi en cours…",
      submit: "Envoyer la demande",
    },
    footer: {
      brand:
        "Votre partenaire de confiance en équipements pétroliers. De l'étude technique à la mise en service, nous vous accompagnons à chaque étape.",
      quickLinksTitle: "Liens rapides",
      quickLinks: ["Services", "Activités", "Produits", "À Propos", "Contacter"],
      contactTitle: "Contact",
      legalTitle: "Mentions légales / ICE",
      rights: "© 2025 Maghreb Fueling Technologies S.A.R.L. Tous droits réservés.",
      designed: "Conçu pour l'industrie",
    },
  },
  en: {
    nav: {
      links: [
        { name: "Services", href: "#services" },
        { name: "Activities", href: "#activites" },
        { name: "Projects", href: "#realisations" },
        { name: "Products", href: "#produits" },
        { name: "About", href: "#about" },
        { name: "References", href: "#references" },
        { name: "Contact", href: "#contact" },
      ],
      quote: "Request a quote",
      language: "Language",
    },
    hero: {
      badge: "Industrial Petroleum Solutions",
      title: ["YOUR TRUSTED", "PARTNER IN", "PETROLEUM"],
      suffix: "EQUIPMENT.",
      description:
        "From technical studies to commissioning, MFT supports every step of your service station and petroleum industry projects.",
      primary: "Discover our services",
      secondary: "Contact us",
      stats: [
        { value: "15+", label: "Years of experience" },
        { value: "200+", label: "Completed installations" },
        { value: "3", label: "Certified brands" },
      ],
    },
    about: {
      label: "ABOUT",
      titlePrefix: "Maghreb Fueling",
      titleHighlight: "Technologies",
      paragraphs: [
        "Maghreb Fueling Technologie is a company specialized in technical solutions and services for fuel installations, industrial infrastructure, and energy systems.",
        "With a team of technical experts and solid field experience, we provide reliable, innovative solutions tailored to each site while respecting industrial and environmental standards.",
      ],
      features: [
        {
          title: "Technical Expertise",
          desc: "Certified and experienced teams ensuring the reliability of your installations.",
        },
        {
          title: "Environmental Commitment",
          desc: "Solutions compliant with the strictest environmental standards.",
        },
        {
          title: "Certified Equipment",
          desc: "World-class equipment that is reliable and high-performing.",
        },
      ],
      badge: "Tailor-made solutions",
      imageAlt: "MFT in action",
    },
    services: {
      label: "OUR SERVICES",
      titleBefore: "Complete solutions for",
      titleHighlight: "the petroleum industry",
      description:
        "From installation to maintenance, we cover all your technical needs with rigor and industrial precision.",
      more: "Learn more",
      items: [
        {
          category: "Installation",
          title: "Installation & Commissioning",
          desc: "Complete project execution from preparation to final commissioning.",
        },
        {
          category: "Engineering",
          title: "Technical Studies & Engineering",
          desc: "Feasibility studies, sizing, compliance, and regulatory support.",
        },
        {
          category: "Maintenance",
          title: "Maintenance & Troubleshooting",
          desc: "Scheduled preventive maintenance and fast troubleshooting interventions.",
        },
        {
          category: "Upgrade",
          title: "Renovation & Upgrading",
          desc: "Modernization of installations to meet current standards.",
        },
        {
          category: "Contracts",
          title: "Maintenance Contracts",
          desc: "Regular follow-up, priority interventions, and control of operating costs.",
        },
        {
          category: "Equipment",
          title: "Equipment Supply",
          desc: "Dispensers, pumps, gauging systems, and safety equipment.",
        },
      ],
    },
    process: {
      label: "PROCESS",
      title: "Our methodology",
      description: "From design to maintenance, a proven 4-step approach.",
      steps: [
        {
          title: "Initial Contact",
          desc: "Definition of initial needs and project scope.",
          detail:
            "Our experts analyze your request and identify the most suitable technical solutions for your operational goals.",
        },
        {
          title: "Technical Study",
          desc: "In-depth analysis and accurate sizing.",
          detail:
            "Feasibility studies, detailed technical plans, and equipment recommendations for optimal implementation.",
        },
        {
          title: "Installation",
          desc: "Professional on-site installation and commissioning.",
          detail:
            "Our certified technicians ensure compliant installation with rigorous quality control.",
        },
        {
          title: "Follow-up & Maintenance",
          desc: "Ongoing support and dedicated service contract.",
          detail:
            "Preventive maintenance programs, rapid interventions, and personalized follow-up to ensure long-term performance.",
        },
      ],
    },
    activities: {
      label: "OUR ACTIVITIES",
      title: "Our areas of expertise",
      description:
        "Discover our 8 business areas, our completed projects, and our field know-how.",
      details: "See details",
      useArrows: "Use the arrows to navigate",
      photos: "photos",
      activity: "Activity",
      gallery: "Gallery",
    },
    realisations: {
      headingBefore: "Concrete projects,",
      headingHighlight: "proven results",
      seeImages: "See images",
      imageUnavailable:
        "Image unavailable. Place your images in the indicated folder using names such as img-01.jpeg, img-02.jpeg, etc.",
      tabs: {
        b2b: {
          label: "B2B",
          sublabel: "Industrial",
          title: "B2B Projects - Industrial sites, fleets & specialized installations",
          intro: "We support companies and industrial clients in delivering:",
          bullets: [
            "Fuel equipment installation deployment",
            "Secure and controlled distribution solutions",
            "Dedicated management, supervision, and payment systems",
            "Gas networks and industrial technical installations",
            "Metal construction works",
          ],
          conclusion:
            "These projects are designed to guarantee reliability, control, and operational continuity.",
        },
        b2c: {
          label: "B2C",
          sublabel: "Stations",
          title: "B2C Projects - Service stations & public services",
          intro:
            "We deliver projects for public service stations, ensuring:",
          bullets: [
            "Complete service station installation",
            "Deployment of fuel distribution equipment",
            "Integration of management, supervision, and payment systems",
            "Installation of car wash solutions and related services",
            "Renovation and modernization of existing stations",
          ],
          conclusion:
            "Our solutions improve performance, safety, and customer experience.",
        },
        depots: {
          label: "Depots",
          sublabel: "Storage",
          title: "Fuel depot projects & storage infrastructure",
          intro:
            "We deliver projects for fuel depots and storage infrastructure including:",
          bullets: [
            "Installation of above-ground and underground tanks",
            "Piping networks and connections",
            "Pumps, measurement, and gauging systems",
            "Stock supervision and installation safety",
            "Related steel structures and frameworks",
          ],
          conclusion:
            "Our projects comply with the strictest safety and environmental standards.",
        },
      },
    },
    produits: {
      label: "PRODUCTS",
      titleBefore: "Our equipment and",
      titleHighlight: "technical solutions",
      voirDetails: "View details",
      fermer: "Close",
      downloadDossier: "Download technical brochure",
    },
    equipment: {
      label: "EQUIPMENT",
      titleBefore: "Certified, reliable, and",
      titleHighlight: "high-performance equipment",
      items: [
        {
          name: "Fuel Dispensers",
          desc: "Certified high-performance distribution equipment.",
        },
        {
          name: "Pumps & Piping",
          desc: "Compliant transfer and connection systems.",
        },
        {
          name: "Gauging Systems",
          desc: "Real-time measurement and level supervision.",
        },
        {
          name: "Safety Equipment",
          desc: "Safety devices and risk prevention solutions.",
        },
      ],
    },
    why: {
      label: "WHY MFT",
      title: "Why choose us?",
      description:
        "Our clients trust us for our expertise, equipment, and responsiveness.",
      more: "Learn more",
      reasons: [
        {
          title: "Local Expertise",
          desc: "15+ years of experience in Morocco with strong field knowledge.",
          stat: "15+",
          statLabel: "years",
        },
        {
          title: "Certified Equipment",
          desc: "Leading international brands, tested and approved.",
          stat: "3",
          statLabel: "brands",
        },
        {
          title: "Mobile Workshop",
          desc: "Fast intervention across the entire country.",
          stat: "24h",
          statLabel: "delay",
        },
      ],
    },
    references: {
      label: "REFERENCES",
      title: "They trust us",
      description:
        "A selection of partners and clients we have worked with on industrial, petroleum, and technical projects.",
    },
    contact: {
      label: "CONTACT",
      titleBefore: "Let's talk about your",
      titleHighlight: "next project",
      description:
        "Our experts are available to analyze your needs and propose the most suitable technical solutions.",
      infoTitles: ["Head Office", "Phone", "Email", "Website"],
      formTitle: "Send us a message",
      successTitle: "Request sent!",
      successText:
        "Thank you for your message. Our technical team will reply within 24 hours.",
      newRequest: "New request",
      error:
        "An error occurred. Please try again or contact us by phone.",
      fields: {
        name: "Full name *",
        company: "Company",
        email: "Email *",
        phone: "Phone *",
        service: "Service type",
        message: "Message *",
      },
      placeholders: {
        name: "John Smith",
        company: "Company name",
        email: "john@email.com",
        phone: "+212 6 XX XX XX XX",
        message: "How can we help you?",
      },
      options: {
        empty: "Select a service",
        installation: "Installation & Commissioning",
        maintenance: "Maintenance & Troubleshooting",
        etudes: "Technical Studies",
        formation: "Training",
        equipement: "Products / Equipment Purchase",
        autre: "Other request",
      },
      sending: "Sending...",
      submit: "Send request",
    },
    footer: {
      brand:
        "Your trusted partner in petroleum equipment. From technical studies to commissioning, we support you every step of the way.",
      quickLinksTitle: "Quick links",
      quickLinks: ["Services", "Activities", "Products", "About", "Contact"],
      contactTitle: "Contact",
      legalTitle: "Legal notice / ICE",
      rights: "© 2025 Maghreb Fueling Technologies S.A.R.L. All rights reserved.",
      designed: "Designed for industry",
    },
  },
  ar: {
    nav: {
      links: [
        { name: "الخدمات", href: "#services" },
        { name: "الأنشطة", href: "#activites" },
        { name: "الإنجازات", href: "#realisations" },
        { name: "المنتجات", href: "#produits" },
        { name: "من نحن", href: "#about" },
        { name: "المرجعيات", href: "#references" },
        { name: "اتصل بنا", href: "#contact" },
      ],
      quote: "اطلب عرض سعر",
      language: "اللغة",
    },
    hero: {
      badge: "حلول صناعية بترولية",
      title: ["شريككم الموثوق", "في", "معدات"],
      suffix: "البترول.",
      description:
        "من الدراسة التقنية إلى التشغيل الفعلي، ترافقكم MFT في كل مرحلة من مشاريع محطات الخدمة والصناعة البترولية.",
      primary: "اكتشف خدماتنا",
      secondary: "اتصل بنا",
      stats: [
        { value: "15+", label: "سنة من الخبرة" },
        { value: "200+", label: "عملية تركيب منجزة" },
        { value: "3", label: "علامات معتمدة" },
      ],
    },
    about: {
      label: "من نحن",
      titlePrefix: "Maghreb Fueling",
      titleHighlight: "Technologies",
      paragraphs: [
        "ماجريب فيولينغ تكنولوجي شركة متخصصة في الحلول التقنية والخدمات الخاصة بمنشآت الوقود والبنية التحتية الصناعية والطاقة.",
        "بفضل فريق من الخبراء التقنيين وتجربة ميدانية قوية، نقدم حلولاً موثوقة ومبتكرة ومصممة حسب احتياجات كل موقع مع احترام المعايير الصناعية والبيئية.",
      ],
      features: [
        {
          title: "خبرة تقنية",
          desc: "فرق معتمدة وذات خبرة لضمان موثوقية منشآتكم.",
        },
        {
          title: "التزام بيئي",
          desc: "حلول مطابقة لأعلى المعايير البيئية.",
        },
        {
          title: "معدات معتمدة",
          desc: "معدات عالمية موثوقة وعالية الأداء.",
        },
      ],
      badge: "حلول مصممة حسب الحاجة",
      imageAlt: "MFT في الميدان",
    },
    services: {
      label: "خدماتنا",
      titleBefore: "حلول متكاملة من أجل",
      titleHighlight: "قطاع البترول",
      description:
        "من التركيب إلى الصيانة، نغطي كل احتياجاتكم التقنية بدقة وصرامة صناعية.",
      more: "اعرف المزيد",
      items: [
        {
          category: "التركيب",
          title: "التركيب والتشغيل",
          desc: "إنجاز كامل للمشاريع من التحضير إلى التشغيل النهائي.",
        },
        {
          category: "الهندسة",
          title: "الدراسات التقنية والهندسة",
          desc: "دراسات جدوى، تحديد السعات، المطابقة والدعم التنظيمي.",
        },
        {
          category: "الصيانة",
          title: "الصيانة وإصلاح الأعطال",
          desc: "صيانة وقائية مبرمجة وتدخلات سريعة عند الحاجة.",
        },
        {
          category: "التحديث",
          title: "التجديد والتحديث",
          desc: "تحديث المنشآت لتلبية المعايير الحالية.",
        },
        {
          category: "العقود",
          title: "عقود الصيانة",
          desc: "متابعة منتظمة وتدخلات ذات أولوية وتحكم في تكاليف التشغيل.",
        },
        {
          category: "المعدات",
          title: "توريد المعدات",
          desc: "موزعات، مضخات، أنظمة قياس ومعدات السلامة.",
        },
      ],
    },
    process: {
      label: "المنهجية",
      title: "منهجيتنا",
      description: "من التصميم إلى الصيانة، منهجية مجربة في 4 مراحل.",
      steps: [
        {
          title: "التواصل الأولي",
          desc: "تحديد الاحتياجات الأولية ونطاق المشروع.",
          detail:
            "يقوم خبراؤنا بتحليل طلبكم وتحديد الحلول التقنية الأنسب لأهدافكم التشغيلية.",
        },
        {
          title: "الدراسة التقنية",
          desc: "تحليل معمق وتحديد دقيق للمواصفات.",
          detail:
            "دراسات جدوى ومخططات تقنية مفصلة وتوصيات بالمعدات لضمان تنفيذ أمثل.",
        },
        {
          title: "التركيب",
          desc: "تركيب احترافي وتشغيل فعلي في الموقع.",
          detail:
            "يضمن تقنيونا المعتمدون تركيباً مطابقاً للمعايير مع مراقبة جودة صارمة.",
        },
        {
          title: "المتابعة والصيانة",
          desc: "دعم مستمر وعقد خدمة مخصص.",
          detail:
            "برامج صيانة وقائية وتدخلات سريعة ومتابعة شخصية لضمان استدامة الأداء.",
        },
      ],
    },
    activities: {
      label: "أنشطتنا",
      title: "مجالات خبرتنا",
      description:
        "اكتشفوا مجالات نشاطنا الثمانية وإنجازاتنا وخبرتنا الميدانية.",
      details: "عرض التفاصيل",
      useArrows: "استخدم الأسهم للتنقل",
      photos: "صور",
      activity: "نشاط",
      gallery: "المعرض",
    },
    realisations: {
      headingBefore: "مشاريع ملموسة،",
      headingHighlight: "ونتائج مثبتة",
      seeImages: "عرض الصور",
      imageUnavailable:
        "الصورة غير متوفرة. ضع صورك في المجلد المحدد بالأسماء img-01.jpeg و img-02.jpeg وغيرها.",
      tabs: {
        b2b: {
          label: "B2B",
          sublabel: "صناعي",
          title: "إنجازات B2B - مواقع صناعية وأساطيل وتركيبات متخصصة",
          intro: "نواكب الشركات والقطاع الصناعي في إنجاز:",
          bullets: [
            "تركيب تجهيزات الوقود",
            "حلول توزيع آمنة ومراقبة",
            "أنظمة خاصة بالتسيير والمراقبة والدفع",
            "شبكات الغاز والتركيبات التقنية الصناعية",
            "أشغال البناء المعدني",
          ],
          conclusion:
            "تم تصميم هذه المشاريع لضمان الموثوقية والتحكم واستمرارية التشغيل.",
        },
        b2c: {
          label: "B2C",
          sublabel: "محطات",
          title: "إنجازات B2C - محطات الخدمة والخدمات الموجهة للعموم",
          intro: "ننجز مشاريع موجهة لمحطات الخدمة المفتوحة للعموم مع ضمان:",
          bullets: [
            "إنجاز كامل لمحطات الخدمة",
            "تركيب معدات توزيع الوقود",
            "دمج أنظمة التسيير والمراقبة والدفع",
            "تركيب حلول غسيل السيارات والخدمات المرتبطة بها",
            "تجديد وتحديث المحطات القائمة",
          ],
          conclusion:
            "تساعد حلولنا على تحسين الأداء والسلامة وتجربة الزبون.",
        },
        depots: {
          label: "المستودعات",
          sublabel: "التخزين",
          title: "إنجازات مستودعات الوقود والبنية التحتية للتخزين",
          intro: "ننجز مشاريع خاصة بمستودعات الوقود والبنية التحتية للتخزين تشمل:",
          bullets: [
            "تركيب الخزانات العلوية والمدفونة",
            "شبكات الأنابيب والتوصيلات",
            "المضخات وأنظمة القياس والمعايرة",
            "مراقبة المخزون وسلامة المنشآت",
            "المنشآت المعدنية والهياكل المرتبطة بها",
          ],
          conclusion:
            "إنجازاتنا تحترم أكثر معايير السلامة والبيئة صرامة.",
        },
      },
    },
    produits: {
      label: "المنتجات",
      titleBefore: "معداتنا وحلولنا",
      titleHighlight: "التقنية",
      voirDetails: "عرض التفاصيل",
      fermer: "إغلاق",
      downloadDossier: "تحميل الملف التقني",
    },
    equipment: {
      label: "المعدات",
      titleBefore: "معدات معتمدة وموثوقة وذات",
      titleHighlight: "أداء عالٍ",
      items: [
        {
          name: "موزعات الوقود",
          desc: "معدات توزيع معتمدة وعالية الأداء.",
        },
        {
          name: "المضخات والأنابيب",
          desc: "أنظمة نقل وربط مطابقة للمعايير.",
        },
        {
          name: "أنظمة القياس",
          desc: "قياس ومراقبة للمستويات في الوقت الحقيقي.",
        },
        {
          name: "معدات السلامة",
          desc: "أجهزة سلامة وحلول للوقاية من المخاطر.",
        },
      ],
    },
    why: {
      label: "لماذا MFT",
      title: "لماذا تختارنا؟",
      description:
        "ثقة عملائنا مبنية على خبرتنا ومعداتنا وسرعة استجابتنا.",
      more: "اعرف المزيد",
      reasons: [
        {
          title: "خبرة محلية",
          desc: "أكثر من 15 سنة من الخبرة في المغرب ومعرفة قوية بالميدان.",
          stat: "15+",
          statLabel: "سنة",
        },
        {
          title: "معدات معتمدة",
          desc: "علامات دولية مرجعية مجربة ومعتمدة.",
          stat: "3",
          statLabel: "علامات",
        },
        {
          title: "ورشة متنقلة",
          desc: "تدخل سريع في جميع أنحاء المملكة.",
          stat: "24h",
          statLabel: "أجل",
        },
      ],
    },
    references: {
      label: "المرجعيات",
      title: "شركاء يثقون بنا",
      description:
        "مجموعة من الشركاء والعملاء الذين اشتغلنا معهم في مشاريع صناعية وبترولية وتقنية.",
    },
    contact: {
      label: "اتصل بنا",
      titleBefore: "لنتحدث عن",
      titleHighlight: "مشروعكم القادم",
      description:
        "خبراؤنا رهن إشارتكم لتحليل احتياجاتكم واقتراح الحلول التقنية الأنسب.",
      infoTitles: ["المقر", "الهاتف", "البريد الإلكتروني", "الموقع الإلكتروني"],
      formTitle: "أرسل لنا رسالة",
      successTitle: "تم إرسال الطلب!",
      successText:
        "شكراً على رسالتكم. سيقوم فريقنا التقني بالرد عليكم خلال 24 ساعة.",
      newRequest: "طلب جديد",
      error: "حدث خطأ. يرجى إعادة المحاولة أو الاتصال بنا هاتفياً.",
      fields: {
        name: "الاسم الكامل *",
        company: "الشركة",
        email: "البريد الإلكتروني *",
        phone: "الهاتف *",
        service: "نوع الخدمة",
        message: "الرسالة *",
      },
      placeholders: {
        name: "أحمد مثال",
        company: "اسم الشركة",
        email: "name@email.com",
        phone: "+212 6 XX XX XX XX",
        message: "كيف يمكننا مساعدتكم؟",
      },
      options: {
        empty: "اختر خدمة",
        installation: "التركيب والتشغيل",
        maintenance: "الصيانة وإصلاح الأعطال",
        etudes: "الدراسات التقنية",
        formation: "التكوين",
        equipement: "شراء المعدات",
        autre: "طلب آخر",
      },
      sending: "جارٍ الإرسال...",
      submit: "إرسال الطلب",
    },
    footer: {
      brand:
        "شريككم الموثوق في معدات البترول. من الدراسة التقنية إلى التشغيل، نرافقكم في كل مرحلة.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: ["الخدمات", "الأنشطة", "المنتجات", "من نحن", "اتصل بنا"],
      contactTitle: "اتصل بنا",
      legalTitle: "المعلومات القانونية / ICE",
      rights: "© 2025 Maghreb Fueling Technologies S.A.R.L. جميع الحقوق محفوظة.",
      designed: "مصمم من أجل الصناعة",
    },
  },
} as const;

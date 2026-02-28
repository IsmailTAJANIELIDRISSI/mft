

## 🎯 PROJECT CONTEXT

Build a **stunning, innovative, production-grade landing page** for **Maghreb Fueling Technologies (MFT)** — a Moroccan B2B company specializing in fueling station equipment installation, maintenance, engineering studies, and technical training. Their website is `www.mft.ma`.

The design should feel like a **premium industrial tech company** — not a generic corporate site. Think: the precision of a European engineering firm, the energy of a modern SaaS landing page, and the authenticity of a Moroccan industrial leader. Direct competitor to beat: https://www.tsg-solutions.com/ma/

---

## 🛠 TECH STACK

- **React + Vite + TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (for smooth, professional animations)
- **Lucide React** (icons)
- **Google Fonts** (DM Sans for body, Syne or Outfit for headings — geometric, modern, technical feel)
- Single-page landing (all sections on one page, smooth scroll)

---

## 🎨 BRAND & DESIGN SYSTEM

### Color Palette (STRICT — match brand identity)
```
--mft-orange: #E87722       /* Primary — energy, CTA, highlights */
--mft-orange-light: #F4A543 /* Gradient lighter tone */
--mft-green: #7CB518        /* Secondary — safety, environment */
--mft-green-dark: #5A8A10   /* Deeper green accent */
--mft-grey: #7A7A7A         /* Neutral — technical, industrial */
--mft-grey-dark: #3A3A3A    /* Dark text / surfaces */
--mft-white: #FFFFFF
--mft-bg: #F8F8F6           /* Warm off-white background */
--mft-dark: #1A1A1A         /* Hero dark overlay / footer */
```

### Typography
- **Headings**: `Syne` or `Outfit` — bold, geometric, modern
- **Body**: `DM Sans` — clean, readable, technical
- **Accent/labels**: Uppercase letter-spacing, small size, orange or green color

### Logo & Brand Rules
- Logo: SVG/PNG of **MAGHREB FUELING TECHNOLOGIES** with the dual flame symbol (orange + green flame icons)
- On dark backgrounds: white logo version
- On light backgrounds: full color logo
- Never distort or recolor the logo

### Visual Language
- **Dot pattern** texture (as seen in brand guidelines) used subtly as background overlay
- **Diagonal / angled dividers** between sections (like the envelope design in the brand guide)
- **Orange + green gradient** flame-inspired decorative swoosh elements (as seen on the transit van wrap)
- Clean white cards with subtle grey shadows
- Industrial photography placeholder imagery (fuel stations, equipment, teams in orange vests, pipework)

---

## ✨ ANIMATIONS & INTERACTIONS

Inspired by Dribbble/CodePen premium landing pages and 21st.dev:

- **Hero**: Animated headline words appear one-by-one with a stagger effect (Framer Motion). Background has a subtle parallax gradient mesh in orange-to-dark.
- **Scroll-triggered reveals**: Each section fades + slides up when entering viewport (use `whileInView` with Framer Motion, `once: true`).
- **Service cards**: On hover, card lifts (translateY -6px), orange left-border appears, icon pulses subtly.
- **Counter stats**: Numbers count up from 0 when scrolled into view (e.g., "15+ years", "200+ installations", "50+ clients").
- **Navigation**: Sticky navbar that becomes frosted-glass (backdrop-blur) after scrolling 80px. Smooth scroll to sections on nav click.
- **CTA button**: Subtle shimmer/shine animation on hover.
- **Logo in hero**: Animated entrance (scale from 0.8 to 1 with opacity 0 to 1).
- **Process steps**: Animated connecting line draws between steps on scroll.
- **Mobile menu**: Smooth slide-down drawer animation.

---

## 📐 PAGE STRUCTURE & SECTIONS

### 1. NAVBAR (Sticky, glassmorphism on scroll)
```
[Logo MFT]  [Services] [Formations] [Équipements] [À Propos] [Contact]  [Demander un devis →]
```
- Logo left, links center, CTA button right (orange background)
- On mobile: hamburger → full-screen overlay menu
- Active section highlight with orange underline indicator

---

### 2. HERO SECTION (Full-screen, dark industrial atmosphere)

**Background**: Dark overlay (#1A1A1A with 85% opacity) over a high-quality image of a modern fuel station. Add the brand's orange-green gradient flame swoosh as a decorative right-side element.

**Content layout** (left-aligned, 60% width):
```
[Label badge: orange dot + "Solutions Industrielles Pétrolières"]

VOTRE PARTENAIRE
DE CONFIANCE EN
ÉQUIPEMENTS
PÉTROLIERS.

[Subtitle]: De l'étude technique à la mise en service, MFT vous accompagne à chaque étape de vos projets de stations-service et d'industrie pétrolière.

[CTA Primary: "Découvrir nos services →" orange button]
[CTA Secondary: "Nous contacter" ghost/outline button]
```

**Bottom stats bar** (dark card, 3 columns):
```
| 15+ Années d'expérience | 200+ Installations réalisées | 3 Marques certifiées |
```

---

### 3. ABOUT / WHO WE ARE (Light background)

**Layout**: Left side text, right side large image with orange border accent

```
[Section label: "À PROPOS" — small orange uppercase]

Maghreb Fueling Technologies

[2 paragraphs describing MFT as the leading technical partner for petrol stations in Morocco, based in Mohammedia, serving national industry with certified equipment from KPS-OPW, Elaflex-ZVA, Ebarbero.]

[3 icon-text highlights]:
• 🔧 Expertise Technique — Équipes certifiées et expérimentées
• 🌿 Engagement Environnemental — Solutions conformes aux normes
• 🤝 Partenariats Certifiés — KPS-OPW · Elaflex-ZVA · Ebarbero
```

---

### 4. SERVICES SECTION (White background)

**Section header**:
```
[label: "NOS SERVICES"]
Solutions complètes pour l'industrie pétrolière
[subtitle]: De l'installation à la maintenance, nous couvrons tous vos besoins techniques.
```

**6-card grid** (3 cols desktop, 2 tablet, 1 mobile):

Each card has:
- Icon (Lucide) in orange circle
- Bold title
- 2-line description
- "En savoir plus →" link in orange

**Cards**:
1. 🔩 **Installation & Mise en service** — Réalisation complète des projets, de la préparation à la mise en service finale.
2. 📐 **Études Techniques & Ingénierie** — Études de faisabilité, dimensionnement, conformité et assistance réglementaire.
3. 🛠 **Maintenance & Dépannage** — Maintenance préventive programmée et interventions de dépannage rapide.
4. 🔄 **Rénovation & Mise à niveau** — Modernisation des installations pour répondre aux normes actuelles.
5. 📋 **Contrats de Maintenance** — Suivi régulier, interventions prioritaires, maîtrise des coûts.
6. 📦 **Fourniture d'Équipements** — Distributeurs, pompes, systèmes de jaugeage, équipements de sécurité.

---

### 5. FORMATION SECTION (Dark background — differentiator highlight)

This is a KEY differentiator vs competitors — give it premium treatment.

**Background**: Dark (#1A1A1A) with subtle dot pattern overlay and orange/green gradient accent on left edge.

**Layout**: Left text block + right 2x2 grid of formation cards

```
[label: "FORMATION & ACCOMPAGNEMENT" in orange]

Formez vos équipes aux meilleures pratiques

[Description]: Des programmes de formation sur-mesure pour exploitants, techniciens et opérateurs, dispensés par des spécialistes expérimentés sur site ou en salle.
```

**Formation cards** (white text on dark, green left-border):
1. 🏪 Exploitation des stations-service
2. 🔧 Maintenance des équipements
3. 🦺 Sécurité & Conformité
4. 🏭 Stockage & Installations industrielles

**CTA**: "Demander un programme de formation →" — orange button

---

### 6. HOW IT WORKS / PROCESS (Light background)

**4-step horizontal process** with animated connecting line:

```
[1] 📞 Prise de contact    →    [2] 📊 Étude technique    →    [3] 🔧 Installation    →    [4] ✅ Suivi & Maintenance
     Définition des besoins          Dimensionnement               Mise en service              Contrat de maintenance
```

Orange numbered circles, grey connecting line that animates (draws) on scroll.

---

### 7. EQUIPMENT / MARQUES SECTION (White)

```
[label: "ÉQUIPEMENTS & PARTENAIRES"]
Équipements certifiés, marques de référence

[3 partner logos / brand badges]:
• KPS-OPW
• Elaflex-ZVA  
• Ebarbero

[Equipment categories as icon cards]:
• Distributeurs de carburant
• Pompes & tuyauteries
• Systèmes de jaugeage
• Équipements de sécurité
```

---

### 8. WHY CHOOSE MFT (Orange gradient background)

**3-column differentiators** (white icons + text on orange gradient):

```
🏆 Expertise Locale          🔐 Équipements Certifiés       🚐 Atelier Mobile
  15+ ans d'expérience         Marques internationales          Intervention rapide
  au Maroc                     de référence                     sur tout le territoire
```

---

### 9. CONTACT SECTION (Dark background, split layout)

**Left side**: Contact information
```
📍 257, Zone 1 Sud-Ouest, Mohammedia — Maroc
📞 +212 5 23 30 25 86 / +212 5 23 30 00 22
📠 +212 523 32 55 04
📧 mft@mft.ma
🌐 www.mft.ma
```

**Right side**: Contact form
```
[Nom complet]
[Société]
[Email]
[Téléphone]
[Type de service] (dropdown)
[Message]
[Envoyer la demande →] — orange button
```

---

### 10. FOOTER (Dark, #1A1A1A)

**4-column layout**:
1. **Logo + tagline** + social icons (Facebook, Instagram, LinkedIn)
2. **Services** quick links
3. **Contact**
4. **Mentions légales / ICE info**

Bottom bar:
```
© 2025 Maghreb Fueling Technologies S.A.R.L. — ICE : 000314920000083 — RC : 15189
```

Diagonal orange-green gradient accent bar at very top of footer.

---

## 📱 RESPONSIVE BREAKPOINTS

- **Mobile** (< 768px): Single column, full-width sections, hamburger nav
- **Tablet** (768–1024px): 2-column grids, adjusted spacing
- **Desktop** (> 1024px): Full layout as described above

---

## 🧩 COMPONENT STRUCTURE

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx          ← ServiceCard sub-component
│   ├── Formation.tsx
│   ├── Process.tsx
│   ├── Equipment.tsx
│   ├── WhyMFT.tsx
│   ├── Contact.tsx           ← ContactForm sub-component
│   └── Footer.tsx
├── hooks/
│   └── useScrollAnimation.ts ← Custom hook for scroll reveals
├── constants/
│   └── data.ts               ← All content/text data
└── App.tsx                   ← Assembles all sections
```

---

## ⚡ PERFORMANCE & QUALITY

- All animations use `will-change: transform` and GPU-accelerated properties (transform, opacity) only
- Images use lazy loading with `loading="lazy"`
- No layout shift — reserve image space with aspect-ratio
- Accessible: proper ARIA labels, semantic HTML (section, main, nav, article)
- SEO: proper heading hierarchy (h1 → h2 → h3), meta description placeholder
- Smooth scroll behavior: `scroll-behavior: smooth` on html element

---

## 🚫 WHAT TO AVOID

- No generic purple gradients or "AI aesthetic" clichés
- No Inter or Roboto fonts
- No boring flat card shadows — use layered, directional shadows
- No overcrowded sections — generous padding (py-20 to py-32)
- Don't make it look like TSG Solutions (avoid their clean-but-generic corporate style)
- No lorem ipsum — use the actual French content provided above

---

## 🎯 THE ONE THING TO REMEMBER

This site should feel like **a confident Moroccan industrial champion** — orange energy, green responsibility, grey precision. When a fuel station manager or industrial director lands on this page, they should immediately feel: *"These people are serious professionals I can trust with my infrastructure."*

The hero animation, the service card interactions, and the formation section dark treatment are the three signature moments that make this site unforgettable.

---

*Built for: Maghreb Fueling Technologies S.A.R.L — www.mft.ma — Mohammedia, Maroc*

---

modern minimalist landing page, soft gradients, floating ui cards, clean typography, premium design, featuristic, clean, responsive, mobile first, smooth, intuitive, professionel

---

Qui sommes-nous

Maghreb Fueling Technologie est une entreprise spécialisée dans
les solutions techniques et les services pour les installations
carburant, les infrastructures industrielles et énergétiques. Elle
accompagne ses clients tout au long de leurs projets — de l'étude
initiale à la mise en service, en passant par l'intégration, la
maintenance et la supervision.

Grâce à une équipe d'experts techniques et à une expérience solide dans
le domaine, nous proposons des solutions fiables, innovantes et adaptées
aux besoins spécifiques de chaque site. Notre approche repose sur la
qualité, la sécurité, la performance et la satisfaction client, tout
en respectant les normes industrielles et environnementales.

Nos domaines d'intervention couvrent une large gamme de prestations :

-   Installations de stations-service et équipements associés

-   Supervision et gestion des installations carburant

-   Solutions de paiement et systèmes de contrôle

-   Installation de réseaux gaz et solutions techniques aéronautiques

-   Construction métallique, charpentes et supports pour citernes

-   Solutions Car Wash & services

-   Maintenance et accompagnement technique

À travers notre expertise, nous nous engageons à fournir des solutions
durables et performantes qui répondent aux exigences de nos partenaires
et contribuent à la fiabilité des infrastructures énergétiques et
industrielles

---

Activité

1-Stations-service & infrastructures de distribution

Nous intervenons dans la réalisation, la modernisation et l'extension
des stations-service, en proposant des solutions complètes et adaptées
aux besoins des exploitants.

Nos activités couvrent :

-   Conception et aménagement des stations-service

-   Installation des équipements de distribution de carburant

-   Intégration des systèmes de sécurité et de contrôle

-   Mise en conformité des installations existantes

-   Modernisation et rénovation des stations

Notre expertise garantit des stations performantes, sûres et conformes
aux normes en vigueur.

2-Construction métallique & charpente – supports de citernes

Maghreb Fueling Technologie réalise des travaux de construction
métallique et de charpente, destinés aux infrastructures carburant,
industrielles et techniques, notamment pour l'installation et le
support de citernes.

Nos réalisations sont conçues pour garantir stabilité, sécurité et
durabilité, tout en répondant aux contraintes mécaniques et
environnementales des sites.

Nos domaines d'intervention

🏗️ Charpente métallique

-   Étude et réalisation de charpentes métalliques

-   Structures porteuses pour équipements industriels

-   Ossatures métalliques sur mesure

🛢️ Supports et structures pour citernes

-   Supports métalliques pour citernes aériennes

-   Châssis et plateformes pour réservoirs

-   Structures de maintien et de protection des citernes

🔩 Travaux de montage et assemblage

-   Fabrication et montage sur site

-   Assemblage boulonné ou soudé

-   Ajustement selon les contraintes du terrain

3-Installations industrielles & dépôts privés

Nous accompagnons les industriels, transporteurs et gestionnaires de
flottes dans la mise en place d'infrastructures carburant adaptées à
leurs activités.

Domaines d'intervention :

-   Dépôts carburant privés

-   Installations pour flottes de véhicules

-   Réseaux de transfert et de distribution interne

-   Solutions sur mesure selon les contraintes du site

4- Gestion & supervision des installations carburant

Maghreb Fueling Technologie accompagne ses clients dans la gestion
intelligente et la supervision technique des installations carburant,
afin d'assurer un contrôle précis, sécurisé et continu des opérations.

Cette activité permet aux exploitants de suivre leurs installations en
temps réel, d'optimiser la gestion des stocks et de renforcer la
sécurité des infrastructures.

🔹 Supervision des réservoirs et des stocks

Nous mettons en place des solutions permettant :

-   La surveillance en temps réel des niveaux de carburant

-   Le suivi des volumes disponibles dans chaque citerne

-   La détection des niveaux d'eau et des variations anormales

-   La visualisation claire des données via consoles ou interfaces
    dédiées

Ces systèmes facilitent l'anticipation des réapprovisionnements et
réduisent les risques de rupture ou de surcharge.

Gestion automatisée des données carburant

Nos solutions de gestion assurent :

-   L'enregistrement automatique des opérations de remplissage

-   Le suivi des consommations

-   La génération de rapports détaillés (journaliers, mensuels,
    périodiques)

-   L'historisation des données pour analyse et audit

Cela permet une traçabilité complète des opérations carburant.

Alarmes, sécurité & prévention des risques

Les systèmes de supervision intègrent des fonctions avancées de sécurité
:

-   Alarmes de niveau haut / bas

-   Alertes en cas de variation anormale ou de suspicion de fuite

-   Surveillance continue des paramètres critiques

-   Réduction des risques environnementaux et opérationnels

Ces dispositifs contribuent à une exploitation plus sûre et conforme aux
exigences réglementaires.

Centralisation & supervision multi-sites

Pour les exploitants disposant de plusieurs installations, nous
proposons :

-   La centralisation des données de plusieurs sites

-   Une supervision à distance

-   Un accès simplifié aux informations clés

-   Une meilleure coordination des opérations

Cette approche améliore la visibilité globale et la prise de décision.

Intégration avec les équipements existants

Nos solutions sont conçues pour :

-   S'intégrer aux installations existantes

-   Être compatibles avec les systèmes de jaugeage et de mesure

-   Communiquer avec les équipements de terrain

-   Évoluer selon les besoins futurs du client

5- Aéronautique – installations techniques

Maghreb Fueling Technologie intervient dans le secteur aéronautique
à travers la réalisation d'installations techniques au sol,
destinées aux zones aéroportuaires et aux infrastructures de
maintenance.

Notre expertise porte spécifiquement sur les réseaux d'air comprimé,
les systèmes d'aspiration et les installations électriques, réalisés
dans le respect des exigences de sécurité et des normes applicables au
milieu aéronautique.

🔹 Nos domaines d'intervention en aéronautique

💨 Installations d'air comprimé

-   Réseaux d'air pour ateliers et zones de maintenance

-   Dimensionnement et installation des lignes d'air

-   Intégration d'équipements de production et de distribution d'air

🌪️ Systèmes d'aspiration

-   Installations d'aspiration industrielle

-   Réseaux d'extraction pour zones techniques

-   Amélioration de la sécurité et de la qualité de l'air

⚡ Installations électriques

-   Installations électriques industrielles et techniques

-   Tableaux électriques et réseaux de distribution

-   Mise en conformité et sécurisation des installations

6- Activité Gaz – installations techniques

Maghreb Fueling Technologie intervient dans le domaine du gaz à
travers la réalisation d'installations techniques sécurisées,
destinées aux sites industriels, commerciaux et techniques.

Notre activité gaz se concentre sur la mise en place des réseaux, des
équipements de distribution et des installations de sécurité, dans le
respect strict des normes en vigueur.

Nos domaines d'intervention gaz

🔧 Réseaux et installations gaz

-   Installation de réseaux de distribution gaz

-   Tuyauterie et raccordements gaz

-   Intégration des équipements de régulation

⚙️ Équipements et sécurité

-   Installation de détendeurs et systèmes de régulation

-   Mise en place de dispositifs de sécurité

-   Contrôle d'étanchéité et essais de mise en service

⚡ Intégration technique

-   Coordination avec les installations électriques et mécaniques

-   Adaptation aux contraintes du site

-   Mise en conformité des installations existantes

🔹 Sécurité & conformité

Toutes nos interventions sont réalisées en conformité avec :

-   Les normes de sécurité gaz applicables

-   Les exigences techniques et réglementaires

-   Les règles de prévention des risques

Notre priorité est d'assurer des installations fiables, sûres et
durables.

7- Solutions de paiement pour installations carburant

Maghreb Fueling Technologie propose des solutions de paiement adaptées
aux installations carburant, permettant de sécuriser les transactions,
de faciliter l'exploitation et d'améliorer l'expérience des
utilisateurs.

Nos solutions sont conçues pour s'intégrer aux équipements de
distribution et aux systèmes de gestion existants.

Paiement en station-service

Nous accompagnons les exploitants dans la mise en place de :

-   Systèmes de paiement intégrés aux distributeurs

-   Solutions de paiement par carte carburant

-   Interfaces de paiement sécurisées

-   Gestion des autorisations et des transactions

Ces solutions permettent une exploitation fluide et sécurisée des
stations-service.

Intégration avec les systèmes de gestion

Les solutions de paiement peuvent être :

-   Connectées aux systèmes de gestion carburant

-   Liées aux systèmes de supervision et de reporting

-   Centralisées pour une vision globale des opérations

Cette intégration permet une traçabilité complète des transactions.

Sécurité & fiabilité

Nos solutions de paiement intègrent :

-   Des protocoles de sécurité renforcés

-   Une gestion sécurisée des données

-   Des mécanismes de contrôle et d'authentification

8- Car Wash & Services

Maghreb Fueling Technologie propose des solutions complètes de lavage
automobile (Car Wash) ainsi que des services associés, destinées
aux stations-service, sites commerciaux et installations privées.

Nous accompagnons nos clients depuis l'étude jusqu'à l'installation et
le suivi des équipements de lavage.

Solutions de lavage automobile

Nous intervenons sur différents types de systèmes de lavage :

-   Stations de lavage automatique

-   Stations de lavage haute pression

-   Systèmes de lavage en libre-service

-   Équipements de lavage adaptés aux besoins du site

Nos solutions sont conçues pour garantir performance, fiabilité et
durabilité, tout en assurant une utilisation simple pour les
exploitants et les usagers.

Installation & mise en service

Nos équipes assurent :

-   L'installation complète des équipements Car Wash

-   Le raccordement électrique et hydraulique

-   Les tests de fonctionnement et réglages

-   La mise en service et la prise en main

Chaque installation est réalisée dans le respect des normes de sécurité
et des contraintes du site.

Services & accompagnement technique

Nous proposons également :

-   Maintenance préventive et corrective

-   Diagnostic et dépannage des équipements

-   Fourniture de pièces et accessoires

-   Optimisation du fonctionnement des installations

Ces services garantissent la continuité d'exploitation et la longévité
des équipements.

Intégration avec les stations-service

Les solutions Car Wash peuvent être :

-   Intégrées aux infrastructures de station-service

-   Associées aux systèmes de gestion et de paiement

-   Incluses dans une offre globale de services

Cela permet d'augmenter l'attractivité du site et d'améliorer la
rentabilité.

---

Nos Service

Installation & mise en service

Nous assurons la réalisation complète des projets, depuis la phase de
préparation jusqu'à la mise en service finale.

Nos services comprennent :

-   Installation des équipements de distribution

-   Montage des cuves et systèmes de stockage

-   Raccordements mécaniques et électriques

-   Tests, réglages et mise en service

Études techniques & ingénierie

Nos équipes réalisent des études techniques détaillées afin de garantir
la réussite et la conformité de chaque projet.

Nous proposons :

-   Études de faisabilité

-   Dimensionnement des installations

-   Études de sécurité et de conformité

-   Assistance réglementaire

Maintenance & dépannage

Nous offrons des services de maintenance complets pour assurer la
continuité d'exploitation des installations.

Nos prestations incluent :

-   Maintenance préventive programmée

-   Interventions de dépannage rapide

-   Réparation et remplacement des composants

-   Rapports techniques détaillés

Rénovation & mise à niveau des installations

Nous modernisons les installations existantes afin de les adapter aux
nouvelles normes et exigences du marché.

Nos services couvrent :

-   Rénovation des stations-service

-   Remplacement des équipements obsolètes

-   Mise à niveau sécuritaire et technique

-   Amélioration des performances opérationnelles

Contrats de maintenance

Nous proposons des contrats de maintenance adaptés aux besoins
spécifiques de chaque client.

Avantages :

-   Suivi technique régulier

-   Interventions prioritaires

-   Réduction des risques de panne

-   Maîtrise des coûts d'exploitation

Fourniture d'équipements

Maghreb Fueling Technologie fournit une large gamme d'équipements
certifiés et fiables.

Équipements proposés :

-   Distributeurs de carburant

-   Pompes, tuyauteries et accessoires

-   Systèmes de jaugeage et de contrôle

-   Équipements de sécurité

Formation & accompagnement technique

Maghreb Fueling Technologie propose des programmes de formation destinés
aux exploitants, techniciens et opérateurs afin de garantir une
utilisation sûre, efficace et conforme des installations.

Nos formations sont assurées par des spécialistes expérimentés et
peuvent être réalisées sur site ou en salle, selon les besoins du
client.

Domaines de formation

Exploitation des stations-service

-   Fonctionnement des systèmes de distribution de carburant

-   Procédures d'exploitation quotidienne

-   Gestion des incidents et situations d'urgence

Maintenance des équipements

-   Maintenance préventive des installations

-   Diagnostic des pannes courantes

-   Bonnes pratiques de maintenance

Sécurité & conformité

-   Règles de sécurité en station-service

-   Prévention des risques (incendie, fuites, pollution)

-   Respect des normes et procédures réglementaires

Stockage & installations industrielles

-   Gestion sécurisée des cuves de stockage

-   Contrôle et surveillance des installations

-   Bonnes pratiques environnementales
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Package, Download, ExternalLink } from "lucide-react";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const EXTENSIONS = [".jpeg", ".jpg", ".png"];

const getImagePaths = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) =>
    `/images/produits/${slug}/img-${String(i + 1).padStart(2, "0")}`
  );

const produitSlugs = [
  "distributeurs-carburant",
  "tuyauterie-kps-opw",
  "raccordements-ridart",
  "flexible-pistolet",
  "telejaugeage-atg",
  "fms",
  "solutions-paiement",
  "citernes-stockage",
  "chambres-composite",
  "car-wash",
  "equipements-servicing-meclube",
  "pompes-immergees-barbero",
] as const;

const produitsData: Array<{
  slug: (typeof produitSlugs)[number];
  title: string;
  content: string;
  pdfUrl?: string;
  fournisseurLinks?: Array<{ label: string; url: string }>;
}> = [
  {
    slug: "distributeurs-carburant",
    title: "Distributeurs de carburant",
    content: `Les volucompteurs SANKI assurent une mesure précise, fiable et sécurisée des volumes de carburant lors des opérations de distribution et de transfert. Reconnus pour leur robustesse et leur performance, ils sont largement utilisés dans les stations-service et les installations industrielles.

Caractéristiques techniques :
• Haute précision de mesure
• Conception robuste adaptée à un usage intensif
• Compatibilité avec différents types de carburants
• Fonctionnement fiable dans des environnements exigeants
• Intégration facile aux systèmes de gestion et de contrôle

Modèles proposés :
• SK10 – Distributeur standard précis et fiable, adapté aux petites et moyennes stations.
• SK15 – Modèle fiable avec options d'affichage et composants de haute performance.
• SK52 / SK56 / SK65 – Distributeurs haute gamme multi-buses pour stations à fort trafic.

Ces équipements sont conçus pour fonctionner avec différents carburants tels que l'essence, le diesel et peuvent être configurés avec des options avancées (carte IC, impression de tickets, affichage LED ou connexion au système de gestion FMS).`,
    fournisseurLinks: [
      { label: "SANKI - Volucompteur", url: "https://www.sankichina.fr/" },
    ],
  },
  {
    slug: "tuyauterie-kps-opw",
    title: "Tuyauterie KPS - OPW",
    content: `Pour l'acheminement du carburant, il est prévu d'installer une tuyauterie en PEHD (polyéthylène haute densité) de marque KPS, fabriquée par OPW Sweden AB, société suédoise disposant de plus de 30 ans d'expérience dans la production de tuyaux et raccords en polyéthylène destinés au secteur pétrolier.

Le système de tuyauterie KPS, à base de PE, développe une pression d'éclatement supérieure à 40 bar. Pour une pression de fonctionnement moyenne d'environ 3,5 bar, cela représente une marge de sécurité largement supérieure aux exigences d'exploitation.

Gamme de produits – KPS Petrol Pipe System™ :
• Tuyaux simples et double enveloppe
• Manchons électrosoudables
• Coudes, tés et réductions
• Raccords de transition plastique/acier
• Conduits électriques et presse-étoupes
• Limiteurs de remplissage et systèmes de détection de fuites

Les tuyaux KPS sont fabriqués selon un procédé exclusif avec une barrière anti-perméation hautement performante. Le système est conforme à la norme EN 14125 et UL 971.`,
    fournisseurLinks: [
      { label: "KPS Piping", url: "https://kpspiping.fr/" },
    ],
  },
  {
    slug: "raccordements-ridart",
    title: "Raccordements – Ridart",
    content: `La gamme de raccordements Ridart offre des solutions complètes et fiables pour connecter, sécuriser et optimiser les réseaux de tuyauterie dans les stations-service, dépôts et installations industrielles. Tous les produits sont fabriqués en Italie avec plus de 50 ans d'expérience.

Types de raccords et composants :
• Raccords API & Quick Dry – Raccords rapides et sécurisés pour le chargement et le déchargement de carburants
• Vannes de sécurité et valves – Valves limitatrices, clapets anti-siphon
• Couplages Camlock & adaptateurs – Solutions de couplage rapide haute efficacité
• Accessoires de ligne (suction, vapor recovery, measuring)

Caractéristiques techniques :
• Conception robuste en acier, laiton et aluminium
• Raccords conformes aux normes européennes (ATEX, EN ISO)
• Compatibles avec une large gamme de carburants
• Solutions sur mesure selon les besoins du projet`,
    fournisseurLinks: [
      { label: "Ridart", url: "https://www.ridart.it/index" },
    ],
  },
  {
    slug: "flexible-pistolet",
    title: "Flexible et Pistolet",
    content: `Maghreb Fueling Technologie propose une gamme complète de flexibles et pistolets de distribution de carburant destinés aux stations-service, dépôts pétroliers et installations industrielles.

1. Flexibles carburant – ALFAGOMMA
• Flexibles pour essence, gasoil et autres carburants
• Haute résistance à l'abrasion, à la pression et aux hydrocarbures
• Excellente flexibilité et longue durée de vie
• Conformité aux normes internationales de sécurité

2. Pistolets automatiques – OPW
• Arrêt automatique haute sensibilité
• Systèmes anti-goutte et anti-fuite
• Conception robuste pour usage intensif
• Compatibilité avec différents types de carburants`,
    fournisseurLinks: [
      { label: "ALFAGOMMA - Flexible", url: "https://www.alfagomma.com/fr/" },
      { label: "OPW - Pistolet", url: "https://www.opwglobal.com/" },
    ],
  },
  {
    slug: "telejaugeage-atg",
    title: "Système de Téléjaugeage des Cuves (ATG)",
    content: `Surveillance intelligente des stocks carburant. Le système de téléjaugeage permet de surveiller en permanence le niveau des cuves et les paramètres critiques.

Fonctions principales :
• Mesure précise du niveau de carburant dans les cuves
• Détection simultanée du niveau d'eau et de carburant
• Surveillance de la température et de la densité
• Détection automatique des fuites carburant
• Alarmes automatiques en cas d'anomalie

Avantages :
• Gestion précise des stocks carburant
• Réduction des risques environnementaux
• Optimisation des approvisionnements

Les sondes ATG offrent une précision millimétrique et une transmission des données en temps réel vers le système de gestion.`,
  },
  {
    slug: "fms",
    title: "Système de Gestion des Stations-Service (FMS)",
    content: `Plateforme intelligente de gestion et de supervision. Notre système de gestion permet de centraliser toutes les opérations d'une station-service en temps réel.

Fonctionnalités principales :
• Supervision des pompes et des cuves en temps réel
• Gestion des ventes et des transactions carburant
• Gestion des équipes et des shifts opérateurs
• Suivi des livraisons carburant
• Gestion des prix et des promotions
• Gestion des cartes clients et cartes flotte
• Analyse des performances et reporting détaillé

Avantages :
• Centralisation des données station
• Amélioration de la transparence des opérations
• Réduction des pertes et des fraudes
• Accès via serveur local ou cloud

Ce système permet également une gestion multi-stations depuis un siège central.`,
  },
  {
    slug: "solutions-paiement",
    title: "Solutions de Paiement Intégrées",
    content: `Paiement digital pour stations-service. Grâce à notre partenariat avec NAPS, nous proposons des solutions de paiement intégrées directement au niveau du volucompteur ou du système de gestion.

Modes de paiement disponibles :
• TPE NAPS (cartes bancaires)
• Cartes RFID / cartes carburant
• Paiement NFC (Tap & Pay)
• Paiement par QR Code
• Applications mobiles

Avantages pour les stations :
• Paiement rapide directement à la pompe
• Réduction du temps d'attente des clients
• Gestion automatique des transactions
• Intégration avec les programmes de fidélité

Le système permet la gestion des cartes clients et cartes flotte, les remises automatiques et l'intégration avec les systèmes de gestion de station.`,
  },
  {
    slug: "citernes-stockage",
    title: "Citernes & Solutions de stockage",
    content: `Maghreb Fueling Technologie propose une gamme complète de solutions de stockage de carburant pour les stations-service, dépôts pétroliers et installations industrielles.

Types de citernes :
• Citernes aériennes – Conception robuste, options avec bac de rétention, facilité d'accès
• Citernes enterrées – Double paroi, protection anticorrosion, conformité environnementale
• Citernes double paroi – Détection de fuite intermédiaire, systèmes de surveillance intégrés

Caractéristiques : Conception conforme aux normes, durabilité accrue, facilité d'installation et de maintenance.`,
  },
  {
    slug: "chambres-composite",
    title: "Chambres en composite",
    content: `Les chambres en composite proposées par Maghreb Fueling Technologie sont des solutions modernes et performantes pour l'accès, la protection et la maintenance des équipements enterrés dans les installations de carburantes.

Conçues à base de matériaux composites (résine renforcée, fibre de verre), elles allient résistance mécanique, durabilité et légèreté.

Caractéristiques principales :
• Matériaux composites haute performance
• Résistance à la corrosion, aux hydrocarbures et aux agressions environnementales
• Légères et faciles à manipuler
• Bonne isolation thermique
• Structure robuste adaptée aux zones de circulation piétonne et véhicule léger
• Protection de l'environnement`,
    pdfUrl: "/documents/produits/chambres-composite/dossier-technique.pdf",
  },
  {
    slug: "car-wash",
    title: "Car Wash",
    content: `Maghreb Fueling Technologie propose des solutions complètes de lavage automobile (Car Wash) destinées aux stations-service, sites commerciaux et installations privées.

Solutions de lavage automobile :
• Stations de lavage automatique
• Stations de lavage haute pression
• Systèmes de lavage en libre-service

Installation & mise en service :
• Installation complète des équipements Car Wash
• Raccordement électrique et hydraulique
• Tests de fonctionnement et mise en service

Service & accompagnement technique :
• Maintenance préventive et corrective
• Fourniture de pièces et accessoires

Intégration avec les stations-service : association aux systèmes de gestion et de paiement.`,
  },
  {
    slug: "equipements-servicing-meclube",
    title: "Équipements Servicing – MECLUBE",
    content: `Gamme complète d'équipements de servicing professionnels fournis par MECLUBE, adaptés aux stations-service, ateliers et sites industriels.

Produits :
• Surpresse à graisse pneumatique – Distribution rapide et contrôlée de graisse
• Surpresse pneumatique à huile – Transfert des huiles lubrifiantes
• Pistolet compteur digital – Mesure précise du volume distribué
• Enrouleurs carrossés ouverts (Air, Graisse, Huile)
• Pompe à membrane – Pompage et transfert des fluides techniques
• Machine à laver industrielle – Nettoyage des pièces mécaniques
• Compresseur à borne air – Solution pour l'air comprimé

Avantages : Solutions fiables et durables, meilleure précision, réduction des temps d'arrêt, conception ergonomique.`,
    fournisseurLinks: [
      { label: "MECLUBE", url: "https://meclube.com/It" },
    ],
  },
  {
    slug: "pompes-immergees-barbero",
    title: "Pompes immergées – E. Barbero",
    content: `Gamme de pompes immergées de la série SBF-2, développées par E. Barbero, fabricant italien historique. Conçues pour être installées à l'intérieur des citernes ou réservoirs.

Caractéristiques techniques principales :
• Conception submersible fiable – installation directement dans le réservoir
• Matériaux résistants aux carburants – corrosion réduite, durabilité accrue
• Performances optimisées – débits adaptés selon capacité et besoin
• Moteur électrique robuste – efficacité énergétique
• Entretien simplifié – structure facilitant l'accès pour maintenance
• Flexibilité d'installation – citernes aériennes ou enterrées

Idéales pour les stations-service, dépôts de stockage et installations industrielles.`,
    fournisseurLinks: [
      { label: "E. Barbero - Pompe immergée", url: "https://www.ebarbero.com/bga-2/?lang=en" },
    ],
  },
];

const GalleryImage = ({
  src,
  alt,
  className,
  hideUntilLoaded = false,
}: {
  src: string;
  alt: string;
  className: string;
  hideUntilLoaded?: boolean;
}) => {
  const base = src.replace(/\.(jpeg|jpg|png)$/i, "");
  const [currentSrc, setCurrentSrc] = useState(`${base}${EXTENSIONS[0]}`);
  const [extIndex, setExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(`${base}${EXTENSIONS[0]}`);
    setExtIndex(0);
    setHasError(false);
    setHasLoaded(false);
  }, [base]);

  const handleError = () => {
    const next = extIndex + 1;
    if (next < EXTENSIONS.length) {
      setCurrentSrc(`${base}${EXTENSIONS[next]}`);
      setExtIndex(next);
    } else {
      setHasError(true);
    }
  };

  if (hasError) return null;

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${hideUntilLoaded && !hasLoaded ? "opacity-0" : ""}`}
      onLoad={() => setHasLoaded(true)}
      onError={handleError}
    />
  );
};

const Produits = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const CARDS_PER_PAGE = 4;
  const totalPages = Math.ceil(produitsData.length / CARDS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [modalProduit, setModalProduit] = useState<(typeof produitsData)[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const start = page * CARDS_PER_PAGE;
  const visibleProduits = produitsData.slice(start, start + CARDS_PER_PAGE);

  const openModal = (produit: (typeof produitsData)[0]) => {
    setModalProduit(produit);
    setGalleryIndex(0);
  };

  const closeModal = () => setModalProduit(null);

  const modalImages = modalProduit
    ? getImagePaths(modalProduit.slug, 10)
    : [];

  const goPrev = () =>
    setGalleryIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  const goNext = () =>
    setGalleryIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    if (!modalProduit) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalProduit]);

  return (
    <section
      id="produits"
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <EnergyLines lineCount={20} baseHue={25} hueRange={80} opacity={0.12} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-mft-orange/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-mft-green/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block"
          >
            {t.produits.label}
          </motion.span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5">
            {t.produits.titleBefore}{t.produits.titleBefore ? " " : ""}
            <motion.span
              initial={{ backgroundSize: "0% 3px" }}
              whileInView={{ backgroundSize: "100% 3px" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #E87722, #F4A543)",
                WebkitBackgroundClip: "text",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
              }}
            >
              {t.produits.titleHighlight}
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {visibleProduits.map((produit, i) => (
              <motion.div
                key={produit.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:border-mft-orange/25 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute top-0 left-0 right-0 z-10 h-0.5 bg-transparent group-hover:bg-mft-orange/60 transition-colors duration-300 rounded-t-2xl" />
                <div className="relative aspect-[4/3] bg-white/[0.02] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/40 p-4 text-center">
                    <Package className="w-12 h-12" strokeWidth={1} />
                    <span className="text-sm font-medium line-clamp-2">{produit.title}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <GalleryImage
                      src={`/images/produits/${produit.slug}/img-01`}
                      alt={produit.title}
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      hideUntilLoaded
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-lg text-white mb-3 line-clamp-2">
                    {produit.title}
                  </h3>
                  <button
                    onClick={() => openModal(produit)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-mft-orange/15 text-mft-orange font-semibold text-sm transition-all duration-300 border border-mft-orange/30 hover:bg-mft-orange/25 hover:border-mft-orange/50"
                  >
                    {t.produits.voirDetails}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.06] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <span className="text-white/60 text-sm font-medium">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-2 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.06] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProduit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-mft-dark/95 border border-white/[0.1] shadow-2xl flex flex-col"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h3 className="text-xl font-heading font-bold text-white p-6 pb-0">
                {modalProduit.title}
              </h3>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {modalImages.length > 0 && (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-white/[0.03]">
                    {modalImages.map((imgPath, idx) => (
                      <GalleryImage
                        key={imgPath}
                        src={imgPath}
                        alt={`${modalProduit.title} - Image ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                          idx === galleryIndex ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    {modalImages.length > 1 && (
                      <>
                        <button
                          onClick={goPrev}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={goNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {modalImages.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setGalleryIndex(i)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i === galleryIndex ? "bg-mft-orange" : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {modalProduit.pdfUrl && (
                    <a
                      href={modalProduit.pdfUrl}
                      download="dossier-technique-chambres-composite.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mft-orange/20 hover:bg-mft-orange/30 text-mft-orange font-semibold text-sm transition-colors border border-mft-orange/40 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      {t.produits.downloadDossier}
                    </a>
                  )}
                  {modalProduit.fournisseurLinks && modalProduit.fournisseurLinks.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                        {t.produits.fournisseur}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {modalProduit.fournisseurLinks.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium text-sm transition-colors border border-white/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-white/80 whitespace-pre-line leading-relaxed">
                    {modalProduit.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Produits;

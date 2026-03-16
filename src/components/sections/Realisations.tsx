import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Fuel,
  Container,
  ChevronRight,
  ChevronLeft,
  X,
  Building2,
  ShieldCheck,
  Gauge,
  Flame,
  Wrench,
  CreditCard,
  Car,
  Monitor,
  Pipette,
  CircuitBoard,
} from "lucide-react";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const tabs = [
  {
    id: "b2b",
    label: "Station privée",
    sublabel: "Industriels",
    icon: <Factory size={18} />,
    color: "from-mft-orange to-[#D35F10]",
    title:
      "Réalisations B2B – Sites industriels, flottes & installations spécialisées",
    intro:
      "Nous accompagnons les entreprises et industriels dans la réalisation de :",
    bullets: [
      {
        icon: <Pipette size={16} />,
        text: "Mise en place des installations des équipement pour le carburant",
      },
      {
        icon: <ShieldCheck size={16} />,
        text: "Solutions de distribution sécurisée et contrôlée",
      },
      {
        icon: <Monitor size={16} />,
        text: "Systèmes de gestion, supervision et paiement dédiés",
      },
      {
        icon: <Flame size={16} />,
        text: "Réseaux gaz et installations techniques industrielles",
      },
      {
        icon: <Wrench size={16} />,
        text: "Travaux de construction métallique ",
      },
    ],
    conclusion:
      "Ces projets sont conçus pour garantir fiabilité, contrôle et continuité d'exploitation.",
  },
  {
    id: "b2c",
    label: "Station publique",
    sublabel: "Stations",
    icon: <Fuel size={18} />,
    color: "from-mft-green to-mft-green-dark",
    title: "Réalisations B2C – Stations-service & services au public",
    intro:
      "Nous réalisons des projets destinés aux stations-service ouvertes au public, en assurant :",
    bullets: [
      {
        icon: <Building2 size={16} />,
        text: "Installation complète de stations-service",
      },
      {
        icon: <Gauge size={16} />,
        text: "Mise en place des équipements de distribution carburant",
      },
      {
        icon: <CreditCard size={16} />,
        text: "Intégration des systèmes de gestion, supervision et paiement",
      },
      {
        icon: <Car size={16} />,
        text: "Installation de solutions Car Wash & services associés",
      },
      {
        icon: <CircuitBoard size={16} />,
        text: "Rénovation et modernisation de stations existantes",
      },
    ],
    conclusion:
      "Nos solutions permettent d'améliorer la performance, la sécurité et l'expérience client.",
  },
  {
    id: "depots",
    label: "Dépôts",
    sublabel: "pétrolier",
    icon: <Container size={18} />,
    color: "from-[#2A2A2A] to-mft-dark",
    title: "Réalisations Dépôts carburant & infrastructures de stockage",
    intro:
      "Nous réalisons des projets pour les dépôts carburant et infrastructures de stockage, comprenant :",
    bullets: [
      {
        icon: <Container size={16} />,
        text: "Installation de citernes aériennes et enterrées",
      },
      {
        icon: <Pipette size={16} />,
        text: "Réseaux de tuyauterie et raccordements",
      },
      {
        icon: <Gauge size={16} />,
        text: "Pompes, systèmes de mesure et de jaugeage",
      },
      {
        icon: <Monitor size={16} />,
        text: "Supervision des stocks et sécurité des installations",
      },
      {
        icon: <Wrench size={16} />,
        text: "Structures métalliques et charpentes associées",
      },
    ],
    conclusion:
      "Nos réalisations respectent les normes de sécurité et environnementales les plus exigeantes.",
  },
];

const EXTENSIONS = [".jpeg", ".jpg", ".png"];

const galleryImagesByTab: Record<string, string[]> = {
  b2b: Array.from({ length: 14 }, (_, i) =>
    `/images/realisations/b2b/img-${String(i + 1).padStart(2, "0")}.jpeg`
  ),
  b2c: Array.from({ length: 18 }, (_, i) =>
    `/images/realisations/b2c/img-${String(i + 1).padStart(2, "0")}.jpeg`
  ),
  depots: Array.from({ length: 8 }, (_, i) =>
    `/images/realisations/depots/img-${String(i + 1).padStart(2, "0")}.jpeg`
  ),
};

const GalleryImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const base = src.replace(/\.(jpeg|jpg|png)$/i, "");
  const [currentSrc, setCurrentSrc] = useState(`${base}.jpeg`);
  const [extIndex, setExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setExtIndex(0);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    const next = extIndex + 1;
    if (next < EXTENSIONS.length) {
      setCurrentSrc(`${base}${EXTENSIONS[next]}`);
      setExtIndex(next);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center bg-white/[0.03] border border-white/10`}
      >
        <p className="text-white/50 text-sm text-center px-6">
          Image non disponible. Placez vos images dans{" "}
          <code className="text-mft-orange/80">
            public/images/realisations/
            {src.includes("b2c") ? "b2c" : src.includes("depots") ? "depots" : "b2b"}/
          </code>{" "}
          avec les noms img-01.jpeg, img-02.jpeg, etc.
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

const Realisations = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryTab, setGalleryTab] = useState<string>("b2b");
  const localizedTabs = tabs.map((tab) => {
    const localizedTab = t.realisations.tabs[tab.id as "b2b" | "b2c" | "depots"];
    return {
      ...tab,
      ...localizedTab,
      bullets: tab.bullets.map((bullet, index) => ({
        ...bullet,
        text: localizedTab.bullets[index],
      })),
    };
  });
  const active = localizedTabs[activeTab];
  const currentGalleryImages = galleryImagesByTab[galleryTab] ?? [];

  const openGallery = () => {
    setGalleryTab(active.id);
    setGalleryIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const goPrev = () => {
    setGalleryIndex((prev) =>
      prev === 0 ? currentGalleryImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setGalleryIndex((prev) =>
      prev === currentGalleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!isGalleryOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <section
      id="realisations"
      className="py-16 lg:py-20 bg-transparent relative overflow-hidden"
    >
      <EnergyLines lineCount={12} baseHue={30} hueRange={70} opacity={0.08} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mft-orange/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white leading-tight text-center">
            {t.realisations.headingBefore}{" "}
            <span className="text-white">
              {t.realisations.headingHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Full-width tab bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden shadow-lg p-1.5 gap-1.5"
          >
            {localizedTabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                whileHover={{ scale: activeTab === i ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer relative py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === i
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="realisationTabBg"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                  <span className="text-[11px] opacity-60 hidden sm:inline">
                    {tab.sublabel}
                  </span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Content card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl p-7 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-mft-orange/5 rounded-bl-full blur-[60px] pointer-events-none" />

              <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mb-3 leading-snug">
                {active.title}
              </h3>

              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {active.intro}
              </p>

              <div className="space-y-3 mb-6">
                {active.bullets.map((bullet, i) => (
                  <motion.div
                    key={bullet.text}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 150,
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-mft-orange shrink-0 group-hover:bg-mft-orange/15 group-hover:border-mft-orange/25 transition-all duration-300"
                      style={{
                        animation: `glow-pulse 4s ease-in-out ${i * 0.6}s infinite`,
                      }}
                    >
                      {bullet.icon}
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {bullet.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ChevronRight size={15} className="text-mft-orange shrink-0" />
                  <p className="text-white/45 text-xs italic leading-relaxed">
                    {active.conclusion}
                  </p>
                </div>

                <button
                  onClick={openGallery}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-white/25 bg-white/[0.03] backdrop-blur-sm hover:border-mft-orange/60 hover:text-mft-orange hover:bg-mft-orange/10 transition-all duration-300"
                >
                    {t.realisations.seeImages}
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isGalleryOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
            onClick={closeGallery}
          >
            <div className="absolute inset-0 bg-[#0A0F16]/70 backdrop-blur-md" />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeGallery}
                className="cursor-pointer absolute -top-3 -right-3 sm:top-3 sm:right-3 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white hover:bg-black/60 transition-colors flex items-center justify-center"
              >
                <X size={18} />
              </button>

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-sm shadow-[0_30px_70px_rgba(0,0,0,0.55)] flex items-center justify-center p-4 min-h-[40vh]">
                <GalleryImage
                  src={currentGalleryImages[galleryIndex]}
                  alt={`Réalisation ${localizedTabs.find((tab) => tab.id === galleryTab)?.label ?? galleryTab} ${galleryIndex + 1}`}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />

                <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-3xl" />

                <button
                  onClick={goPrev}
                  className="cursor-pointer absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white hover:bg-black/60 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={goNext}
                  className="cursor-pointer absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white hover:bg-black/60 transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/45 border border-white/20 text-white/85 text-xs font-semibold tracking-wide backdrop-blur-sm">
                  {galleryIndex + 1} / {currentGalleryImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Realisations;

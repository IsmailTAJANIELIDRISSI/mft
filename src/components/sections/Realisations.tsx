import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Fuel,
  Container,
  ChevronRight,
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

const tabs = [
  {
    id: "b2b",
    label: "B2B",
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
        text: "Installations carburant pour flottes privées",
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
        text: "Travaux de construction métallique et supports techniques",
      },
    ],
    conclusion:
      "Ces projets sont conçus pour garantir fiabilité, contrôle et continuité d'exploitation.",
  },
  {
    id: "b2c",
    label: "B2C",
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
    sublabel: "Stockage",
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

const Realisations = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section
      id="realisations"
      className="py-16 lg:py-20 bg-mft-dark relative overflow-hidden"
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
            Des projets concrets, des{" "}
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
              résultats prouvés
            </motion.span>
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
            {tabs.map((tab, i) => (
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

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                <ChevronRight size={15} className="text-mft-orange shrink-0" />
                <p className="text-white/45 text-xs italic leading-relaxed">
                  {active.conclusion}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Realisations;

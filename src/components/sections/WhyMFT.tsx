import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const reasons = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Expertise Locale",
    desc: "15+ ans d'expérience au Maroc avec une connaissance approfondie du terrain.",
    stat: "15+",
    statLabel: "ans",
    color: "orange" as const,
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Équipements Certifiés",
    desc: "Marques internationales de référence, testées et approuvées.",
    stat: "3",
    statLabel: "marques",
    color: "green" as const,
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Atelier Mobile",
    desc: "Intervention rapide sur tout le territoire national.",
    stat: "24h",
    statLabel: "délai",
    color: "orange" as const,
  },
];

const WhyMFT = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <EnergyLines lineCount={20} baseHue={25} hueRange={80} opacity={0.12} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mft-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mft-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block"
          >
            {t.why.label}
          </motion.span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {t.why.title}
          </h2>
          <p className="text-white/50 text-lg">
            {t.why.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <GlowCard
                glowColor={reason.color}
                className="p-8 backdrop-blur-md hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mft-orange/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-mft-orange group-hover:bg-mft-orange group-hover:text-white transition-all duration-500"
                    style={{
                      animation: `float 4s ease-in-out ${i * 0.6}s infinite`,
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div className="text-right">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        duration: 0.5,
                        type: "spring",
                      }}
                      className="font-heading font-extrabold text-3xl text-white/90 group-hover:text-mft-orange transition-colors duration-300"
                    >
                      {t.why.reasons[i].stat}
                    </motion.div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                      {t.why.reasons[i].statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3 relative z-10">
                  {t.why.reasons[i].title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                  {t.why.reasons[i].desc}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-mft-orange transition-colors relative z-10 mt-auto"
                >
                  {t.why.more}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMFT;

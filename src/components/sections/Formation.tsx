import { motion } from "framer-motion";
import { Briefcase, Wrench, ShieldAlert, Factory } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import EnergyLines from "../ui/EnergyLines";

const formationCards = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Exploitation",
    desc: "Accompagnement dans l'exploitation quotidienne des stations pétrolières.",
    color: "orange" as const,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance",
    desc: "Formation aux bonnes pratiques de maintenance préventive et corrective.",
    color: "green" as const,
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: "Sécurité",
    desc: "Protocoles stricts et prévention des risques sur sites industriels.",
    color: "orange" as const,
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Stockage",
    desc: "Normes et gestion sécurisée des dépôts et cuves de stockage.",
    color: "green" as const,
  },
];

const Formation = () => {
  return (
    <section
      id="formation"
      className="py-24 lg:py-32 bg-mft-dark relative overflow-hidden"
    >
      {/* Animated energy lines background */}
      <EnergyLines lineCount={20} baseHue={25} hueRange={80} opacity={0.15} />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#E87722 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-mft-orange/15 to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-6 inline-block"
            >
              FORMATION & ACCOMPAGNEMENT
            </motion.span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Formez vos équipes aux{" "}
              <motion.span
                initial={{ backgroundSize: "0% 3px" }}
                whileInView={{ backgroundSize: "100% 3px" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E87722, #F4A543)",
                  WebkitBackgroundClip: "text",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                meilleures pratiques
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/60 mb-10 leading-relaxed"
            >
              Des programmes de formation sur-mesure pour exploitants,
              techniciens et opérateurs, dispensés par nos spécialistes
              directement sur site ou dans nos salles équipées.
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-mft-orange/10 border border-mft-orange/30 text-mft-orange font-bold transition-all hover:bg-mft-orange hover:text-white hover:border-mft-orange hover:shadow-[0_20px_40px_-12px_rgba(232,119,34,0.3)] overflow-hidden"
            >
              <span className="relative z-10">Demander un programme</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

            {formationCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <GlowCard
                  glowColor={card.color}
                  className="p-6 backdrop-blur-md hover:-translate-y-2 transition-transform duration-500"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center mb-5 transition-all duration-500 ${
                      card.color === "orange"
                        ? "text-mft-orange group-hover:bg-mft-orange/20 group-hover:border-mft-orange/30"
                        : "text-mft-green group-hover:bg-mft-green/20 group-hover:border-mft-green/30"
                    }`}
                    style={{
                      animation: `float 4s ease-in-out ${index * 0.4}s infinite`,
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;

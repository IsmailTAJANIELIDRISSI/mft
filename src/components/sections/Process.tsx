import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, Search, HardHat, HeartHandshake } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: <Phone size={24} />,
    title: "Prise de contact",
    desc: "Définition des besoins initiaux et périmètre du projet.",
  },
  {
    num: 2,
    icon: <Search size={24} />,
    title: "Étude technique",
    desc: "Analyse approfondie et dimensionnement précis.",
  },
  {
    num: 3,
    icon: <HardHat size={24} />,
    title: "Installation",
    desc: "Pose professionnelle et mise en service sur site.",
  },
  {
    num: 4,
    icon: <HeartHandshake size={24} />,
    title: "Suivi & Maintenance",
    desc: "Assistance continue et contrat de service dédié.",
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mft-orange/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[520px] h-[520px] bg-mft-green/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
            PROCESSUS
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5">
            Notre méthodologie
          </h2>
          <p className="text-white/50 text-lg">
            De la conception à la maintenance, une approche éprouvée en 4 étapes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Vertical Animated Line */}
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-mft-orange via-mft-orange-light to-mft-green"
            />
          </div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for desktop layout balance */}
                  <div className="hidden md:block flex-1" />

                  {/* Icon Node */}
                  <div className="relative z-10 flex shrink-0 justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center relative group ${i % 2 === 0 ? "text-mft-orange shadow-[0_0_30px_rgba(232,119,34,0.15)]" : "text-mft-green shadow-[0_0_30px_rgba(124,181,24,0.18)]"}`}
                    >
                      <div className={`absolute inset-0 rounded-2xl animate-pulse ${i % 2 === 0 ? "bg-mft-orange/10" : "bg-mft-green/10"}`} />
                      <div className="relative z-10">{step.icon}</div>
                      
                      {/* Step Number Badge */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg text-white font-bold flex items-center justify-center text-sm shadow-lg ${i % 2 === 0 ? "bg-mft-orange" : "bg-mft-green"}`}>
                        {step.num}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl relative overflow-hidden text-left ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                      
                      <h3 className="font-heading font-bold text-2xl text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-[15px] leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

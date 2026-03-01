import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Truck, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Expertise Locale",
    desc: "15+ ans d'expérience au Maroc avec une connaissance approfondie du terrain.",
    stat: "15+",
    statLabel: "ans",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Équipements Certifiés",
    desc: "Marques internationales de référence, testées et approuvées.",
    stat: "3",
    statLabel: "marques",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Atelier Mobile",
    desc: "Intervention rapide sur tout le territoire national.",
    stat: "24h",
    statLabel: "délai",
  },
];

const WhyMFT = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
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
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
            POURQUOI MFT
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-white/50 text-lg">
            La confiance de nos clients repose sur notre expertise, nos
            équipements et notre réactivité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mft-orange/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-mft-orange group-hover:bg-mft-orange group-hover:text-white transition-all duration-500">
                  {reason.icon}
                </div>
                <div className="text-right">
                  <div className="font-heading font-extrabold text-3xl text-white/90 group-hover:text-mft-orange transition-colors duration-300">
                    {reason.stat}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                    {reason.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-3 relative z-10">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                {reason.desc}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-mft-orange transition-colors relative z-10 mt-auto"
              >
                En savoir plus
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMFT;

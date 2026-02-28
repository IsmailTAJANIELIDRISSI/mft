import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Truck } from "lucide-react";

const WhyMFT = () => {
  const reasons = [
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Expertise Locale",
      desc: "15+ ans d'expérience au Maroc",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Équipements Certifiés",
      desc: "Marques internationales de référence",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Atelier Mobile",
      desc: "Intervention rapide sur tout le territoire",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mft-orange via-[#E36612] to-[#B84E0B] relative overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Abstract shape */}
      <div className="absolute -left-[10%] -top-[50%] w-[50%] h-[200%] bg-white/5 rotate-12 blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12">
          <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2 inline-block">
            WHY CHOOSE MFT
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white">
            Pourquoi nous choisir ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/80 font-medium text-lg">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMFT;

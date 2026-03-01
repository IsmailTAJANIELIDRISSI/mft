import { motion } from "framer-motion";
import { Fuel, Droplets, GaugeCircle, ShieldAlert } from "lucide-react";

const eqCategories = [
  {
    icon: <Fuel className="w-8 h-8" />,
    name: "Distributeurs de carburant",
    desc: "Équipements de distribution haute performance certifiés.",
    num: "01",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    name: "Pompes & tuyauteries",
    desc: "Systèmes de transfert et de raccordement conformes.",
    num: "02",
  },
  {
    icon: <GaugeCircle className="w-8 h-8" />,
    name: "Systèmes de jaugeage",
    desc: "Mesure et supervision des niveaux en temps réel.",
    num: "03",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    name: "Équipements de sécurité",
    desc: "Dispositifs de sécurité et prévention des risques.",
    num: "04",
  },
];

const Equipment = () => {
  return (
    <section id="equipement" className="py-24 lg:py-32 bg-[#121418] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
            ÉQUIPEMENTS
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5">
            Équipements certifiés, fiables et{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mft-orange to-mft-orange-light">
              performants
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eqCategories.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/[0.08] flex flex-col items-center text-center hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mft-orange via-mft-orange-light to-mft-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg ${i % 2 === 0 ? "group-hover:bg-mft-orange group-hover:border-mft-orange" : "group-hover:bg-mft-green group-hover:border-mft-green"}`}>
                {cat.icon}
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-3">
                {cat.name}
              </h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;

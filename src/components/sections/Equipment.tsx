import { motion } from "framer-motion";
import { Fuel, Droplets, GaugeCircle, ShieldAlert } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import EnergyLines from "../ui/EnergyLines";

const eqCategories = [
  {
    icon: <Fuel className="w-8 h-8" />,
    name: "Distributeurs de carburant",
    desc: "Équipements de distribution haute performance certifiés.",
    num: "01",
    color: "orange" as const,
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    name: "Pompes & tuyauteries",
    desc: "Systèmes de transfert et de raccordement conformes.",
    num: "02",
    color: "green" as const,
  },
  {
    icon: <GaugeCircle className="w-8 h-8" />,
    name: "Systèmes de jaugeage",
    desc: "Mesure et supervision des niveaux en temps réel.",
    num: "03",
    color: "orange" as const,
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    name: "Équipements de sécurité",
    desc: "Dispositifs de sécurité et prévention des risques.",
    num: "04",
    color: "green" as const,
  },
];

const Equipment = () => {
  return (
    <section
      id="equipement"
      className="py-24 lg:py-32 bg-[#121418] relative overflow-hidden"
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
            ÉQUIPEMENTS
          </motion.span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5">
            Équipements certifiés, fiables et{" "}
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
              performants
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eqCategories.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <GlowCard
                glowColor={cat.color}
                className="p-8 backdrop-blur-md flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Animated top beam */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                  <div
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-mft-orange to-transparent"
                    style={{ animation: "gradient-x 3s ease-in-out infinite" }}
                  />
                </div>

                {/* Number watermark */}
                <span className="absolute top-3 right-4 text-5xl font-heading font-extrabold text-white/[0.03] transition-colors duration-500 group-hover:text-mft-orange/10 select-none">
                  {cat.num}
                </span>

                <div
                  className={`w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg ${
                    cat.color === "orange"
                      ? "group-hover:bg-mft-orange group-hover:border-mft-orange group-hover:shadow-mft-orange/30"
                      : "group-hover:bg-mft-green group-hover:border-mft-green group-hover:shadow-mft-green/30"
                  }`}
                  style={{
                    animation: `float 5s ease-in-out ${i * 0.5}s infinite`,
                  }}
                >
                  {cat.icon}
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-3">
                  {cat.name}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {cat.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;

import { motion } from "framer-motion";
import { Briefcase, Wrench, ShieldAlert, Factory } from "lucide-react";

const Formation = () => {
  const formationCards = [
    {
      icon: <Briefcase className="w-6 h-6 text-mft-orange" />,
      title: "Exploitation",
      desc: "Accompagnement dans l'exploitation quotidienne des stations pétrolières.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-mft-orange" />,
      title: "Maintenance",
      desc: "Formation aux bonnes pratiques de maintenance préventive et corrective.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-mft-green" />,
      title: "Sécurité",
      desc: "Protocoles stricts et prévention des risques sur sites industriels.",
    },
    {
      icon: <Factory className="w-6 h-6 text-mft-green" />,
      title: "Stockage",
      desc: "Normes et gestion sécurisée des dépôts et cuves de stockage.",
    },
  ];

  return (
    <section
      id="formation"
      className="py-24 lg:py-32 bg-mft-dark relative overflow-hidden"
    >
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#E87722 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full md:w-1/3 h-full bg-gradient-to-r from-mft-orange/20 via-mft-green-dark/10 to-transparent blur-3xl mix-blend-screen opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-6 inline-block tracking-widest lg:mt-[-4rem]">
              FORMATION & ACCOMPAGNEMENT
            </span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Formez vos équipes aux <br /> meilleures pratiques
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
              Des programmes de formation sur-mesure pour exploitants,
              techniciens et opérateurs, dispensés par nos spécialistes
              expérimentés directement sur site ou dans nos salles équipées.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-mft-orange/10 border border-mft-orange/30 text-mft-orange font-bold text-center transition-all hover:bg-mft-orange hover:text-white hover:border-mft-orange hover:-translate-y-1 shadow-[0_0_20px_rgba(232,119,34,0.15)]"
            >
              Demander un programme →
            </a>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Ambient glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            {formationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#242424]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#2A2A2A] hover:border-white/20 transition-colors"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
                }}
              >
                {/* Left accent border that appears on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-mft-green to-mft-green-dark scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>

                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>

                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;

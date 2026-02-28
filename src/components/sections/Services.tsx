import { motion } from "framer-motion";
import {
  Settings,
  PenTool,
  Wrench,
  RefreshCw,
  FileText,
  Package,
} from "lucide-react";

const servicesSet = [
  {
    icon: <Settings size={28} />,
    title: "Installation & Mise en service",
    desc: "Réalisation complète des projets, de la préparation à la mise en service finale.",
  },
  {
    icon: <PenTool size={28} />,
    title: "Études Techniques & Ingénierie",
    desc: "Études de faisabilité, dimensionnement, conformité et assistance réglementaire.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Maintenance & Dépannage",
    desc: "Maintenance préventive programmée et interventions de dépannage rapide.",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Rénovation & Mise à niveau",
    desc: "Modernisation des installations pour répondre aux normes actuelles.",
  },
  {
    icon: <FileText size={28} />,
    title: "Contrats de Maintenance",
    desc: "Suivi régulier, interventions prioritaires et maîtrise de vos coûts d'exploitation.",
  },
  {
    icon: <Package size={28} />,
    title: "Fourniture d'Équipements",
    desc: "Distributeurs, pompes, systèmes de jaugeage, et équipements de sécurité.",
  },
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-mft-bg">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm inline-block mb-6">
              NOS SERVICES
            </span>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-mft-dark mb-6 leading-tight">
              Solutions complètes pour l'industrie pétrolière
            </h2>
            <p className="text-lg text-mft-grey max-w-2xl">
              De l'installation à la maintenance, nous couvrons tous vos besoins
              techniques avec rigueur et précision industrielle.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesSet.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-mft-orange/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-mft-orange transition-all duration-300 group-hover:h-full"></div>

              <div className="w-16 h-16 rounded-full bg-mft-bg flex items-center justify-center text-mft-orange mb-8 group-hover:scale-110 group-hover:bg-mft-orange/10 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="font-heading font-bold text-xl text-mft-dark mb-4">
                {service.title}
              </h3>
              <p className="text-mft-grey text-sm mb-8 leading-relaxed flex-grow">
                {service.desc}
              </p>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-mft-orange group/link"
                >
                  En savoir plus
                  <span className="transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="w-full h-16 bg-gradient-to-r from-mft-orange via-mft-green to-mft-dark absolute left-0 -translate-y-1/2 clip-path-polygon opacity-10 blur-xl"></div>
    </section>
  );
};

export default Services;

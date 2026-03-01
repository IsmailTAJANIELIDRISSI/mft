import { motion } from "framer-motion";
import {
  Settings,
  PenTool,
  Wrench,
  RefreshCw,
  FileText,
  Package,
  ArrowUpRight,
} from "lucide-react";

const servicesSet = [
  {
    icon: <Settings size={26} />,
    title: "Installation & Mise en service",
    desc: "Réalisation complète des projets, de la préparation à la mise en service finale.",
    num: "01",
  },
  {
    icon: <PenTool size={26} />,
    title: "Études Techniques & Ingénierie",
    desc: "Études de faisabilité, dimensionnement, conformité et assistance réglementaire.",
    num: "02",
  },
  {
    icon: <Wrench size={26} />,
    title: "Maintenance & Dépannage",
    desc: "Maintenance préventive programmée et interventions de dépannage rapide.",
    num: "03",
  },
  {
    icon: <RefreshCw size={26} />,
    title: "Rénovation & Mise à niveau",
    desc: "Modernisation des installations pour répondre aux normes actuelles.",
    num: "04",
  },
  {
    icon: <FileText size={26} />,
    title: "Contrats de Maintenance",
    desc: "Suivi régulier, interventions prioritaires et maîtrise de vos coûts d'exploitation.",
    num: "05",
  },
  {
    icon: <Package size={26} />,
    title: "Fourniture d'Équipements",
    desc: "Distributeurs, pompes, systèmes de jaugeage, et équipements de sécurité.",
    num: "06",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mft-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
              NOS SERVICES
            </span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Solutions complètes pour
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mft-orange to-mft-orange-light">
                l'industrie pétrolière
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              De l'installation à la maintenance, nous couvrons tous vos besoins
              techniques avec rigueur et précision industrielle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesSet.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/[0.08] transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:border-white/[0.15] overflow-hidden flex flex-col"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mft-orange via-mft-orange-light to-mft-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex items-center justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center transition-all duration-500 ${index % 2 === 0 ? "text-mft-orange group-hover:bg-mft-orange" : "text-mft-green group-hover:bg-mft-green"} group-hover:text-white`}>
                  {service.icon}
                </div>
                <span className="text-4xl font-heading font-extrabold text-white/[0.05] group-hover:text-mft-orange/20 transition-colors duration-500">
                  {service.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                {service.desc}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-mft-orange transition-colors duration-300 mt-auto"
              >
                En savoir plus
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

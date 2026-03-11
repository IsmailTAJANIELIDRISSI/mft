import { motion } from "framer-motion";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const references = [
  { name: "Afriquia", src: "/images/references/afriquia-logo-removebg-preview.png" },
  { name: "Atlas Sahara", src: "/images/references/atlassahara-logo-removebg-preview.png" },
  { name: "Eurogate", src: "/images/references/eurogate-logo-removebg-preview.png" },
  { name: "Green Oil", src: "/images/references/greenoil-logo-removebg-preview.png" },
  { name: "INOV", src: "/images/references/inov-logo-removebg-preview.png" },
  { name: "Lafarge", src: "/images/references/lafararge-logo-removebg-preview.png" },
  { name: "Marsa Maroc", src: "/images/references/marsamaroc-logo-removebg-preview.png" },
  { name: "Appollo", src: "/images/references/oppollo-logo-removebg-preview.png" },
  { name: "Petrome", src: "/images/references/petrome-logo-removebg-preview.png" },
  { name: "Petromin", src: "/images/references/Petromin-logo-removebg-preview.png" },
  { name: "Petsa", src: "/images/references/petsa-logo-removebg-preview.png" },
  { name: "Safran", src: "/images/references/safran-logo-removebg-preview.png" },
  { name: "Winxo", src: "/images/references/winxo-logo-removebg-preview.png" },
  { name: "Ziz", src: "/images/references/ziz-logo-removebg-preview.png" },
];

const References = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="references"
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <EnergyLines lineCount={12} baseHue={30} hueRange={70} opacity={0.08} />
      <div className="absolute inset-0 opacity-[0.025]" />
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-mft-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-mft-green/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
            {t.references.label}
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
            {t.references.title}
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            {t.references.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {references.map((reference, index) => (
            <motion.div
              key={reference.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md min-h-[130px] sm:min-h-[150px] flex items-center justify-center p-6 sm:p-8 hover:border-white/[0.14] hover:bg-white/[0.06] transition-all duration-300"
            >
              <img
                src={reference.src}
                alt={reference.name}
                className="max-h-20 sm:max-h-24 w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

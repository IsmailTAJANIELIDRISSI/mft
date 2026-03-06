import { motion } from "framer-motion";
import EnergyLines from "../ui/EnergyLines";

const references = [
  { name: "Afriquia", src: "/images/references/afriquia-logo.jpg" },
  { name: "Atlas Sahara", src: "/images/references/atlassahara-logo.jpg" },
  { name: "Eurogate", src: "/images/references/eurogate-logo.png" },
  { name: "Green Oil", src: "/images/references/greenoil-logo.jpg" },
  { name: "INOV", src: "/images/references/inov-logo.png" },
  { name: "Lafarge", src: "/images/references/lafararge-logo.png" },
  { name: "Marsa Maroc", src: "/images/references/marsamaroc-logo.png" },
  { name: "Appollo", src: "/images/references/oppollo-logo.png" },
  { name: "Petrome", src: "/images/references/petrome-logo.png" },
  { name: "Petromin", src: "/images/references/Petromin-logo.png" },
  { name: "Petsa", src: "/images/references/petsa-logo.png" },
  { name: "Safran", src: "/images/references/safran-logo.png" },
  { name: "Winxo", src: "/images/references/winxo-logo.png" },
  { name: "Ziz", src: "/images/references/ziz-logo.jpg" },
];

const References = () => {
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
            RÉFÉRENCES
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Ils nous font confiance
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Une sélection de partenaires et de clients avec lesquels nous avons
            collaboré sur des projets industriels, pétroliers et techniques.
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
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-4 sm:p-5 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="rounded-2xl bg-[#f5f6f7] min-h-[130px] sm:min-h-[150px] flex items-center justify-center p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <img
                  src={reference.src}
                  alt={reference.name}
                  className="max-h-16 sm:max-h-20 w-full object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

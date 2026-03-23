import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const references = [
  { name: "Petromin", src: "/images/references/Petromin-logo-removebg-preview.png" },
  { name: "Afriquia", src: "/images/references/afriquia-logo-removebg-preview.png" },
  { name: "Winxo", src: "/images/references/winxo-logo-removebg-preview.png" },
  { name: "INOV", src: "/images/references/inov-logo-removebg-preview.png" },
  { name: "Ziz", src: "/images/references/ziz-logo-removebg-preview.png" },
  { name: "Atlas Sahara", src: "/images/references/atlassahara-logo-removebg-preview.png" },
  { name: "Eurogate", src: "/images/references/eurogate-logo-removebg-preview.png" },
  { name: "Green Oil", src: "/images/references/greenoil-logo-removebg-preview.png" },
  { name: "Lafarge", src: "/images/references/lafararge-logo-removebg-preview.png" },
  { name: "Marsa Maroc", src: "/images/references/marsamaroc-logo-removebg-preview.png" },
  { name: "Appollo", src: "/images/references/oppollo-logo-removebg-preview.png" },
  { name: "Petrome", src: "/images/references/petrome-logo-removebg-preview.png" },
  { name: "Petsa", src: "/images/references/petsa-logo-removebg-preview.png" },
  { name: "Safran", src: "/images/references/safran-logo-removebg-preview.png" },
];

const LOGOS_PER_PAGE = 6;
const COLS = 3;

const References = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(references.length / LOGOS_PER_PAGE);
  const currentRefs = references.slice(
    page * LOGOS_PER_PAGE,
    page * LOGOS_PER_PAGE + LOGOS_PER_PAGE
  );

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

        <div className="flex items-stretch gap-3 lg:gap-6">
          {/* Left arrow - between row 1 & 2 */}
          {totalPages > 1 && (
            <button
              onClick={() => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1))}
              className="cursor-pointer shrink-0 self-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white hover:bg-mft-orange/30 hover:border-mft-orange/50 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Grid 3x2 */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-3 gap-5">
              <AnimatePresence mode="wait">
                {currentRefs.map((reference, index) => (
                  <motion.div
                    key={`${reference.name}-${page}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
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
              </AnimatePresence>
            </div>
          </div>

          {/* Right arrow - between row 1 & 2 */}
          {totalPages > 1 && (
            <button
              onClick={() => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1))}
              className="cursor-pointer shrink-0 self-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white hover:bg-mft-orange/30 hover:border-mft-orange/50 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {totalPages > 1 && (
          <p className="text-white/40 text-center text-sm mt-6">
            {page + 1} / {totalPages}
          </p>
        )}
      </div>
    </section>
  );
};

export default References;

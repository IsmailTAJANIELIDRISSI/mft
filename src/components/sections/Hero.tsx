import { useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "../../assets/image/image.png";
import heroMobileBackground from "../../assets/image/hero-background-mobile.png";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const handleBgLoad = () => setBgLoaded(true);
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden bg-mft-dark">
      <div className="absolute inset-0 z-0 bg-mft-dark">
        <div
          className="absolute top-0 left-0 w-full md:w-1/2 h-full opacity-[0.03] z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {!bgLoaded && (
          <div className="absolute inset-0 z-10 bg-mft-dark overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
          </div>
        )}

        <img
          src={heroMobileBackground}
          alt=""
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 md:hidden"
          onLoad={handleBgLoad}
          onError={handleBgLoad}
        />
        <img
          src={heroBackground}
          alt=""
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 hidden md:block"
          onLoad={handleBgLoad}
          onError={handleBgLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mft-dark via-mft-dark/90 lg:via-mft-dark/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-mft-dark to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col h-full justify-between">
        <div className={`max-w-4xl mt-8 md:mt-20 ${isRTL ? "text-right mr-auto" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.span
              className="w-3 h-3 rounded-full bg-mft-orange"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold leading-none">
              {t.hero.badge}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
            >
              {t.hero.title[0]}
              <br />
              {t.hero.title[1]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mft-orange to-mft-orange-light">
                {t.hero.title[2]}
              </span>{" "}
              {t.hero.suffix}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="group relative px-8 py-4 rounded-xl bg-mft-orange text-white font-bold text-center transition-all hover:shadow-[0_20px_40px_-12px_rgba(232,119,34,0.4)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <span className="relative z-10">{t.hero.primary}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-center transition-all hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5"
            >
              {t.hero.secondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-20 w-full"
        >
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                ...t.hero.stats,
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.15, duration: 0.5, ease }}
                  className={`flex flex-col items-center ${isRTL ? "md:items-end md:text-right" : "md:items-start md:text-left"} text-center px-4 pt-4 md:pt-0 first:pt-0`}
                >
                  <span className="text-4xl lg:text-5xl font-heading font-extrabold text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-mft-orange uppercase tracking-wider font-bold">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

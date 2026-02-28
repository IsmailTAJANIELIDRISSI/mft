import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../../assets/image/hero-background.png';
import heroMobileBackground from '../../assets/image/hero-background-mobile.png';

const Hero = () => {
  const titleWords = ["VOTRE", "PARTENAIRE", "DE", "CONFIANCE", "EN", "ÉQUIPEMENTS", "PÉTROLIERS."];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-mft-dark">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-mft-dark">
        {/* Dot pattern */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <img 
          src={heroMobileBackground} 
          alt="Fuel Station Background Mobile" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 md:hidden"
        />
        <img 
          src={heroBackground} 
          alt="Fuel Station Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 hidden md:block"
        />
        {/* Dark gradient overlay for text readability: solid dark on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-mft-dark via-mft-dark/90 lg:via-mft-dark/60 to-transparent"></div>
        {/* Bottom fade for smoother transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mft-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col h-full justify-between">
        
        <div className="max-w-4xl mt-12 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-3 h-3 rounded-full bg-mft-orange animate-pulse"></span>
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold leading-none">Solutions Industrielles Pétrolières</span>
          </motion.div>

          <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl text-white leading-[1.1] md:leading-tight lg:leading-[1.1] tracking-tight mb-4 max-w-[90%]"
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={item} className="inline-block mr-2 lg:mr-3 mb-0">
                {word} 
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-sans font-light leading-relaxed"
          >
            De l'étude technique à la mise en service, MFT vous accompagne à chaque étape de vos projets de stations-service et d'industrie pétrolière.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#services" className="px-8 py-4 rounded-full bg-mft-orange text-white font-bold text-center transition-all hover:bg-mft-orange-light hover:scale-105 active:scale-95 shadow-xl shadow-mft-orange/20 relative overflow-hidden group">
              <span className="relative z-10">Découvrir nos services →</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-center transition-all hover:bg-white/10 hover:border-white">
              Nous contacter
            </a>
          </motion.div>
        </div>

        {/* Bottom Stats block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 w-full px-0 md:px-0"
        >
          <div className="bg-black/20 backdrop-blur-[6px] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
                <span className="text-4xl lg:text-5xl font-heading font-extrabold text-white mb-2">15+</span>
                <span className="text-sm text-mft-orange uppercase tracking-wider font-bold">Années d'expérience</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 pt-4 md:pt-0">
                <span className="text-4xl lg:text-5xl font-heading font-extrabold text-white mb-2">200+</span>
                <span className="text-sm text-mft-orange uppercase tracking-wider font-bold">Installations réalisées</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 pt-4 md:pt-0">
                <span className="text-4xl lg:text-5xl font-heading font-extrabold text-white mb-2">3</span>
                <span className="text-sm text-mft-orange uppercase tracking-wider font-bold">Marques certifiées</span>
              </div>
              
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;

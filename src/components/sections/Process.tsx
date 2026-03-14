import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award, Users, Shield, Scale, Zap } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const steps = [
  { num: 1, icon: <Award size={24} />, color: "orange" as const },
  { num: 2, icon: <Users size={24} />, color: "green" as const },
  { num: 3, icon: <Shield size={24} />, color: "orange" as const },
  { num: 4, icon: <Scale size={24} />, color: "green" as const },
  { num: 5, icon: <Zap size={24} />, color: "orange" as const },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();
  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track mouse position for 3D perspective tilt on cards
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <section className="py-24 lg:py-32 bg-transparent overflow-hidden relative">
      <EnergyLines lineCount={20} baseHue={25} hueRange={80} opacity={0.12} />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mft-orange/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[520px] h-[520px] bg-mft-green/6 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating 3D decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${40 + i * 18}px`,
              height: `${40 + i * 18}px`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(232,119,34,0.15), transparent 70%)"
                  : "radial-gradient(circle, rgba(124,181,24,0.12), transparent 70%)",
              filter: "blur(6px)",
            }}
            animate={{
              x: [
                `${15 + i * 12}%`,
                `${30 + i * 8}%`,
                `${10 + i * 14}%`,
                `${15 + i * 12}%`,
              ],
              y: [
                `${8 + i * 14}%`,
                `${22 + i * 10}%`,
                `${35 + i * 6}%`,
                `${8 + i * 14}%`,
              ],
              scale: [1, 1.3, 1.1, 1],
            }}
            transition={{
              duration: 18 + i * 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block"
          >
            {t.process.label}
          </motion.span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5">
            <span className="relative inline-block">
              <span className="absolute -inset-2 rounded-xl bg-mft-orange/15 blur-md" />
              <span className="relative">{t.process.title}</span>
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            {t.process.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Vertical Animated Line with electric glow */}
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-mft-orange via-mft-orange-light to-mft-green"
            />
            {/* Electric glow overlay on the line */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-[-3px] right-[-3px] h-full"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-mft-orange/40 via-mft-orange-light/30 to-mft-green/40 blur-[4px]" />
            </motion.div>
          </div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              const isActive = activeStep === step.num;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for desktop layout balance */}
                  <div className="hidden md:block flex-1" />

                  {/* Icon Node — pulsing glow when active */}
                  <div className="relative z-10 flex shrink-0 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveStep(isActive ? null : step.num)}
                      className={`w-20 h-20 rounded-2xl bg-[#111] border cursor-pointer flex items-center justify-center relative ${
                        step.color === "orange"
                          ? "text-mft-orange"
                          : "text-mft-green"
                      } ${isActive ? "border-white/30" : "border-white/10"}`}
                      animate={{
                        boxShadow: isActive
                          ? step.color === "orange"
                            ? [
                                "0 0 20px rgba(232,119,34,0.3), 0 0 60px rgba(232,119,34,0.1)",
                                "0 0 40px rgba(232,119,34,0.6), 0 0 80px rgba(232,119,34,0.25)",
                                "0 0 20px rgba(232,119,34,0.3), 0 0 60px rgba(232,119,34,0.1)",
                              ]
                            : [
                                "0 0 20px rgba(124,181,24,0.3), 0 0 60px rgba(124,181,24,0.1)",
                                "0 0 40px rgba(124,181,24,0.6), 0 0 80px rgba(124,181,24,0.25)",
                                "0 0 20px rgba(124,181,24,0.3), 0 0 60px rgba(124,181,24,0.1)",
                              ]
                          : step.color === "orange"
                            ? "0 0 25px rgba(232,119,34,0.15), 0 0 50px rgba(232,119,34,0.05)"
                            : "0 0 25px rgba(124,181,24,0.15), 0 0 50px rgba(124,181,24,0.05)",
                      }}
                      transition={{
                        repeat: isActive ? Infinity : 0,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      style={{
                        animation: `glow-pulse 3s ease-in-out ${i * 0.5}s infinite`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl ${
                          step.color === "orange"
                            ? "bg-mft-orange/10"
                            : "bg-mft-green/10"
                        }`}
                      />
                      <motion.div
                        className="relative z-10"
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Step Number Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + i * 0.1,
                          type: "spring",
                          stiffness: 300,
                        }}
                        className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg text-white font-bold flex items-center justify-center text-sm shadow-lg ${
                          step.color === "orange"
                            ? "bg-mft-orange"
                            : "bg-mft-green"
                        }`}
                      >
                        {step.num}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Card — 3D tilt + expandable detail + progress bar */}
                  <div className="flex-1 w-full">
                    <GlowCard
                      glowColor={step.color}
                      className={`backdrop-blur-md ${
                        isEven ? "md:text-right" : "md:text-left"
                      } text-left`}
                    >
                      <motion.div
                        className="p-8 relative"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: `perspective(800px) rotateY(${
                            mousePos.x * (isEven ? -2.5 : 2.5)
                          }deg) rotateX(${mousePos.y * -2.5}deg)`,
                        }}
                        onMouseEnter={() => setActiveStep(step.num)}
                        onMouseLeave={() => setActiveStep(null)}
                        whileHover={{ y: -4, transition: { duration: 0.25 } }}
                      >
                        {/* Pulsing dot indicator */}
                        <div
                          className={`absolute top-6 ${
                            isEven ? "md:left-6 right-6" : "right-6"
                          }`}
                        >
                          <motion.div
                            className={`w-2.5 h-2.5 rounded-full ${
                              step.color === "orange"
                                ? "bg-mft-orange"
                                : "bg-mft-green"
                            }`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              repeatType: "reverse",
                            }}
                          />
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-white mb-3">
                          {t.process.steps[i].title}
                        </h3>
                        <p className="text-white/50 text-[15px] leading-relaxed">
                          {t.process.steps[i].desc}
                        </p>

                        {/* Expandable detail on hover/click */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/40 text-sm leading-relaxed mt-3 pt-3 border-t border-white/[0.06]">
                            {t.process.steps[i].detail}
                          </p>
                        </motion.div>
                      </motion.div>

                      {/* Animated bottom progress bar */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-[2px] rounded-full ${
                          step.color === "orange"
                            ? "bg-mft-orange"
                            : "bg-mft-green"
                        }`}
                        initial={false}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </GlowCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

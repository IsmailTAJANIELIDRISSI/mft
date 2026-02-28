import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Process = () => {
  const steps = [
    {
      num: 1,
      title: "Prise de contact",
      desc: "Définition des besoins initiaux.",
    },
    {
      num: 2,
      title: "Étude technique",
      desc: "Analyse et dimensionnement précis.",
    },
    {
      num: 3,
      title: "Installation",
      desc: "Pose et mise en service sur site.",
    },
    {
      num: 4,
      title: "Suivi & Maintenance",
      desc: "Assistance et contrat de service.",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
            HOW IT WORKS
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-mft-dark mb-6">
            Processus de réalisation
          </h2>
          <p className="text-mft-grey text-lg">
            De la conception à la maintenance, découvrez notre méthodologie
            d'intervention éprouvée.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-mft-orange"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: i * 0.3 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-4 border-white shadow-[0_0_0_2px_#E87722] flex items-center justify-center font-heading font-bold text-mft-orange text-xl mb-6 relative z-10 group-hover:bg-mft-orange group-hover:text-white transition-colors duration-300">
                  {step.num}
                  {/* Outer pulse ping effect on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-mft-orange opacity-0 group-hover:animate-ping z-[-1]"></div>
                </div>

                <h3 className="font-heading font-bold text-xl text-mft-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-mft-grey text-sm px-4">{step.desc}</p>

                {/* Mobile Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-8 h-8 w-[2px] bg-gradient-to-b from-mft-orange to-transparent opacity-50"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

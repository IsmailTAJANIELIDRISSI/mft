import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Leaf, ShieldCheck } from "lucide-react";
import aboutBackground from "../../assets/image/about-background.png";
import LazyImage from "../ui/LazyImage";
import { useRef } from "react";

const features = [
  {
    icon: <Wrench size={22} />,
    title: "Expertise Technique",
    desc: "Équipes certifiées et expérimentées pour garantir la fiabilité de vos installations.",
    accent: "mft-orange",
  },
  {
    icon: <Leaf size={22} />,
    title: "Engagement Environnemental",
    desc: "Solutions conformes aux normes environnementales les plus strictes.",
    accent: "mft-green",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Équipements Certifiés",
    desc: "Équipements de référence mondiale, fiables et performants.",
    accent: "mft-orange",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-[#0d0d0d] overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-mft-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-6 inline-block">
              À PROPOS
            </span>

            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl tracking-tight text-white mb-6 leading-tight">
              Maghreb Fueling{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mft-orange to-mft-orange-light">
                Technologies
              </span>
            </h2>

            <div className="space-y-4 text-white/60 mb-10 text-[15px] leading-relaxed">
              <p>
                Maghreb Fueling Technologie est une entreprise spécialisée dans
                les solutions techniques et les services pour les installations
                carburant, les infrastructures industrielles et énergétiques.
              </p>
              <p>
                Grâce à une équipe d'experts techniques et à une expérience
                solide dans le domaine, nous proposons des solutions fiables,
                innovantes et adaptées aux besoins spécifiques de chaque site,
                en respectant les normes industrielles et environnementales.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`group flex gap-4 items-start p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${i % 2 === 0 ? "text-mft-orange" : "text-mft-green"}`}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute top-8 -right-8 w-[105%] h-[105%] border border-white/[0.05] rounded-[2rem] -z-10 rotate-2" />

            <motion.div
              style={{ y: imageY }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/10"
            >
              <LazyImage
                src={aboutBackground}
                alt="MFT en action"
                wrapperClassName="w-full h-[560px]"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-[#0d0d0d]/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="absolute -left-6 md:-left-10 bottom-10 bg-white/[0.05] backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 z-30"
            >
              <div className="font-heading font-extrabold text-4xl text-white mb-1">
                100%
              </div>
              <div className="text-[10px] font-bold text-mft-orange uppercase tracking-widest">
                Solutions sur mesure
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

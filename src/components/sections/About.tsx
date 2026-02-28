import { motion } from "framer-motion";
import { Wrench, Leaf, ShieldCheck } from "lucide-react";
import aboutBackground from "../../assets/image/about-background.png";
import LazyImage from "../ui/LazyImage";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block mb-6 relative">
              <span className="text-mft-orange uppercase tracking-widest text-xs font-bold bg-mft-orange/10 px-4 py-2 rounded-full">
                À PROPOS
              </span>
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-mft-dark mb-6 leading-tight">
              Maghreb Fueling <br />
              <span className="text-mft-orange">Technologies</span>
            </h2>

            <div className="prose prose-lg text-mft-grey-dark mb-10 max-w-none">
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

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-mft-bg border border-gray-100 hover:border-mft-orange/30 hover:shadow-lg hover:shadow-mft-orange/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-mft-orange">
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-mft-dark mb-1">
                    Expertise Technique
                  </h4>
                  <p className="text-sm text-mft-grey">
                    Équipes certifiées et expérimentées pour garantir la
                    fiabilité de vos installations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-mft-bg border border-gray-100 hover:border-mft-green/30 hover:shadow-lg hover:shadow-mft-green/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-mft-green">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-mft-dark mb-1">
                    Engagement Environnemental
                  </h4>
                  <p className="text-sm text-mft-grey">
                    Solutions conformes aux normes environnementales les plus
                    strictes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-mft-bg border border-gray-100 hover:border-mft-orange/30 hover:shadow-lg hover:shadow-mft-orange/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-mft-orange">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Équipements certifiés
                  </h4>
                  <p className="text-sm text-mft-grey">
                    Équipements de référence mondiale, fiables et performants.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Abstract background shape */}
            <div className="absolute top-10 -right-10 w-[110%] h-[110%] bg-mft-bg rounded-[3rem] -z-10 rotate-3 transform origin-bottom-right"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-mft-dark/10 group">
              <LazyImage
                src={aboutBackground}
                alt="MFT Technicians at work"
                wrapperClassName="w-full h-[600px]"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-8 border-white rounded-2xl z-10 pointer-events-none"></div>

              {/* Orange corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mft-orange rounded-bl-full opacity-90 z-20 pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -left-8 md:-left-12 bottom-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] z-30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="font-heading font-extrabold text-4xl text-mft-dark mb-1">
                100%
              </div>
              <div className="text-sm font-bold text-mft-orange leading-tight uppercase">
                Solutions sur mesure
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

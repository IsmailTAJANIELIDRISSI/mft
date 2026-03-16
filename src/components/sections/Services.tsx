import { useState } from "react";
import { motion } from "framer-motion";
import EnergyLines from "../ui/EnergyLines";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

const servicesSet = [
  {
    category: "Installation",
    title: "Installation & Mise en service",
    desc: "Réalisation complète des projets, de la préparation à la mise en service finale.",
    image: "/images/nosservices/instalation-mise-en-service.jpeg",
    num: "01",
    color: "#E87722",
  },
  {
    category: "Ingénierie",
    title: "Études Techniques & Ingénierie",
    desc: "Études de faisabilité, dimensionnement, conformité et assistance réglementaire.",
    image: "/images/nosservices/etude-technique-ingenierie.jpeg",
    num: "02",
    color: "#7CB518",
  },
  {
    category: "Maintenance",
    title: "Maintenance & Dépannage",
    desc: "Maintenance préventive programmée et interventions de dépannage rapide.",
    image: "/images/nosservices/maintence-depannage.jpeg",
    num: "03",
    color: "#E87722",
  },
  {
    category: "Rénovation",
    title: "Rénovation & Mise à niveau",
    desc: "Modernisation des installations pour répondre aux normes actuelles.",
    image: "/images/activities/stations-service/img-02.jpeg",
    num: "04",
    color: "#7CB518",
  },
  {
    category: "Formation",
    title: "Formation",
    desc: "Programmes de formation technique spécialisés pour opérateurs, techniciens et responsables d'installations pétrolières.",
    image: "/images/formation.jpeg",
    num: "05",
    color: "#E87722",
  },
  {
    category: "Équipements",
    title: "Fourniture d'Équipements",
    desc: "Distributeurs, pompes, systèmes de jaugeage, et équipements de sécurité.",
    image: "/images/activities/aeronautique-installations/img-01.jpeg",
    num: "06",
    color: "#7CB518",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <EnergyLines lineCount={20} baseHue={25} hueRange={80} opacity={0.12} />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#E87722 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-mft-orange/15 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-mft-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block"
            >
              {t.services.label}
            </motion.span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {t.services.titleBefore}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E87722, #F4A543)",
                  WebkitBackgroundClip: "text",
                }}
              >
                {t.services.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              {t.services.description}
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesSet.map((service, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer"
              >
                {/* Aspect ratio — compact so both rows fit in viewport */}
                <div
                  className="pb-[75%] sm:pb-[65%] lg:pb-[58%]"
                  style={{ width: "100%" }}
                />

                {/* Background image with CSS filter transitions */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: isHovered
                      ? "brightness(0.84) saturate(1.22) contrast(0.92)"
                      : "brightness(0.72) saturate(1.1) contrast(0.88)",
                    transform: "scale(1) translateZ(0)",
                    transition: "filter 220ms linear",
                    transformOrigin: "center",
                  }}
                />

                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.92) 100%)",
                  }}
                />

                {/* Premium glass hover layer without heavy shadow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.00) 45%, rgba(124,181,24,0.10) 100%)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 220ms ease",
                  }}
                />

                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl pointer-events-none"
                  style={{
                    background:
                      service.color === "#7CB518"
                        ? "linear-gradient(to right, #7CB518, #E87722, #7A7A7A)"
                        : "linear-gradient(to right, #E87722, #7CB518, #7A7A7A)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 220ms linear",
                  }}
                />

                {/* Clean border highlight on hover */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: isHovered
                      ? `1px solid ${service.color}80`
                      : "1px solid rgba(255,255,255,0.08)",
                    transition: "border-color 220ms ease",
                  }}
                />

                {/* Card content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                    style={{ color: service.color }}
                  >
                    {t.services.items[i].category}
                  </p>
                  <h3
                    className="text-white font-heading font-bold text-xl leading-snug mb-3"
                    style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
                  >
                    {t.services.items[i].title}
                  </h3>

                  {/* Description + CTA slides in on hover */}
                  <div
                    style={{
                      maxHeight: isHovered ? "100px" : "0px",
                      opacity: isHovered ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 320ms ease, opacity 260ms ease",
                    }}
                  >
                    <p className="text-white/65 text-sm leading-relaxed mb-4">
                      {t.services.items[i].desc}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: service.color }}
                    >
                      {t.services.more}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Number badge top-right */}
                <div
                  className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: `1px solid ${service.color}55`,
                    backdropFilter: "blur(6px)",
                    color: service.color,
                  }}
                >
                  {service.num}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

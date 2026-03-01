import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  PenTool,
  Wrench,
  RefreshCw,
  FileText,
  Package,
  ArrowUpRight,
} from "lucide-react";
import EnergyLines from "../ui/EnergyLines";

const servicesSet = [
  {
    icon: <Settings size={24} />,
    title: "Installation & Mise en service",
    desc: "Réalisation complète des projets, de la préparation à la mise en service finale.",
    num: "01",
    color: "orange" as const,
  },
  {
    icon: <PenTool size={24} />,
    title: "Études Techniques & Ingénierie",
    desc: "Études de faisabilité, dimensionnement, conformité et assistance réglementaire.",
    num: "02",
    color: "green" as const,
  },
  {
    icon: <Wrench size={24} />,
    title: "Maintenance & Dépannage",
    desc: "Maintenance préventive programmée et interventions de dépannage rapide.",
    num: "03",
    color: "orange" as const,
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Rénovation & Mise à niveau",
    desc: "Modernisation des installations pour répondre aux normes actuelles.",
    num: "04",
    color: "green" as const,
  },
  {
    icon: <FileText size={24} />,
    title: "Contrats de Maintenance",
    desc: "Suivi régulier, interventions prioritaires et maîtrise de vos coûts d'exploitation.",
    num: "05",
    color: "orange" as const,
  },
  {
    icon: <Package size={24} />,
    title: "Fourniture d'Équipements",
    desc: "Distributeurs, pompes, systèmes de jaugeage, et équipements de sécurité.",
    num: "06",
    color: "green" as const,
  },
];

/** Individual service card with per-instance hover state and electric border */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof servicesSet)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const filterId = useMemo(() => `ec-svc-${service.num}`, [service.num]);

  const hex = service.color === "orange" ? "#E87722" : "#7CB518";
  const rgb = service.color === "orange" ? "232,119,34" : "124,181,24";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        type: "spring",
        stiffness: 110,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "flex" }}
    >
      {/* ── SVG filter unique to this card ── */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025"
              numOctaves="10"
              result="n1"
              seed="1"
            />
            <feOffset in="n1" dx="0" dy="0" result="on1">
              <animate
                attributeName="dy"
                values="700;0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025"
              numOctaves="10"
              result="n2"
              seed="1"
            />
            <feOffset in="n2" dx="0" dy="0" result="on2">
              <animate
                attributeName="dy"
                values="0;-700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025"
              numOctaves="10"
              result="n3"
              seed="2"
            />
            <feOffset in="n3" dx="0" dy="0" result="on3">
              <animate
                attributeName="dx"
                values="490;0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025"
              numOctaves="10"
              result="n4"
              seed="2"
            />
            <feOffset in="n4" dx="0" dy="0" result="on4">
              <animate
                attributeName="dx"
                values="0;-490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite in="on1" in2="on2" result="p1" />
            <feComposite in="on3" in2="on4" result="p2" />
            <feBlend in="p1" in2="p2" mode="color-dodge" result="noise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Card shell with 2-px padding for the border layer ── */}
      <div
        style={{
          padding: "2px",
          borderRadius: "1.25rem",
          position: "relative",
          width: "100%",
          background: `linear-gradient(-30deg, rgba(${rgb},${hovered ? 0.25 : 0.08}), transparent, rgba(${rgb},${hovered ? 0.18 : 0.06})), #111`,
          transition: "background 0.5s ease",
        }}
      >
        {/* Electric displaced border — always animating, fades in on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            border: `2px solid ${hex}`,
            filter: `url(#${filterId})`,
            opacity: hovered ? 1 : 0.25,
            transition: "opacity 0.45s ease",
            pointerEvents: "none",
          }}
        />

        {/* Soft glow halo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            border: `2px solid rgba(${rgb}, 0.55)`,
            filter: "blur(4px)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease",
            pointerEvents: "none",
          }}
        />

        {/* Background outer glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            filter: "blur(28px)",
            transform: "scale(1.06)",
            background: `linear-gradient(-30deg, rgba(${rgb},0.3), transparent, rgba(${rgb},0.2))`,
            opacity: hovered ? 0.55 : 0,
            transition: "opacity 0.45s ease",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        {/* ── Card inner content ── */}
        <div
          style={{
            background: "#0D0D0D",
            borderRadius: "1.1rem",
            padding: "2rem",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: "260px",
            overflow: "hidden",
          }}
        >
          {/* Large watermark number */}
          <span
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "1.25rem",
              fontSize: "5rem",
              fontWeight: 900,
              lineHeight: 1,
              color: `rgba(${rgb}, ${hovered ? 0.1 : 0.04})`,
              fontFamily: "var(--font-heading)",
              transition: "color 0.45s ease",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {service.num}
          </span>

          {/* Glass badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3rem",
              height: "3rem",
              borderRadius: "0.875rem",
              border: `1px solid rgba(${rgb}, ${hovered ? 0.4 : 0.2})`,
              background: `rgba(${rgb}, ${hovered ? 0.12 : 0.06})`,
              color: hex,
              marginBottom: "1.5rem",
              transition: "all 0.4s ease",
              position: "relative",
              zIndex: 1,
            }}
          >
            {service.icon}
          </div>

          <h3
            className="font-heading font-bold text-white mb-3 leading-snug"
            style={{ fontSize: "1.1rem", position: "relative", zIndex: 1 }}
          >
            {service.title}
          </h3>

          <p
            className="text-sm leading-relaxed"
            style={{
              color: hovered
                ? "rgba(255,255,255,0.65)"
                : "rgba(255,255,255,0.4)",
              transition: "color 0.4s ease",
              position: "relative",
              zIndex: 1,
              flex: 1,
              marginBottom: "1.5rem",
            }}
          >
            {service.desc}
          </p>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-auto"
            style={{
              color: hovered ? hex : "rgba(255,255,255,0.35)",
              transition: "color 0.35s ease",
              position: "relative",
              zIndex: 1,
            }}
          >
            En savoir plus
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Bottom progress bar — fills on hover */}
          <motion.div
            initial={false}
            animate={{ width: hovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              background: `linear-gradient(to right, ${hex}, rgba(${rgb},0.3))`,
              borderBottomLeftRadius: "1.1rem",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden"
    >
      <EnergyLines lineCount={15} baseHue={30} hueRange={60} opacity={0.1} />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mft-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mft-green/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
              NOS SERVICES
            </motion.span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Solutions complètes pour
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E87722, #F4A543)",
                  WebkitBackgroundClip: "text",
                }}
              >
                l'industrie pétrolière
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              De l'installation à la maintenance, nous couvrons tous vos besoins
              techniques avec rigueur et précision industrielle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesSet.map((service, index) => (
            <ServiceCard key={service.num} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

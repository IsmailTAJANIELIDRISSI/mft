import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  /** Which brand colour the glow uses. */
  glowColor?: "orange" | "green";
}

/**
 * A glassmorphic card with a mouse-tracking electric glow border.
 * Inspired by the "Electric Border" CodePen, simplified into a
 * reusable React/Tailwind component using brand colours.
 */
const GlowCard = ({
  children,
  className = "",
  glowColor = "orange",
}: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cardSize, setCardSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!cardRef.current) return;
    const update = () => {
      const el = cardRef.current;
      if (el) setCardSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const color =
    glowColor === "orange"
      ? { rgb: "232,119,34", hex: "#E87722" }
      : { rgb: "124,181,24", hex: "#7CB518" };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl ${className}`}
      style={{
        background: `linear-gradient(
          135deg,
          rgba(${color.rgb}, ${isHovered ? 0.08 : 0.03}) 0%,
          rgba(255,255,255,0.02) 50%,
          rgba(${color.rgb}, ${isHovered ? 0.06 : 0.02}) 100%
        )`,
      }}
    >
      {/* Animated border glow that follows the mouse */}
      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            400px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(${color.rgb}, 0.25),
            transparent 50%
          )`,
        }}
      />

      {/* Animated border — electric effect */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          padding: "1.5px",
          background: `radial-gradient(
            350px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(${color.rgb}, 0.9),
            rgba(${color.rgb}, 0.2) 35%,
            transparent 65%
          )`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Static subtle border */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none" />

      {/* Background glow bloom */}
      {isHovered && (
        <div
          className="absolute w-[140%] h-[140%] rounded-full pointer-events-none"
          style={{
            left: mousePos.x - cardSize.w * 0.7,
            top: mousePos.y - cardSize.h * 0.7,
            background: `radial-gradient(circle, rgba(${color.rgb}, 0.12), transparent 55%)`,
            filter: "blur(50px)",
            zIndex: 0,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;

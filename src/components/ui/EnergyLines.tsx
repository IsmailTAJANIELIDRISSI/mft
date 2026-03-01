import { useEffect, useRef } from "react";

interface EnergyLinesProps {
  /** Number of animated lines */
  lineCount?: number;
  /** Base hue (0-360). Defaults to 25 for MFT orange */
  baseHue?: number;
  /** Hue range to sweep through */
  hueRange?: number;
  /** Opacity of the canvas layer */
  opacity?: number;
  className?: string;
}

interface LineState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  sin: number;
  cos: number;
  x2: number;
  y2: number;
}

function createLine(h: number): LineState {
  const len = 15 + 15 * Math.random();
  let rotSpeed = 0.01 + 0.025 * Math.random();
  if (Math.random() < 0.5) rotSpeed *= -1;
  return {
    x: 0,
    y: h * Math.random(),
    vx: 0.3 + 0.4 * Math.random(),
    vy: -0.5 + 0.3 * Math.random(),
    len,
    sin: Math.sin(rotSpeed),
    cos: Math.cos(rotSpeed),
    x2: -len,
    y2: 0,
  };
}

function resetLine(line: LineState, h: number): void {
  const len = 15 + 15 * Math.random();
  let rotSpeed = 0.01 + 0.025 * Math.random();
  if (Math.random() < 0.5) rotSpeed *= -1;
  line.x = 0;
  line.y = h * Math.random();
  line.vx = 0.3 + 0.4 * Math.random();
  line.vy = -0.5 + 0.3 * Math.random();
  line.len = len;
  line.sin = Math.sin(rotSpeed);
  line.cos = Math.cos(rotSpeed);
  line.x2 = -len;
  line.y2 = 0;
}

function stepLine(
  line: LineState,
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  baseHue: number,
  hueRange: number,
): void {
  line.x += line.vx;
  line.y += line.vy;

  const x2 = line.x2;
  line.x2 = line.x2 * line.cos - line.y2 * line.sin;
  line.y2 = line.y2 * line.cos + x2 * line.sin;

  const hue = baseHue + (line.x / w) * hueRange;
  ctx.strokeStyle = `hsla(${hue},80%,55%,0.25)`;
  ctx.beginPath();
  ctx.moveTo(line.x, line.y);
  ctx.lineTo(line.x + line.x2, line.y + line.y2);
  ctx.stroke();

  if (line.y < -line.len) line.y = h + line.len;
  else if (line.y > h + line.len) line.y = -line.len;
  if (line.x > w + line.len) resetLine(line, h);
}

/**
 * Subtle animated energy lines background.
 * Adapted from the "swirly electric lines" CodePen, recoloured
 * to MFT brand palette (orange → green sweep).
 */
const EnergyLines = ({
  lineCount = 30,
  baseHue = 25,
  hueRange = 80,
  opacity = 0.35,
  className = "",
}: EnergyLinesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const lines: LineState[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, w, h);
      lines.length = 0;
    };

    const update = () => {
      ctx.globalCompositeOperation = "lighter";
      if (lines.length < lineCount && Math.random() < 0.08) {
        lines.push(createLine(h));
      }
      for (const line of lines) {
        stepLine(line, ctx, w, h, baseHue, hueRange);
      }
    };

    const anim = () => {
      animRef.current = requestAnimationFrame(anim);
      // Fade previous frame so lines visibly move instead of saturating
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, w, h);
      update();
    };

    resize();

    // Pre-populate some lines (fewer to avoid saturation)
    for (let i = 0; i < 40; i++) update();

    anim();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [lineCount, baseHue, hueRange]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
    />
  );
};

export default EnergyLines;

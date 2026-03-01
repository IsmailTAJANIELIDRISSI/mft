please in this website related to theme of fuel energy ...
i want to add some animations motion to get the best user experience ever. i will give you each screen of current pages

---

but now try to be soooo so creative and on my theme i will give you some componenets or cards or animations css ... and try to put it on my website cards , ... hovering effects ... "i got them from "dribble ui, codepen animations, 21st.dev" and nb if they are with color that do not match my palette colors match them with my brand color palette

---

Electric Border

<main class="main-container">
  <svg class="svg-container">
    <defs>
      <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
          <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
        </feOffset>

        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
          <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
        </feOffset>

        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
          <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
        </feOffset>

        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
          <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
        </feOffset>

        <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
        <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
        <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

        <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
      </filter>
    </defs>

  </svg>

  <div class="card-container">
    <div class="inner-container">
      <div class="border-outer">
        <div class="main-card"></div>
      </div>
      <div class="glow-layer-1"></div>
      <div class="glow-layer-2"></div>
    </div>

    <div class="overlay-1"></div>
    <div class="overlay-2"></div>
    <div class="background-glow"></div>

    <div class="content-container">
      <div class="content-top">
        <div class="scrollbar-glass">
          Dramatic
        </div>
        <p class="title">Electric Border</p>
      </div>

      <hr class="divider" />

      <div class="content-bottom">
        <p class="description">In case you'd like to emphasize something very dramatically.</p>
      </div>
    </div>

  </div>
</main>

/_ Reset and base styles _/

/_ CSS Variables _/
:root {
--electric-border-color: #dd8448;
--electric-light-color: oklch(from var(--electric-border-color) l c h);
--gradient-color: oklch(
from var(--electric-border-color) 0.3 calc(c / 2) h / 0.4
);
--color-neutral-900: oklch(0.185 0 0);
}

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
font-family: system-ui, -apple-system, sans-serif;
background-color: oklch(0.145 0 0);
color: oklch(0.985 0 0);
height: 100vh;
overflow: hidden;
}

/_ Main container _/
.main-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
}

/_ SVG positioning _/
.svg-container {
position: absolute;
}

/_ Card container _/
.card-container {
padding: 2px;
border-radius: 24px;
position: relative;
background: linear-gradient(
-30deg,
var(--gradient-color),
transparent,
var(--gradient-color)
),
linear-gradient(
to bottom,
var(--color-neutral-900),
var(--color-neutral-900)
);
}

/_ Inner container _/
.inner-container {
position: relative;
}

/_ Border layers _/
.border-outer {
border: 2px solid rgba(221, 132, 72, 0.5);
border-radius: 24px;
padding-right: 4px;
padding-bottom: 4px;
}

.main-card {
width: 350px;
height: 500px;
border-radius: 24px;
border: 2px solid var(--electric-border-color);
margin-top: -4px;
margin-left: -4px;
filter: url(#turbulent-displace);
}

/_ Glow effects _/
.glow-layer-1 {
border: 2px solid rgba(221, 132, 72, 0.6);
border-radius: 24px;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
filter: blur(1px);
}

.glow-layer-2 {
border: 2px solid var(--electric-light-color);
border-radius: 24px;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
filter: blur(4px);
}

/_ Overlay effects _/
.overlay-1 {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: 24px;
opacity: 1;
mix-blend-mode: overlay;
transform: scale(1.1);
filter: blur(16px);
background: linear-gradient(
-30deg,
white,
transparent 30%,
transparent 70%,
white
);
}

.overlay-2 {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: 24px;
opacity: 0.5;
mix-blend-mode: overlay;
transform: scale(1.1);
filter: blur(16px);
background: linear-gradient(
-30deg,
white,
transparent 30%,
transparent 70%,
white
);
}

/_ Background glow _/
.background-glow {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: 24px;
filter: blur(32px);
transform: scale(1.1);
opacity: 0.3;
z-index: -1;
background: linear-gradient(
-30deg,
var(--electric-light-color),
transparent,
var(--electric-border-color)
);
}

/_ Content container _/
.content-container {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
}

/_ Content sections _/
.content-top {
display: flex;
flex-direction: column;
padding: 48px;
padding-bottom: 16px;
height: 100%;
}

.content-bottom {
display: flex;
flex-direction: column;
padding: 48px;
padding-top: 16px;
}

/_ Scrollbar glass component _/
.scrollbar-glass {
background: radial-gradient(
47.2% 50% at 50.39% 88.37%,
rgba(255, 255, 255, 0.12) 0%,
rgba(255, 255, 255, 0) 100%
),
rgba(255, 255, 255, 0.04);
position: relative;
transition: background 0.3s ease;
border-radius: 14px;
width: fit-content;
height: fit-content;
padding: 8px 16px;
text-transform: uppercase;
font-weight: bold;
font-size: 14px;
color: rgba(255, 255, 255, 0.8);
}

.scrollbar-glass:hover {
background: radial-gradient(
47.2% 50% at 50.39% 88.37%,
rgba(255, 255, 255, 0.12) 0%,
rgba(255, 255, 255, 0) 100%
),
rgba(255, 255, 255, 0.08);
}

.scrollbar-glass::before {
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
padding: 1px;
background: linear-gradient(
150deg,
rgba(255, 255, 255, 0.48) 16.73%,
rgba(255, 255, 255, 0.08) 30.2%,
rgba(255, 255, 255, 0.08) 68.2%,
rgba(255, 255, 255, 0.6) 81.89%
);
border-radius: inherit;
mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
mask-composite: xor;
-webkit-mask-composite: xor;
pointer-events: none;
}

/_ Typography _/
.title {
font-size: 36px;
font-weight: 500;
margin-top: auto;
}

.description {
opacity: 0.5;
}

/_ Divider _/
.divider {
margin-top: auto;
border: none;
height: 1px;
background-color: currentColor;
opacity: 0.1;
mask-image: linear-gradient(to right, transparent, black, transparent);
-webkit-mask-image: linear-gradient(
to right,
transparent,
black,
transparent
);
}

---

swirly electric rainbow lines
<canvas id=c></canvas>
canvas {
position: absolute;
top: 0;
left: 0;
}
var w = c.width = window.innerWidth,
h = c.height = window.innerHeight,
ctx = c.getContext( '2d' ),
opts = {
lines: 50,
splitDistX: 10,
templateColor: 'hsla(hue,80%,50%,.1)',
baseVelX: .5,
addedVelX: .5,
baseVelY: -.8,
addedVelY: .4,
baseRotSpeed: .015,
addedRotSpeed: .035,
baseLen: 20,
addedLen: 20,
baseLenDecrement: .1,
addedLenDecrement: .2
},
lines = [];

function Line(){
this.reset();
}
Line.prototype.reset = function(){
this.x = 0;
this.y = h _ Math.random();
this.vx = opts.baseVelX + opts.addedVelX _ Math.random();
this.vy = opts.baseVelY + opts.addedVelY _ Math.random();
this.len = opts.baseLen + opts.addedLen _ Math.random();
var rotSpeed = opts.baseRotSpeed + opts.addedRotSpeed _ Math.random();
if( Math.random() < .5 )
rotSpeed _= -1;
this.sin = Math.sin( rotSpeed );
this.cos = Math.cos( rotSpeed );
this.x2 = -this.len;
this.y2 = 0;
}
Line.prototype.step = function(){
this.x += this.vx;
this.y += this.vy;
var x2 = this.x2;
this.x2 = this.x2 _ this.cos - this.y2 _ this.sin;
this.y2 = this.y2 _ this.cos + x2 _ this.sin;
ctx.strokeStyle = opts.templateColor.replace( 'hue', this.x / w \* 360 );
ctx.beginPath();
ctx.moveTo( this.x, this.y );
ctx.lineTo( this.x + this.x2, this.y + this.y2 );
ctx.stroke();
if( this.y < -this.len )
this.y = h + this.len;
else if( this.y > h + this.len )
this.y = -this.len;
if( this.x > w + this.len )
this.reset();
}
function anim(){
window.requestAnimationFrame( anim );
//ctx.globalCompositeOperation = 'source-over';
//ctx.fillStyle = 'rgba(0,0,0,.04)';
//ctx.fillRect( 0, 0, w, h );
update();
}
function update(){
ctx.globalCompositeOperation = 'lighter';
if( lines.length < opts.lines && Math.random() < .1 )
lines.push( new Line );
lines.map( function( line ){ line.step(); } );
}

ctx.fillRect( 0, 0, w, h );
anim();

for( var i = 0; i < 200; ++i )
update();

window.addEventListener( 'click', function(){
ctx.globalCompositeOperation = 'source-over'; // thanks AmaanC, had completely forgot
ctx.fillRect( 0, 0, w, h );
lines.length = 0;
});
window.addEventListener( 'resize', function(){
w = c.width = window.innerWidth;
h = c.height = window.innerHeight;
ctx.fillRect( 0, 0, w, h );
lines.length = 0;
});

---

Tubes Cursor (WebGL, WebGPU)

<div id="app">
  <canvas id="canvas"></canvas>
  <div class="hero">
    <h1>Tubes</h1>
    <h2>Cursor</h2>
    <a target="_blank" href="https://www.framer.com/@kevin-levron/">Framer Component</a>
  </div>
</div>

body, html, #app {
margin: 0;
width: 100%;
height: 100%;
}

body {
touch-action: none;
}

#app {
height: 100%;
font-family: "Montserrat", serif;
}

#app a {
text-decoration: none;
color: #fff;
}

.hero {
position: relative;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
}

h1, h2, p {
margin: 0;
padding: 0;
color: white;
text-shadow: 0 0 20px rgba(0, 0, 0, 1);
line-height: 100%;
user-select: none;
}

h1 {
font-size: 80px;
font-weight: 700;
text-transform: uppercase;
}

h2 {
font-size: 60px;
font-weight: 500;
text-transform: uppercase;
}

#canvas {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
}

// Licence CC BY-NC-SA 4.0
// Attribution — You must give appropriate credit.
// Non Commercial — You may not use the material for commercial purposes.

import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

const app = TubesCursor(document.getElementById('canvas'), {
tubes: {
colors: ["#f967fb", "#53bc28", "#6958d5"],
lights: {
intensity: 200,
colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
}
}
})

document.body.addEventListener('click', () => {
const colors = randomColors(3)
const lightsColors = randomColors(4)
console.log(colors, lightsColors)
app.tubes.setColors(colors)
app.tubes.setLightsColors(lightsColors)
})

function randomColors (count) {
return new Array(count)
.fill(0)
.map(() => "#" + Math.floor(Math.random() \* 16777215).toString(16).padStart(6, '0'))
}

---

Timeline
You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

```tsx
timeline.tsx;
("use client");
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

demo.tsx;
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
```

Install NPM dependencies:

```bash
framer-motion
```

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's argumens and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?

Steps to integrate 0. Copy paste all the code above in the correct directories

1.  Install external dependencies
2.  Fill image assets with Unsplash stock images you know exist
3.  Use lucide-react icons for svgs or logos if component requires them

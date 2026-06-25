"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Gradient Text
const GText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-200 bg-clip-text text-transparent dark:from-white/90 dark:via-cyan-200 dark:to-teal-200">
    {children}
  </span>
);

// Particles Canvas (lightweight, ALWAYS ON)
const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const parent = c.parentElement!;
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const getCount = () => (parent.clientWidth < 640 ? 18 : 28);
    let particles: { x: number; y: number; vx: number; vy: number; r: number; life: number }[] = [];
    const spawn = (n: number) => {
      particles = Array.from({ length: n }).map(() => ({
        x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12, r: 1 + Math.random() * 2, life: Math.random() * 6.28,
      }));
    };
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      c.width = Math.floor(rect.width * DPR); c.height = Math.floor(rect.height * DPR);
      c.style.width = rect.width + "px"; c.style.height = rect.height + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      spawn(getCount());
    };
    const step = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const p of particles) {
        p.x += p.vx / 60; p.y += p.vy / 60; p.life += 0.04;
        if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1;
        const pulse = 0.5 + Math.sin(p.life) * 0.5;
        ctx.globalAlpha = 0.35 + pulse * 0.3;
        ctx.beginPath();
        ctx.arc(p.x * (c.width / DPR), p.y * (c.height / DPR), p.r + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.45)";
        ctx.shadowBlur = 10 + pulse * 10; ctx.shadowColor = "rgba(34,211,238,0.4)";
        ctx.fill(); ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(step);
    };
    const ro = new ResizeObserver(resize); ro.observe(parent);
    const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(step); };
    document.addEventListener("visibilitychange", onVis);
    resize(); step();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); document.removeEventListener("visibilitychange", onVis); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

// Magnetic Button
const Magnetic: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    el.addEventListener("mousemove", onMove); el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return <button ref={ref} className={className}>{children}</button>;
};

// Socials
const Socials: React.FC = () => (
  <div className="flex items-center gap-4">
    <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="opacity-80 transition hover:opacity-100 focus:opacity-100">
      <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="opacity-80 transition hover:opacity-100 focus:opacity-100">
      <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
    </a>
    <a href="#contact" className="opacity-80 transition hover:opacity-100 focus:opacity-100">
      <Mail className="h-5 w-5" /><span className="sr-only">Email</span>
    </a>
  </div>
);

// Scroll hint
const ScrollHint: React.FC = () => (
  <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 select-none text-xs text-slate-400">
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex items-center gap-2">
      <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      Scroll
    </motion.div>
  </div>
);

/** -------------------- Abstract Soft Shapes BG (ALWAYS ANIMATED) -------------------- **/
type ShapeCfg = { size: number; hue: number; x: string; y: string; opacity?: number; blur?: number };

const SHAPES: ShapeCfg[] = [
  { size: 26, hue: 185, x: "8%", y: "6%", opacity: 0.8, blur: 40 },
  { size: 34, hue: 170, x: "72%", y: "4%", opacity: 0.7, blur: 44 },
  { size: 28, hue: 210, x: "80%", y: "55%", opacity: 0.75, blur: 48 },
  { size: 22, hue: 260, x: "18%", y: "68%", opacity: 0.65, blur: 46 },
  { size: 18, hue: 195, x: "50%", y: "80%", opacity: 0.6, blur: 40 },
  { size: 20, hue: 155, x: "6%", y: "42%", opacity: 0.55, blur: 42 },
];

const SoftShapesBG: React.FC<{ mount: React.RefObject<HTMLDivElement | null> }> = ({ mount }) => {
  const ref = useRef<HTMLDivElement>(null);

  const blobStyle = (cfg: ShapeCfg): React.CSSProperties => {
    const s = `${cfg.size}rem`;
    const colorA = `hsla(${cfg.hue}, 95%, 75%, ${cfg.opacity ?? 0.75})`;
    const colorB = `hsla(${cfg.hue}, 95%, 75%, 0)`;
    return { left: cfg.x, top: cfg.y, width: s, height: s, background: `radial-gradient(35% 35% at 50% 50%, ${colorA} 0%, ${colorB} 70%)`, filter: `blur(${cfg.blur ?? 40}px)` };
  };

  useLayoutEffect(() => {
    const el = ref.current; const host = mount.current; if (!el || !host) return;
    const ctx = gsap.context(() => {
      gsap.to(el, { yPercent: -8, ease: "none", scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: 0.6 } });
      const items = gsap.utils.toArray<HTMLDivElement>("[data-shape]");
      items.forEach((node, i) => {
        const dist = gsap.utils.random(10, 35); const dur = gsap.utils.random(8, 16);
        gsap.to(node, { xPercent: `+=${i % 2 === 0 ? dist : -dist}`, yPercent: `+=${i % 2 === 0 ? -dist : dist}` , rotate: gsap.utils.random(-8, 8), scale: gsap.utils.random(0.9, 1.15), ease: "sine.inOut", duration: dur, yoyo: true, repeat: -1, delay: gsap.utils.random(0, 2) });
        gsap.to(node, { opacity: "+=0.15", duration: gsap.utils.random(3, 6), ease: "sine.inOut", yoyo: true, repeat: -1, delay: gsap.utils.random(0, 1.5) });
      });
    }, ref);
    return () => ctx.revert();
  }, [mount]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{
      maskImage: "radial-gradient(80% 80% at 50% 40%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      WebkitMaskImage: "radial-gradient(80% 80% at 50% 40%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    }}>
      <div className="absolute inset-0 mix-blend-screen">
        {SHAPES.map((cfg, idx) => (<div key={idx} data-shape className="absolute rounded-full will-change-transform" style={blobStyle(cfg)} />))}
      </div>
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        backgroundSize: "auto",
      }} />
    </div>
  );
};
/** --------------------------------------------------------------------- **/

/* -------------------------- Infinite Skills Marquee -------------------------- */
const SkillsMarquee: React.FC = () => {
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const row = "Next.js • TypeScript • GSAP • Framer Motion • React 18 • Shadcn/UI • Tailwind • Vite • Vitest • Cypress • Web Animations • Performance • Accessibility • SEO";
  const duplicated = Array(2).fill(row).join("    •   ");
  return (
    <div aria-label="skills" className="group relative mt-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Row 2 (reverse) */}
      <div className={`mt-2 whitespace-nowrap text-xs tracking-wide text-teal-200/70 ${reduce ? '' : 'animate-[marquee-rev_22s_linear_infinite]'} group-hover:[animation-play-state:paused]`}>
        <span className="mr-8">{duplicated}</span>
        <span>{duplicated}</span>
      </div>
      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  // Parallax for hero text
  useEffect(() => {
    let ctx: gsap.Context | undefined; let mm: gsap.MatchMedia | undefined;
    (async () => {
      if (!mountRef.current) return; const { gsap: g, ScrollTrigger: ST } = await import("gsap/all"); g.registerPlugin(ST);
      ctx = g.context(() => {
        mm = g.matchMedia();
        mm.add("(min-width: 768px)", () => {
          g.to("[data-parallax]", { yPercent: -8, ease: "none", scrollTrigger: { trigger: mountRef.current!, start: "top top", end: "+=80%", scrub: 0.6 } });
        });
      }, mountRef);
    })();
    return () => { ctx?.revert(); // @ts-ignore
      mm?.kill?.(); };
  }, []);

  return (
    <section ref={mountRef} className="relative isolate overflow-hidden">
      {/* Abstract shapes background (animated) */}
      <SoftShapesBG mount={mountRef} />

      {/* Content */}
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-16 md:py-24 lg:px-10">
        <div className="relative w-full max-w-5xl text-center">
          <motion.p data-parallax initial={{ opacity: 0, y: 8 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-4 tracking-[0.2em] text-[10px] uppercase text-slate-400 md:text-xs">
            Senior Frontend Engineer
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-6xl lg:text-7xl">
            <GText>Mohamad</GText><span> — </span><GText>crafting interactive & performant</GText><span> web apps</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mx-auto mt-4 max-w-[28rem] text-pretty text-sm text-slate-300 md:mt-5 md:max-w-xl md:text-base">
            Next.js • Framer Motion • GSAP • TypeScript
          </motion.p>

          {/* NEW: Infinite skills marquee */}
          <SkillsMarquee />

          {/* Particles (ALWAYS ON) */}
          <div aria-hidden className="relative mx-auto mt-8 grid place-items-center">
            <ParticlesCanvas />
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur transition hover:border-white/25 hover:bg-white/20 will-change-transform">
              <a href="#works" className="outline-none">View Works</a>
            </Magnetic>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5">Contact me</a>
            <Socials />
          </div>
        </div>

        <ScrollHint />
      </div>
    </section>
  );
}
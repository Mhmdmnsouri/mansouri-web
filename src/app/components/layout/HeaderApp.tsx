"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  IconHome,
  IconWorks,
  IconAbout,
  IconContact,
  IconSun,
  IconMoon,
} from "@/app/components/icons";

// --- Navigation items
const NAV = [
  { href: "/", label: "Home", icon: IconHome },
  { href: "/works", label: "Works", icon: IconWorks },
  { href: "/about", label: "About", icon: IconAbout },
  { href: "/contact", label: "Contact", icon: IconContact },
] as const;

// --- Theme switcher with hydration-safe mount check
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  useEffect(() => setMounted(true), []);
  const isDark = theme !== "light"; // Default is dark

  if (!mounted) {
    // Lightweight shell until mounted to avoid hydration mismatch
    return (
      <button
        aria-label="Toggle theme"
        className="relative inline-flex items-center justify-center rounded-xl border border-white/15 p-2"
      >
        <IconMoon />
      </button>
    );
  }

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center rounded-xl border border-white/15 p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={prefersReduced ? { opacity: 1 } : { rotate: -90, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.15 }}
          >
            <IconMoon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={prefersReduced ? { opacity: 1 } : { rotate: 90, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.15 }}
          >
            <IconSun />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [condensed, setCondensed] = useState(false); // shrink header after scroll
  const lastY = useRef(0);
  const ticking = useRef(false);
  const prefersReduced = useReducedMotion();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  // --- Optimized scroll handler with rAF
  useEffect(() => {
    const docEl = document.documentElement;

    const readScroll = () => {
      const y = window.scrollY;
      const total = docEl.scrollHeight - docEl.clientHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, y / total)) : 0;
      setProgress(p);
      setCondensed(y > 80);
      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(readScroll);
      }
    };

    // Initial calculation
    readScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mobile menu after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");
    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  // Animation variants for header (no hide, only compact)
  const headerPadding = useMemo(
    () => ({ paddingTop: condensed ? 8 : 16, paddingBottom: condensed ? 8 : 16 }),
    [condensed]
  );

  return (
    <header className="sticky top-0 z-50">
      {/* Progress track + bar */}
      <div className="relative h-[3px]">
        {/* Track */}
        <div className="absolute inset-0 bg-[#111]" />
        {/* Bar */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full h-0.5 bg-sky-500 origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ type: "tween", duration: prefersReduced ? 0 : 0.12 }}
        />
      </div>

      {/* Background effect: soft gradient + glass blur */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{
          opacity: 1,
          filter: condensed ? "saturate(1.1)" : "saturate(0.9)",
          background: condensed
            ? "radial-gradient(1200px 300px at 70% -200px, rgba(56,189,248,.25), transparent), radial-gradient(1200px 300px at 30% -220px, rgba(168,85,247,.22), transparent)"
            : "radial-gradient(900px 240px at 60% -220px, rgba(56,189,248,.18), transparent)",
        }}
        transition={{ duration: prefersReduced ? 0 : 0.3 }}
        className="pointer-events-none absolute inset-0 -z-10"
      />

      {/* Main header container */}
      <motion.div
        initial={false}
        animate={{
          ...headerPadding,
          backgroundColor: `rgba(0,0,0,${condensed ? 0.45 : 0.25})`,
          backdropFilter: condensed ? "blur(14px)" : "blur(8px)",
          borderBottomColor: `rgba(255,255,255,${condensed ? 0.22 : 0.12})`,
          boxShadow: condensed
            ? "0 20px 40px -20px rgba(2,6,23,.6), inset 0 -1px 0 rgba(255,255,255,.06)"
            : "0 10px 30px -24px rgba(2,6,23,.5)",
        }}
        transition={{ duration: prefersReduced ? 0 : 0.25 }}
        className="relative flex items-center justify-between px-4 md:px-12 border-b"
      >
        {/* Right (mobile): theme switcher + menu */}
        <div className="md:hidden flex items-center gap-2 order-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-white/15 p-1.5 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.svg
                  key="x"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  initial={prefersReduced ? { opacity: 1 } : { rotate: -90, opacity: 0 }}
                  animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.15 }}
                >
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  initial={prefersReduced ? { opacity: 1 } : { rotate: 90, opacity: 0 }}
                  animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.15 }}
                >
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Logo/Name */}
        <motion.div
          initial={false}
          animate={{ scale: condensed ? 0.96 : 1, letterSpacing: condensed ? 0.2 : 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.25 }}
        >
          <Link href="/" className="font-bold tracking-tight text-base md:text-lg">
            Mohamad Shahmansouri
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                  active ? "text-white" : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <Icon className={`transition ${active ? "text-sky-400" : "text-gray-400 group-hover:text-gray-200"}`} />
                <span>{label}</span>
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Left (desktop): CV + theme */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/assets/Mohamad-Shahmansouri-CV.pdf"
            className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
          >
            Download CV
          </a>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed top-0 bottom-0 right-0 w-80 max-w-[85%] md:hidden bg-neutral-950 border-l border-white/10 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: prefersReduced ? 0 : 260, damping: prefersReduced ? 1 : 28 }}
            >
              <div className="flex items-center justify-between p-3 border-b border-white/10">
                <span className="font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 p-2 hover:bg-white/5"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="p-2 grid gap-1">
                {NAV.map(({ href, label, icon: Icon }, idx) => {
                  const active = isActive(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: prefersReduced ? 0 : 0.03 * idx }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                          active ? "bg-white/10 text-white" : "hover:bg-white/5"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon className={`${active ? "text-sky-400" : "text-gray-400"}`} />
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                <a
                  href="/assets/Mohamad-Shahmansouri-CV.pdf"
                  className="mt-2 block rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
                >
                  Download CV
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

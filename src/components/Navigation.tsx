import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "../data/catalog";

type NavProps = {
  current: string; // "home" | category slug
  onNavigate: (route: string) => void;
};

/**
 * Navigation
 * --------------------------------------------------------------------
 * Mobile-first, glassmorphic navigation.
 *  - On small screens: a slim top bar + a full-screen overlay menu.
 *  - On md+ screens : floating glass pill with inline links.
 *  - Background blur intensifies on scroll for a soft, layered feel.
 */
export default function Navigation({ current, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (route: string) => {
    setOpen(false);
    onNavigate(route);
  };

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4"
      >
        <div
          className={[
            "mx-auto max-w-6xl flex items-center justify-between",
            "rounded-full px-4 sm:px-6 py-3 transition-all duration-500",
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(26,23,20,0.18)]"
              : "bg-transparent",
          ].join(" ")}
        >
          {/* Wordmark */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2 select-none"
            aria-label="ShopSmart home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-clay group-hover:scale-125 transition-transform" />
            <span className="font-display text-xl tracking-tight">
              Shop<span className="italic font-light">Smart</span>
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {CATEGORIES.map((c) => {
              const active = current === c.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => go(c.slug)}
                  className={[
                    "relative px-4 py-2 text-sm rounded-full transition-colors",
                    active
                      ? "text-cream"
                      : "text-ink/70 hover:text-ink",
                  ].join(" ")}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-ink rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{c.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-full glass"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <div className="relative w-4 h-4">
              <span
                className={[
                  "absolute left-0 right-0 h-px bg-ink transition-all duration-300",
                  open ? "top-1/2 rotate-45" : "top-1",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-px bg-ink transition-all duration-300",
                  open ? "top-1/2 -rotate-45" : "bottom-1",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 glass-dark" />
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full flex flex-col justify-center px-8 gap-2"
            >
              <p className="text-cream/50 text-xs uppercase tracking-[0.3em] mb-6">
                Departments
              </p>
              {CATEGORIES.map((c, i) => (
                <motion.button
                  key={c.slug}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                  onClick={() => go(c.slug)}
                  className="text-left group"
                >
                  <span
                    className={[
                      "font-display text-4xl sm:text-5xl block transition-colors",
                      current === c.slug
                        ? "text-cream"
                        : "text-cream/60 group-hover:text-cream",
                    ].join(" ")}
                  >
                    {c.title}
                  </span>
                  <span className="text-cream/40 text-sm italic">
                    {c.tagline}
                  </span>
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

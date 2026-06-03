import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "../data/catalog";
import logoImage from "../assets/Logo.webp";

/* ─── Types ─── */

type NavProps = {
  current: string;
  onNavigate: (route: string) => void;
};

/* ─── Logo sub-components ─── */

/**
 * LogoMark — the logo image with seamless blending.
 * Uses `mix-blend-multiply` so the transparent PNG merges naturally
 * with whatever warm/cream background sits behind it.
 * Hover: gentle opacity lift + barely-perceptible scale — nothing abrupt.
 */
function LogoMark() {
  return (
    <div className="relative flex items-center justify-center w-28 h-16 sm:w-40 sm:h-24 overflow-hidden transition-all duration-700 ease-out">
      <img
        src={logoImage}
        alt="ShopSmart"
        className="relative w-24 h-14 sm:w-36 sm:h-20 object-contain opacity-85 mix-blend-multiply transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-105"
        draggable={false}
      />
    </div>
  );
}

/**
 * Navigation — editorial floating bar with luxurious logo integration.
 * ──────────────────────────────────────────────────────────────────────
 *
 * Logo strategy:
 *   • "blend" — default on hero sections. `mix-blend-multiply` + `opacity-85`
 *     lets the logo melt into the cream/earthy palette. Zero container borders.
 *   • "glass" — activates on scroll. A frosted panel (`backdrop-blur-xl`,
 *     `bg-white/[0.07]`) materialises behind the logo, giving it structure
 *     against any background while staying on-brand with the museum vibe.
 *
 * Hover micro-interactions:
 *   Gentle `scale-105` + opacity shift from 0.85 → 1.0.
 *   700ms duration with an ease-out curve — expensive and unhurried.
 *
 * Spacing philosophy:
 *   Generous `px-6 sm:px-8 py-3.5` on the bar, with logo and menu
 *   button pushed to extremes via `justify-between`. Abundant
 *   negative space is the luxury.
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

  const currentLabel =
    current === "home"
      ? null
      : (CATEGORIES.find((c) => c.slug === current)?.title ?? null);

  return (
    <>
      {/* ─── Floating top bar ─── */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4"
      >
        <div
          className={[
            "mx-auto max-w-6xl flex items-center justify-between",
            "rounded-full px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-500",
            scrolled || open
              ? "glass shadow-[0_8px_40px_-12px_rgba(26,23,20,0.18)]"
              : "bg-transparent",
          ].join(" ")}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => go("home")}
            className="group flex items-center select-none relative -ml-1"
            aria-label="ShopSmart home"
          >
            <LogoMark />
          </button>

          {/* Centre — current department label (desktop only) */}
          <AnimatePresence mode="wait">
            {currentLabel && !open && (
              <motion.span
                key={currentLabel}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="hidden sm:block absolute left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-ink/50 pointer-events-none"
              >
                {currentLabel}
              </motion.span>
            )}
          </AnimatePresence>

          {/* ── Menu trigger ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="group flex items-center gap-2.5 select-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={[
                "text-[11px] uppercase tracking-[0.3em] transition-colors duration-300",
                open ? "text-ink/40" : "text-ink/70 group-hover:text-ink",
              ].join(" ")}
            >
              {open ? "Close" : "Menu"}
            </span>
            {/* Animated hamburger lines */}
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span
                className={[
                  "block h-px bg-ink origin-center transition-all duration-400",
                  open ? "rotate-45 translate-y-[6px]" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px bg-ink transition-all duration-300",
                  open ? "opacity-0 scale-x-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px bg-ink origin-center transition-all duration-400",
                  open ? "-rotate-45 -translate-y-[7px]" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ─── Full-screen overlay ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" />

            {/* Content */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-8 sm:px-16 md:px-24 overflow-y-auto py-28"
              aria-label="Department navigation"
            >
              {/* Header row */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-cream/30 text-[10px] uppercase tracking-[0.4em] mb-10 sm:mb-14"
              >
                Departments · {CATEGORIES.length} Sections
              </motion.p>

              {/* Two-column grid on md+, single column on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32">
                {CATEGORIES.map((c, i) => {
                  const isActive = current === c.slug;
                  return (
                    <motion.button
                      key={c.slug}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.18 + i * 0.045,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => go(c.slug)}
                      className="group flex items-baseline gap-5 py-3.5 sm:py-4 border-b border-cream/10 hover:border-cream/30 transition-colors text-left"
                    >
                      {/* Number */}
                      <span className="font-display italic text-cream/25 text-sm w-7 shrink-0 group-hover:text-clay transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <span
                        className={[
                          "font-display text-2xl sm:text-3xl leading-tight transition-colors duration-300",
                          isActive
                            ? "text-clay"
                            : "text-cream/75 group-hover:text-cream",
                        ].join(" ")}
                      >
                        {c.title}
                        {isActive && (
                          <span className="ml-3 inline-block w-1.5 h-1.5 rounded-full bg-clay align-middle mb-1" />
                        )}
                      </span>

                      {/* Tagline — hidden on mobile, visible on sm+ */}
                      <span className="hidden sm:block ml-auto text-[11px] text-cream/30 italic font-light shrink-0 group-hover:text-cream/50 transition-colors duration-300 max-w-[140px] text-right leading-tight">
                        {c.tagline}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="mt-12 sm:mt-16 text-cream/20 text-[10px] uppercase tracking-[0.35em]"
              >
                ShopSmart · A digital museum of food
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

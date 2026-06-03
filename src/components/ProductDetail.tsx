import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LazyImage from "./LazyImage";
import type { CatalogItem } from "../data/catalog";

type Props = {
  item: CatalogItem;
  index?: number;
  onNavigate?: (route: string) => void;
};

/**
 * ProductDetail
 * --------------------------------------------------------------------
 * Museum-plaque style component for a single catalog item.
 * "Add to my list" button removed.
 * "Find in store" now navigates to the StorePage via onNavigate.
 */
export default function ProductDetail({ item, index = 0, onNavigate }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const reverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="relative py-20 sm:py-28 md:py-36"
      aria-labelledby={`item-${item.id}`}
    >
      <div
        className={[
          "max-w-6xl mx-auto px-6 sm:px-8 grid gap-10 md:gap-16 items-center",
          "grid-cols-1 md:grid-cols-12",
        ].join(" ")}
      >
        {/* ───────────── Imagery column ───────────── */}
        <motion.div
          style={{ y: imageY }}
          className={[
            "md:col-span-7 relative",
            reverse ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <div className="relative">
            <LazyImage
              src={item.image}
              alt={item.name}
              aspect="aspect-[4/5]"
              rounded="rounded-[2rem]"
              className="shadow-[0_30px_80px_-30px_rgba(26,23,20,0.45)]"
            />

            {item.badge && (
              <div className="absolute top-5 left-5 glass rounded-full px-4 py-1.5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/80">
                  {item.badge}
                </span>
              </div>
            )}

            <div className="absolute -bottom-6 right-6 sm:-bottom-8 sm:right-10">
              <div className="glass rounded-2xl px-5 py-3 flex items-baseline gap-2">
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/50">
                  No.
                </span>
                <span className="font-display text-2xl text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───────────── Text column ───────────── */}
        <div
          className={[
            "md:col-span-5 space-y-7",
            reverse ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.32em] text-ink/50"
          >
            {item.origin}
          </motion.p>

          <motion.h2
            id={`item-${item.id}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight"
          >
            {item.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink/70 text-lg leading-relaxed font-light max-w-md"
          >
            {item.story}
          </motion.p>

          {/* Tasting notes */}
          <div className="pt-4 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
              Character
            </p>
            <ul className="space-y-1.5">
              {item.notes.map((n, i) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="font-display italic text-xl text-ink/85"
                >
                  — {n}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Pairings */}
          {item.pairings && item.pairings.length > 0 && (
            <div className="pt-2 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
                Pairs Quietly With
              </p>
              <div className="flex flex-wrap gap-2">
                {item.pairings.map((p) => (
                  <span
                    key={p}
                    className="glass rounded-full px-3.5 py-1.5 text-xs text-ink/75"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Single CTA — Find in Store */}
          <div className="pt-6">
            <button
              type="button"
              onClick={() => onNavigate?.("store")}
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-cream px-6 py-3.5 text-sm tracking-wide hover:bg-clay transition-colors"
            >
              Find in store
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

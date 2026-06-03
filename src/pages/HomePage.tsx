import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CATEGORIES } from "../data/catalog";
import LazyImage from "../components/LazyImage";

type Props = { onNavigate: (route: string) => void };

export default function HomePage({ onNavigate }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blob1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const blob2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div className="bg-cream">
      {/* ─────────────────── HERO ─────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden flex items-center"
      >
        {/* Soft glassmorphic blobs */}
        <motion.div
          style={{ y: blob1 }}
          className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-clay/30 blur-3xl"
        />
        <motion.div
          style={{ y: blob2 }}
          className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-moss/25 blur-3xl"
        />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-wheat/30 blur-3xl" />

        <motion.div
          style={{ y: titleY }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-20 w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.4em] text-ink/60 mb-8"
          >
            ShopSmart · A digital museum of food
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[14vw] sm:text-[10vw] md:text-[8.5rem] leading-[0.85] tracking-tight max-w-5xl"
          >
            Food, on{" "}
            <span className="italic font-light text-clay">view.</span>
            <br />
            Stories, on{" "}
            <span className="italic font-light text-moss">shelves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-10 max-w-xl text-ink/70 text-lg leading-relaxed font-light"
          >
            A catalogue of the things we keep on our shelves — the breads we
            bake, the cheeses we cellar, the fruit picked this morning. No
            prices, no noise. Just the things, and where they came from.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onNavigate("bakery")}
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-cream px-7 py-4 text-sm tracking-wide hover:bg-clay transition-colors"
            >
              Begin in the Bakery
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              onClick={() => onNavigate("daily-deals")}
              className="rounded-full glass px-7 py-4 text-sm text-ink/80 hover:text-ink transition-colors"
            >
              Today's picks
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────── DEPARTMENTS GRID ─────────────────── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50 mb-3">
                Six Departments
              </p>
              <h2 className="font-display text-4xl sm:text-6xl leading-tight">
                Wander where you{" "}
                <span className="italic font-light">like.</span>
              </h2>
            </div>
            <p className="text-ink/60 max-w-xs text-sm leading-relaxed">
              Each department is curated like an exhibition. There's no
              prescribed order — start anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c, i) => (
              <motion.button
                key={c.slug}
                onClick={() => onNavigate(c.slug)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group text-left relative"
              >
                <LazyImage
                  src={c.hero}
                  alt={c.title}
                  aspect="aspect-[4/5]"
                  rounded="rounded-3xl"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-ink/80">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl text-cream mb-1">
                    {c.title}
                  </h3>
                  <p className="text-cream/75 italic text-sm">{c.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-cream/90 text-xs uppercase tracking-[0.25em]">
                    Enter
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── ETHOS MARQUEE ─────────────────── */}
      <section className="py-20 overflow-hidden border-y border-ink/10 bg-cream-soft">
        <div className="flex marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {[
                "Slow",
                "Honest",
                "Seasonal",
                "Local",
                "Considered",
                "Quiet",
                "Whole",
                "Made by hand",
              ].map((w) => (
                <span
                  key={`${dup}-${w}`}
                  className="font-display text-6xl sm:text-8xl px-8 text-ink/80"
                >
                  {w}
                  <span className="italic font-light text-clay mx-6">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-display text-3xl sm:text-4xl leading-snug max-w-md">
              A grocery, but quieter.
            </p>
            <p className="mt-4 text-ink/60 max-w-md text-sm leading-relaxed">
              ShopSmart is an idea about how a market could feel — like a
              gallery, like a kitchen, like a friend's pantry.
            </p>
          </div>
          <div className="md:text-right text-ink/50 text-xs uppercase tracking-[0.3em] space-y-2">
            <p>Open daily · 7 to 9</p>
            <p>Find a store · Recipe journal</p>
            <p className="pt-4 text-ink/30">
              © ShopSmart — A digital museum of food
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

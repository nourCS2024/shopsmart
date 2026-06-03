import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getCategory } from "../data/catalog";
import ProductDetail from "../components/ProductDetail";
import LazyImage from "../components/LazyImage";

type Props = {
  onNavigate: (route: string) => void;
};

export default function BakeryPage({ onNavigate }: Props) {
  const cat = getCategory("bakery")!;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-cream-soft">
      {/* ─────────────────── 1. PARALLAX HERO ─────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[640px] overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 -top-20"
        >
          <img
            src={cat.hero}
            alt="Close-up of artisan bread crust"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          {/* Luxurious cinematic scrim */}
          <div className="hero-scrim" />
          {/* Soft bottom fade to page background */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-soft to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 max-w-7xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-cream/70 mb-4 text-shadow-lux-soft">
            Department 01 · Bakery
          </p>
          <h1 className="font-display text-[18vw] sm:text-[14vw] md:text-[10rem] leading-[0.85] tracking-tight text-cream text-shadow-lux-display">
            Of grain,
            <br />
            <span className="italic font-light">fire</span> &amp; patience.
          </h1>
          <p className="mt-8 max-w-md text-cream/80 text-base sm:text-lg leading-relaxed font-light text-shadow-lux-soft">
            {cat.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 right-6 sm:right-12 text-cream/60 text-xs uppercase tracking-[0.3em] text-shadow-lux-soft"
        >
          <span className="block">Scroll</span>
          <span className="block w-px h-10 bg-cream/40 mt-2 ml-3 origin-top animate-pulse" />
        </motion.div>
      </section>

      {/* ─────────────────── 2. THE STORY OF GRAIN ─────────────────── */}
      <section className="py-28 sm:py-40 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-clay mb-6">
              Wall Text · I
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-8">
              Every loaf begins,
              <br />
              <span className="italic font-light">somewhere, as a field.</span>
            </h2>
            <p className="text-ink/70 leading-relaxed text-lg font-light">
              We trace each grain back to the farm — heritage wheats grown on
              soil that's been tended for generations, milled slowly between
              cool stones to keep the germ alive. What you taste, in the end, is
              weather and patience.
            </p>
          </div>
          <div className="md:col-span-7">
            <LazyImage
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=70"
              alt="Wheat field at golden hour"
              aspect="aspect-[16/10]"
              rounded="rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── 3. PROCESS LEDGER ─────────────────── */}
      <section className="px-6 sm:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50 mb-10 text-center">
            The Three Hands
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                n: "I",
                title: "Mill",
                body: "Stone-ground within hours of baking. The flour stays cool, the germ stays whole, the flavour stays alive.",
              },
              {
                n: "II",
                title: "Ferment",
                body: "A slow, wild rise — sometimes overnight, sometimes a day and a half. We wait until the dough is ready, never the other way around.",
              },
              {
                n: "III",
                title: "Bake",
                body: "Stone hearth, real fire, deep heat. The crust forms in a roar of steam; the inside settles into something tender.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-3xl p-8 relative noise"
              >
                <div className="font-display italic text-clay text-3xl mb-6">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed font-light">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 4. THE COLLECTION ─────────────────── */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50">
            The Collection
          </p>
          <h2 className="font-display text-5xl sm:text-6xl mt-4 leading-tight">
            <span className="italic font-light">Four loaves,</span> on view.
          </h2>
        </div>

        {cat.items.map((item, i) => (
          <ProductDetail
            key={item.id}
            item={item}
            index={i}
            onNavigate={onNavigate}
          />
        ))}
      </section>

      {/* ─────────────────── 5. CLOSING NOTE ─────────────────── */}
      <section className="py-32 px-6 text-center">
        <p className="font-display italic text-2xl sm:text-3xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
          "Bread is the simplest of foods, and so the hardest to make
          beautifully. We're trying anyway."
        </p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-ink/40">
          The ShopSmart Bakers
        </p>
      </section>
    </div>
  );
}

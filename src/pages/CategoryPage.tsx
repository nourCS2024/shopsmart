import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Category } from "../data/catalog";
import ProductDetail from "../components/ProductDetail";

type Props = {
  category: Category;
  onNavigate: (route: string) => void;
};

export default function CategoryPage({ category, onNavigate }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-cream-soft">
      {/* Parallax hero */}
      <section
        ref={heroRef}
        className="relative h-[92svh] min-h-[600px] overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 -top-16"
        >
          <img
            src={category.hero}
            alt={category.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          {/* Luxurious cinematic scrim — replaces flat gradient */}
          <div className="hero-scrim" />
          {/* Soft bottom fade to page background */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-soft to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 max-w-7xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-cream/70 mb-4 text-shadow-lux-soft">
            Department · {category.title}
          </p>
          <h1 className="font-display text-[16vw] sm:text-[12vw] md:text-[9rem] leading-[0.85] tracking-tight text-cream text-shadow-lux-display">
            <span className="italic font-light">
              {category.tagline.split(" ")[0]}
            </span>{" "}
            {category.tagline.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mt-8 max-w-md text-cream/80 text-base sm:text-lg leading-relaxed font-light text-shadow-lux-soft">
            {category.intro}
          </p>
        </motion.div>
      </section>

      {/* Collection title */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50">
          On View
        </p>
        <h2 className="font-display text-4xl sm:text-5xl mt-4">
          A small, <span className="italic font-light">considered</span>{" "}
          selection.
        </h2>
      </div>

      {/* Exhibits */}
      {category.items.map((item, i) => (
        <ProductDetail
          key={item.id}
          item={item}
          index={i}
          onNavigate={onNavigate}
        />
      ))}

      {/* Closing */}
      <section className="py-28 px-6 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-ink/60 max-w-xl mx-auto leading-relaxed">
          "We'd rather show you a few good things than overwhelm you with many."
        </p>
      </section>
    </div>
  );
}

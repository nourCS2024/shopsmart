import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Category } from "../data/catalog";
import ProductDetail from "../components/ProductDetail";

/**
 * CategoryPage — generic museum-style page used by Meat & Cheese,
 * Daily Picks, Veggies, Fruits, and the Pantry.
 *
 * Same architectural beats as Bakery (parallax hero → intro → exhibits)
 * but lighter on intermediate sections so the page feels like a single
 * continuous gallery walk.
 */
export default function CategoryPage({ category }: { category: Category }) {
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
          <div className="absolute inset-0 bg-gradient-to-b from-cream-soft/20 via-transparent to-cream-soft" />
        </motion.div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 max-w-7xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-ink/60 mb-4">
            Department · {category.title}
          </p>
          <h1 className="font-display text-[16vw] sm:text-[12vw] md:text-[9rem] leading-[0.85] tracking-tight">
            <span className="italic font-light">{category.tagline.split(" ")[0]}</span>{" "}
            {category.tagline.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mt-8 max-w-md text-ink/70 text-base sm:text-lg leading-relaxed">
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
          A small,{" "}
          <span className="italic font-light">considered</span> selection.
        </h2>
      </div>

      {/* Exhibits */}
      {category.items.map((item, i) => (
        <ProductDetail key={item.id} item={item} index={i} />
      ))}

      {/* Closing */}
      <section className="py-28 px-6 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-ink/60 max-w-xl mx-auto leading-relaxed">
          "We'd rather show you a few good things than overwhelm you with
          many."
        </p>
      </section>
    </div>
  );
}

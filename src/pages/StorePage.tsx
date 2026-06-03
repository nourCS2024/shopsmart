import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * StorePage — "Find in Store"
 * ---------------------------------------------------------------
 * A luxury editorial page that presents the single ShopSmart
 * location as if it were a destination rather than an address.
 *
 * Layout:
 *  1. Atmospheric hero — large serif headline over soft blobs
 *  2. Split section: editorial copy left / map right (rounded, shadowed)
 *  3. Info strip — hours, address, phone in minimal glass cards
 *  4. Full-bleed map at the bottom for immersion
 */
export default function StorePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const details = [
    {
      label: "Address",
      value: "ShopSmart, Choueifat\nMount Lebanon, Lebanon",
      icon: "◎",
    },
    {
      label: "Hours",
      value: "Mon – Sat  07:00 – 21:00\nSunday  08:00 – 20:00",
      icon: "◷",
    },
    {
      label: "Contact",
      value: "+961 05 431 243\nhello@shopsmart.lb",
      icon: "◈",
    },
    {
      label: "Parking",
      value: "Free parking",
      icon: "◉",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* ─────────────── 1. HERO ─────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[70svh] overflow-hidden flex items-end pb-20 sm:pb-28"
      >
        {/* Blobs */}
        <motion.div
          style={{ y: blob1Y }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-clay/20 blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute -bottom-20 -right-16 w-[420px] h-[420px] rounded-full bg-moss/20 blur-3xl pointer-events-none"
        />
        <div className="absolute top-1/2 left-2/3 w-[260px] h-[260px] rounded-full bg-wheat/25 blur-3xl pointer-events-none" />

        <motion.div
          style={{ y: titleY }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-36"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.4em] text-ink/50 mb-6"
          >
            Our Location · Choueifat, Lebanon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[13vw] sm:text-[9vw] md:text-[7.5rem] leading-[0.88] tracking-tight max-w-5xl"
          >
            Come find <span className="italic font-light text-clay">us.</span>
            <br />
            We kept{" "}
            <span className="italic font-light text-moss">it warm.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-lg text-ink/65 text-lg leading-relaxed font-light"
          >
            A single store, deliberately. We believe in one place done
            exceptionally well — every shelf curated, every producer known by
            name, every morning starting before sunrise.
          </motion.p>
        </motion.div>
      </section>

      {/* ─────────────── 2. MAP + COPY SPLIT ─────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Editorial copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-8 md:sticky md:top-32"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-clay mb-4">
                Wall Text · Location
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
                Nestled in the hills{" "}
                <span className="italic font-light">above Beirut.</span>
              </h2>
            </div>

            <p className="text-ink/65 leading-relaxed font-light text-lg">
              We chose Choueifat for its quiet — the morning mist that rolls in
              from the mountain, the unhurried pace of a neighbourhood that
              hasn't forgotten what a market should feel like.
            </p>

            <p className="text-ink/60 leading-relaxed font-light">
              The store sits at street level, with floor-to-ceiling windows that
              flood the space with light. You'll smell the bread from the car
              park.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="md:col-span-7"
          >
            {/* Decorative label */}
            <div className="flex items-center justify-between mb-4 px-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
                Interactive Map
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-moss" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  Live
                </p>
              </div>
            </div>

            {/* Map container with luxury treatment */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(26,23,20,0.35)]">
              {/* Top glass overlay bar */}
              <div className="absolute top-0 inset-x-0 h-14 glass z-10 flex items-center px-6 gap-3">
                <div className="w-2 h-2 rounded-full bg-clay" />
                <span className="font-display italic text-sm text-ink/70">
                  ShopSmart · Choueifat
                </span>
                <span className="ml-auto text-[10px] uppercase tracking-[0.25em] text-ink/40">
                  Mount Lebanon
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2217.8305869380993!2d35.50474138084237!3d33.803993588389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f190e542690e7%3A0x6062bff6ef1dd69e!2sShopSmart!5e0!3m2!1sen!2slb!4v1780476665245!5m2!1sen!2slb"
                width="100%"
                height="520"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ShopSmart location map"
                className="w-full"
              />

              {/* Bottom glass overlay */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-cream/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 3. INFO CARDS STRIP ─────────────── */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 bg-cream-soft">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.35em] text-ink/40 mb-10 text-center"
          >
            Store Details
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {details.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-3xl p-7 relative overflow-hidden noise group hover:shadow-[0_20px_60px_-15px_rgba(26,23,20,0.18)] transition-shadow duration-500"
              >
                {/* Decorative symbol */}
                <div className="font-display text-4xl text-clay/20 group-hover:text-clay/30 transition-colors duration-500 mb-5 leading-none">
                  {d.icon}
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-3">
                  {d.label}
                </p>
                <p className="font-display text-lg leading-snug text-ink/80 whitespace-pre-line">
                  {d.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 4. FULL-BLEED MAP ─────────────── */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between flex-wrap gap-4 mb-6"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-ink/40 mb-3">
                Neighbourhood View
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                In the heart of{" "}
                <span className="italic font-light text-clay">Choueifat.</span>
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=ShopSmart+Choueifat+Lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-cream px-6 py-3.5 text-sm tracking-wide hover:bg-clay transition-colors"
            >
              Open in Maps
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-6 sm:mx-12 mb-20 rounded-[2.5rem] overflow-hidden shadow-[0_50px_120px_-20px_rgba(26,23,20,0.28)] relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2217.8305869380993!2d35.50474138084237!3d33.803993588389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f190e542690e7%3A0x6062bff6ef1dd69e!2sShopSmart!5e0!3m2!1sen!2slb!4v1780476665245!5m2!1sen!2slb"
            width="100%"
            height="560"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ShopSmart neighbourhood map"
            className="w-full"
          />
          {/* Vignette edges */}
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-ink/5 shadow-[inset_0_0_60px_rgba(26,23,20,0.08)]" />
        </motion.div>
      </section>

      {/* ─────────────── 5. CLOSING ─────────────── */}
      <section className="py-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-2xl sm:text-3xl text-ink/55 max-w-xl mx-auto leading-relaxed"
        >
          "We're easier to find than you think — and harder to leave."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-[10px] uppercase tracking-[0.35em] text-ink/30"
        >
          ShopSmart · Choueifat, Mount Lebanon
        </motion.p>
      </section>
    </div>
  );
}

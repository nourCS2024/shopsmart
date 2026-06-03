import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * PageTransition
 * --------------------------------------------------------------------
 * A reusable wrapper providing the same gentle fade + lift on every page.
 *
 * Strategy for ultra-fast transitions:
 *  1. AnimatePresence in App.tsx with mode="wait" so the exit anim
 *     completes before the next page mounts (prevents layout jitter).
 *  2. Short, eased durations (~350ms) — perceptually fast but smooth.
 *  3. Pages share a single Nav (persistent) so only the content swaps.
 *  4. Images use loading="lazy" + decoding="async" to defer cost.
 *  5. All routes are in-memory (single-page) so no network roundtrip.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

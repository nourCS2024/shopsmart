import { useEffect, useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import BakeryPage from "./pages/BakeryPage";
import CategoryPage from "./pages/CategoryPage";
import { getCategory } from "./data/catalog";

/**
 * App
 * --------------------------------------------------------------------
 * Lightweight in-memory router (no react-router needed for a 6-page
 * concept site). Routes are: "home" | "bakery" | "meat-cheese" |
 * "daily-deals" | "veggies" | "fruits" | "others".
 *
 * Page transitions:
 *  - AnimatePresence with mode="wait" so pages don't overlap.
 *  - Each page wraps in <PageTransition> which fades + lifts in 350ms.
 *  - Window scrolls to top on every route change.
 *  - The Navigation persists across routes (no remount, no flicker).
 */
export default function App() {
  const [route, setRoute] = useState<string>("home");

  const navigate = (next: string) => {
    setRoute(next);
    // Defer scroll to next frame so the transition starts smoothly
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  };

  // Sync with hash so deep links / back button work nicely
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#/", "").replace("#", "");
      if (h) setRoute(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const h = route === "home" ? "" : `#/${route}`;
    if (window.location.hash !== h) {
      window.history.replaceState(null, "", h || window.location.pathname);
    }
  }, [route]);

  const page = useMemo(() => {
    if (route === "home") {
      return (
        <PageTransition key="home">
          <HomePage onNavigate={navigate} />
        </PageTransition>
      );
    }
    if (route === "bakery") {
      return (
        <PageTransition key="bakery">
          <BakeryPage />
        </PageTransition>
      );
    }
    const cat = getCategory(route);
    if (cat) {
      return (
        <PageTransition key={cat.slug}>
          <CategoryPage category={cat} />
        </PageTransition>
      );
    }
    // Fallback to home
    return (
      <PageTransition key="home-fallback">
        <HomePage onNavigate={navigate} />
      </PageTransition>
    );
  }, [route]);

  return (
    <div className="min-h-screen">
      <Navigation current={route} onNavigate={navigate} />
      <AnimatePresence mode="wait">{page}</AnimatePresence>
    </div>
  );
}

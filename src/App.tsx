import { useEffect, useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import BakeryPage from "./pages/BakeryPage";
import CategoryPage from "./pages/CategoryPage";
import StorePage from "./pages/StorePage";
import { getCategory } from "./data/catalog";

/**
 * App
 * ---------------------------------------------------------------
 * In-memory router. Routes:
 *   "home" | "store" | "bakery" | "vegetables-fruits" | "meat" |
 *   "fromagerie-charcuterie" | "spices" | "nuts" | "household" |
 *   "groceries" | "alcoholic-beverages" | "non-alcoholic-beverages" |
 *   "salads-appetizers" | "fresh-juices" | "daily-deals"
 */
export default function App() {
  const [route, setRoute] = useState<string>("home");

  const navigate = (next: string) => {
    setRoute(next);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  };

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
    if (route === "store") {
      return (
        <PageTransition key="store">
          <StorePage />
        </PageTransition>
      );
    }
    if (route === "bakery") {
      return (
        <PageTransition key="bakery">
          <BakeryPage onNavigate={navigate} />
        </PageTransition>
      );
    }
    const cat = getCategory(route);
    if (cat) {
      return (
        <PageTransition key={cat.slug}>
          <CategoryPage category={cat} onNavigate={navigate} />
        </PageTransition>
      );
    }
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

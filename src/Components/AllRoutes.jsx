import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

const pageTransition = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
  transition: { duration: 0.5 },
};

const AllRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="about"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen"
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen"
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;

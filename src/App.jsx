import React from "react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Components/Service";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar />
      <Home />
      {/* <AllRoutes /> */}
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;

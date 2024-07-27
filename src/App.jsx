import React from "react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;

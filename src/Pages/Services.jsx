import React from "react";
import Service from "../Components/Service";

const Services = () => {
  return (
    <div className="min-h-[90vh] p-[10%] bg-gradient-to-r from-slate-900 to-slate-700 text-white font-poppins text-center flex flex-col justify-center items-center  ">
      <div className="flex flex-row flex-wrap justify-center max-w-[70%]  gap-8 min-h-[50%] border-2 border-white">
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
        <Service title="Branding" para="Completely Rebrand Your Startup" />
      </div>
    </div>
  );
};

export default Services;

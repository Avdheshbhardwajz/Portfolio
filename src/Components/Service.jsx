import React from "react";

const Service = (prop) => {
  return (
    <div className="min-w-[300px] max-w-[450px] p-4 border-2 border-white flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl font-bold">{prop.title}</h1>
      <p>{prop.para}</p>
      <button className="border-2 border-white px-4 py-2">
        Book a Session
      </button>
    </div>
  );
};

export default Service;

import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/400x600?text=Image+1",
  "https://via.placeholder.com/400x600?text=Image+2",
  "https://via.placeholder.com/400x600?text=Image+3",
  "https://via.placeholder.com/400x600?text=Image+4",
  "https://via.placeholder.com/400x600?text=Image+5",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-[60%] ">
      <div className="relative w-64 h-96 overflow-hidden  ">
        <motion.div
          key={currentIndex}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-64 h-96"
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
      <div className="flex gap-4 mt-4 font-poppins">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 text-white bg-transparent rounded text-xl border-2 border-white"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-transparent rounded text-xl border-2 border-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;

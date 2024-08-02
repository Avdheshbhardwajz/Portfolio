import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

const images = [img3, img2, img1, img4, img5, img6, img7];

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
    <div className="flex flex-col items-center justify-center  min-h-[60%]  ">
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

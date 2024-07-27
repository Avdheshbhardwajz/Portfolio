import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="  h-[90vh] bg-gradient-to-r from-slate-900 to-slate-700 text-white font-poppins flex flex-row justify-center items-center content-center box-border m-0">
      <div className="max-w-[90%]  md:max-w-[60%] border-2 border-white p-[5%] text-center flex flex-col gap-5 md:gap-10 relative">
        <motion.h2
          className="text-lg md:text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Innovative Solutions for Modern Businesses
        </motion.h2>
        <motion.h1
          className="text-2xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full Stack Developer Crafting Impactful Web Experiences
        </motion.h1>
        <motion.p
          className="text-sm leading-6 md:text-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          With a passion for delivering business-driven web solutions, I
          specialize in creating dynamic and responsive websites using
          JavaScript. My diverse skill set in UI/UX design, video editing, and
          graphic design ensures a holistic approach to digital development.
          Let’s transform your vision into a seamless online experience that
          drives results.
          <div className="flex flex-row justify-center gap-10 p-4">
            <Link to="/about" className="border-2 border-white px-4 py-2">
              Know More
            </Link>
            <Link to="/contact" className="border-2 border-white px-4 py-2">
              Book a Session
            </Link>
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Home;

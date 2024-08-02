import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/imgg.png";

const Home = () => {
  return (
    <div className="flex flex-row justify-center gap-10 md:max-w-[70%] max-w-[90%] mx-auto my-auto flex-wrap-reverse min-h-[90vh] items-center">
      <div className="md:max-w-[50%] font-poppins text-white flex flex-col gap-5 text-center justify-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full Stack Developer Crafting Impactful Web Experiences
        </motion.h1>
        <motion.p
          className="font-light text-xl"
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
        </motion.p>
        <div className="flex flex-row justify-center gap-5 m-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              to="/about"
              className="border-2 border-white px-4 py-2 text-md"
            >
              Know More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              to="/contact"
              className="border-2 border-white px-4 py-2 text-md"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img
          src={img}
          className="border-2 border-white rounded-full p-0 max-w-sm"
        />
      </motion.div>
    </div>
  );
};

export default Home;

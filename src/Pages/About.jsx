import React from "react";
import { motion } from "framer-motion";
import Gallery from "../Components/Gallery";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-6 gap-4 py-[5%] min-h-[100vh] text-white max-w-[90%] m-auto font-poppins"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="md:col-span-2 md:row-span-2 border-2 border-white text-center flex flex-col gap-5 justify-center p-5"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold">Who I am ?</h2>
        <p>
          I'm Avdhesh, a seasoned Full Stack Web Developer with extensive
          expertise in JavaScript, React, Node.js, MongoDB and Express. I have a
          strong background in front-end development, UI/UX design, and
          WordPress. I’m passionate about creating engaging and scalable web
          applications that solve business problems and add value to companies
        </p>
      </motion.div>
      <motion.div
        className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3 border-2 border-white p-5 flex flex-col gap-5 justify-center items-center text-center"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold">
          skills that I bring to the table ?
        </h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center max-w-[90%] p-2">
          <div className="border-2 border-white p-2">HTML</div>
          <div className="border-2 border-white p-2">CSS</div>
          <div className="border-2 border-white p-2">JAVASCRIPT</div>
          <div className="border-2 border-white p-2">REACT</div>
          <div className="border-2 border-white p-2">NODE.JS</div>
          <div className="border-2 border-white p-2">EXPRESS.JS</div>
          <div className="border-2 border-white p-2">MONGODB</div>
          <div className="border-2 border-white p-2">WORDPRESS</div>
          <div className="border-2 border-white p-2">VERCEL</div>
          <div className="border-2 border-white p-2">TAILWIND</div>
          <div className="border-2 border-white p-2">
            VIDEO EDITING AND DESIGNING
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-5 border-2 border-white p-5 flex flex-col gap-5 justify-center text-center items-center"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold">some of my past experiences</h2>
        <p className="max-w-[90%] leading-7">
          I developed a Full Stack e-commerce application with features like
          product management, a shopping cart, and payment gateway integration.
          I also created a WordPress website for Patanjali Naturopathy Hospital
          with a therapy booking system. Additionally, I worked with an SDE-2 at
          Amazon USA, helping him grow his YouTube and LinkedIn presence to over
          5 million views and 50k subscribers on YouTube, and 100k+ followers on
          LinkedIn
        </p>
      </motion.div>
      <motion.div
        className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 border-2 border-white p-5 flex flex-col justify-center text-center gap-5 items-center"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold">some of your key achievements</h2>
        <p className="max-w-[90%] leading-7">
          One of my notable achievements is producing a video that was showcased
          to multiple ministers, including Yogi Adityanath Ji, and contributing
          to the *Rashtra Raksha Sutra* prospectus presented to PM Narendra Modi
          Ji. I also successfully developed and launched the official website
          for Patanjali Naturopathy Hospital, enhancing their brand presence
          online.
        </p>
      </motion.div>
      <motion.div
        className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1 border-2 border-white p-5 flex flex-col justify-center text-center items-center gap-5"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold">areas I can serve for you</h2>
        <p className="max-w-[90%] leading-7">
          I can assist with developing and deploying full stack web
          applications, designing intuitive and engaging user interfaces,
          creating custom WordPress websites, and developing e-commerce
          platforms. I also offer video editing, graphic design, and web hosting
          services to ensure a complete and professional online presence.
        </p>
      </motion.div>
      <motion.div
        className="md:col-span-2 md:row-span-4 md:col-start-5 md:row-start-3 border-2 border-white p-5 flex flex-col justify-center items-center text-center gap-5"
        variants={itemVariants}
      >
        <h2 className="text-4xl font-extrabold">Some Old Memories </h2>
        <Gallery />
      </motion.div>
    </motion.div>
  );
};

export default About;

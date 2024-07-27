import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AccordionItem component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="border-b border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 px-6 flex justify-between items-center border-2 border-white rounded-lg text-white font-poppins font-light hover:bg-gray-700 transition-colors duration-300"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              height: { duration: 0.3 },
            }}
            className="px-6 py-4 bg-gray-700 text-white font-poppins"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// About page
const About = () => {
  const accordionItems = [
    {
      title: "Avdhesh, can you tell me a bit about yourself?",
      content:
        "Absolutely! I'm Avdhesh, a seasoned Full Stack Web Developer with extensive expertise in JavaScript, React, Node.js, MongoDB and Express. I have a strong background in front-end development, UI/UX design, and WordPress. I’m passionate about creating engaging and scalable web applications that solve business problems and add value to companies",
    },
    {
      title: "What skills do you bring to the table, Avdhesh?",
      content:
        " I specialize in Full Stack Web Development, UI/UX Design, WordPress Development, and E-commerce Solutions. Additionally, I have experience in Video Editing & Production, Graphic Design, and Web Hosting & Deployment. My diverse skill set allows me to deliver comprehensive web-based solutions.",
    },
    {
      title: "In which areas can you serve us, Avdhesh?",
      content:
        "I can assist with developing and deploying full stack web applications, designing intuitive and engaging user interfaces, creating custom WordPress websites, and developing e-commerce platforms. I also offer video editing, graphic design, and web hosting services to ensure a complete and professional online presence.",
    },
    {
      title: "Can you share some of your past experiences with us, Avdhesh?",
      content:
        "Certainly! I developed a Full Stack e-commerce application with features like product management, a shopping cart, and payment gateway integration. I also created a WordPress website for Patanjali Naturopathy Hospital with a therapy booking system. Additionally, I worked with an SDE-2 at Amazon USA, helping him grow his YouTube and LinkedIn presence to over 5 million views and 50k subscribers on YouTube, and 100k+ followers on LinkedIn.",
    },
    {
      title: "What are some of your key achievements, Avdhesh?",
      content:
        "One of my notable achievements is producing a video that was showcased to multiple ministers, including Yogi Adityanath Ji, and contributing to the *Rashtra Raksha Sutra* prospectus presented to PM Narendra Modi Ji. I also successfully developed and launched the official website for Patanjali Naturopathy Hospital, enhancing their brand presence online.",
    },
    {
      title: " How do you approach your projects, Avdhesh?",
      content:
        "I approach each project with a focus on understanding the client’s needs and goals. I prioritize creating a user-friendly experience, maintaining brand consistency, and delivering high-quality, scalable solutions. My goal is to ensure that each project not only meets but exceeds client expectations.",
    },
    {
      title: " Why should we choose you, Avdhesh?",
      content:
        "You should choose me because I bring a comprehensive skill set, a proven track record of successful projects, and a dedication to delivering high-quality solutions. My diverse experience allows me to handle various aspects of web development and design, ensuring a cohesive and professional result for your business.",
    },
  ];

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
      className="bg-gray-900 flex flex-col justify-center gap-5  w-[100vw] bg-gradient-to-r from-slate-900 to-slate-700 m-0 px-[10%] py-[5%] min-h-[90vh]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* <motion.h1
        className="text-xl md:text-4xl font-poppins font-light text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Clients Often Ask me About...
      </motion.h1> */}
      {accordionItems.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <AccordionItem title={item.title} content={item.content} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default About;

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
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without having to leave your HTML.",
    },
    {
      title: "What is Framer Motion?",
      content:
        "Framer Motion is a library for animations in React. It provides powerful and simple animation capabilities for components with a straightforward API.",
    },
    {
      title: "How do you use Tailwind CSS?",
      content:
        "Tailwind CSS is used by adding utility classes directly to your HTML or JSX elements. You configure your design system through a configuration file.",
    },
    {
      title: "How do you use Tailwind CSS?",
      content:
        "Tailwind CSS is used by adding utility classes directly to your HTML or JSX elements. You configure your design system through a configuration file.",
    },
    {
      title: "How do you use Tailwind CSS?",
      content:
        "Tailwind CSS is used by adding utility classes directly to your HTML or JSX elements. You configure your design system through a configuration file.",
    },
    {
      title: "How do you use Tailwind CSS?",
      content:
        "Tailwind CSS is used by adding utility classes directly to your HTML or JSX elements. You configure your design system through a configuration file.",
    },
    {
      title: "How do you use Tailwind CSS?",
      content:
        "Tailwind CSS is used by adding utility classes directly to your HTML or JSX elements. You configure your design system through a configuration file.",
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

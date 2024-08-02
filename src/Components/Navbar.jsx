import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-white w-full h-[10vh] p-4 text-xl z-10 relative ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
        <div className="text-xl font-bold text-white font-poppins">
          <Link to="/">
            <img width="64" height="64" src={logo} alt="source-code--v3" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center  items-center space-x-6 font-poppins">
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500">
            Contact Us
          </Link>
          <a
            target="_blank"
            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66a38b7d6e6b499ee335b3ac"
            download
            className="text-white hover:text-blue-500 border-2 border-white px-4 py-2 rounded font-poppins"
          >
            Resume
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <a
            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66a38b7d6e6b499ee335b3ac" // Replace with the actual path to your resume
            download
            className="text-white hover:text-blue-500  text-md px-4 py-2 rounded font-poppins mr-4"
          >
            Resume
          </a>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <motion.path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.path
                  d="M4 6h16M4 12h16m-7 6h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 text-white z-10 md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <motion.path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </svg>
            </button>
            <Link
              to="/"
              className="text-white hover:text-blue-500 text-2xl mb-4 font-poppins font-light"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-500 text-2xl mb-4 font-poppins font-light"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-blue-500 text-2xl mb-4 font-poppins font-light"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-500 text-2xl mb-4 font-poppins font-light"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <a
              href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66a38b7d6e6b499ee335b3ac" // Replace with the actual path to your resume
              download
              className="text-white hover:text-blue-500 border-2 border-white px-4 py-2 rounded font-poppins mb-6"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

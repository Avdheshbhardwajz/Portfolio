import React from "react";
import { motion } from "framer-motion";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-r from-slate-900 to-slate-700 gap-10 p-[5%] text-white font-poppins flex flex-row justify-center w-[100%] items-center flex-wrap">
      <motion.div
        className="border-2 border-white p-4 md:max-w-[40%] max-w-[90%] text-center flex-col flex gap-5 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-poppins font-bold">Get in Touch</h2>
        <p className="text-lg md:text-xl font-light">
          I’d love to hear from you! Whether you have a project in mind, a
          question about my services, or just want to connect, feel free to
          reach out. Fill out the form on the right, and I'll get back to you as
          soon as possible. Let's explore how we can work together to bring your
          vision to life!
        </p>
        <a
          className="px-4 py-2 border-white border-2 font-poppins text-xl"
          target="_blank"
          href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66a38b7d6e6b499ee335b3ac"
        >
          Resume
        </a>
      </motion.div>
      <motion.div
        className="md:min-w-[40%] text-center min-w-[90%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default Contact;

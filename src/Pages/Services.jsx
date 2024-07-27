import React from "react";
import { motion } from "framer-motion";
import Service from "../Components/Service";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust this value for the delay between each child's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[90vh] md:min-h-[90vh] p-8 md:p-5 box-border bg-gradient-to-r from-slate-900 to-slate-700 text-white font-poppins text-center flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-row flex-wrap justify-center max-w-[70%] gap-8 min-h-[50%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Service
            title="Full Stack Web Development"
            para="Build robust and scalable web applications using JavaScript, React, Node.js, and Express. Ensure seamless integration between front-end and back-end for a smooth user experience."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="Branding"
            para="Design engaging and intuitive user interfaces. Apply best UI/UX practices to create responsive and visually appealing interfaces that enhance user satisfaction."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="WordPress Development"
            para="Create custom WordPress websites tailored to your needs. Develop feature-rich, user-friendly, and visually appealing sites that are easy to manage."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="E-commerce Solutions"
            para="Deliver tailored e-commerce platforms with product management, shopping carts, secure payment gateways, and advanced sorting and filtering options for a smooth shopping experience."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="Video Editing & Production"
            para="Produce high-quality videos that capture attention and effectively communicate your message. Offer professional video editing and production for various purposes."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="Graphic Design"
            para="Enhance your brand's visual identity with creative graphic design. Design logos, brochures, social media graphics, and promotional materials that make your brand stand out."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Service
            title="Web Hosting & Deployment"
            para="Manage web hosting and deployment to ensure your site is accessible, secure, and performs optimally. Experienced with platforms like Hostinger for reliable and fast website hosting."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;

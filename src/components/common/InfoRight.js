import React from "react";
import { motion } from "framer-motion";

export const InfoRight = ({ title, text, img }) => {
  return (
    <motion.section
      className="max-w-[1200px] mx-auto px-4 py-12"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      whileInView={{ opacity: 1, x: 0 }} // Animate into position
      viewport={{ once: true, amount: 0.3 }} // Animate only once when 30% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        {/* Left Column (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img}
            alt={title}
            className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Right Column (Text) */}
        <div className="md:w-1/2 text-center md:text-right mb-6 md:mb-0">
          <h2 className="text-6xl font-arabFontNana text-br3 mb-4">{title}</h2>
          <p className="text-xl text-gray-700">{text}</p>
        </div>
      </div>
    </motion.section>
  );
};



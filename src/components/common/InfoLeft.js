import React from "react";
import { motion } from "framer-motion";

export const InfoLeft = ({ title, text, img }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 overflow-hidden">
      <motion.section
        className="w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Column (Text) */}
          <div className="md:w-1/2 text-center md:text-right mb-6 md:mb-0">
            <h2 className="text-6xl font-arabFontNana text-br3 mb-6">{title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{text}</p>
          </div>
          {/* Right Column (Image) */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img}
              alt={title}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

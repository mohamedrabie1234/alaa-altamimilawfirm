import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/images/footer.jpg";

export const Responsabilities = () => {
  return (
    <section
      id="responsabilities"
      className="relative bg-cover bg-center h-auto py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
      }}
    >
      {/* Heading Section */}
      <div className="flex flex-col items-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white font-arabFont2 mb-6 text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            stiffness: 300,
            damping: 20,
            duration: 0.8,
          }}
        >
          المسؤولية المجتمعية للمكتب
        </motion.h1>
        <div className="w-20 h-[3px] bg-yellow-400 mb-6"></div>
      </div>

      {/* Content Box */}
      <motion.div
        className="max-w-4xl mx-auto bg-gradient-to-r from-br3 to-br2 p-8 sm:p-12 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-white text-center text-lg sm:text-xl leading-relaxed">
          يمتلك مكتبنا إيمان صادق بدوره المجتمعي في التثقيف والتدريب القانوني من
          خلال المشاركة في الندوات العلمية والبرامج التعليمية والتثقيفية
          المدعومة من القطاع الخاص أو العام. فضلاً عن برامج الإصلاح القانوني
          والقضائي التي نحرص دائماً على التعاون والمشاركة فيها وتقديم الدعم
          الكامل
          <br />
          المستمر لها
        </p>
      </motion.div>
    </section>
  );
};
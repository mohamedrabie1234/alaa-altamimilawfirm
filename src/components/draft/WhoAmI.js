import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import dc from "../assets/images/logo.png";
import bg from "../assets/images/bg_whoAmI.png";
export const WhoAmI = () => {
  const [content, setContent] = useState({
    paragraph1: "",
    visionTitle: "",
    visionText: "",
    missionTitle: "",
    missionText: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "content", "whoAmI");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContent(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative bg-cover bg-center h-auto py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
      }}
    >
      <motion.h1
        className="text-5xl font-bold text-white font-arabFont underline decoration-[#F7A617] underline-offset-8 text-center mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        من انا
      </motion.h1>

      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center px-4 py-8">
        <motion.div
          className="w-full md:w-2/3 text-white text-2xl leading-8 text-right order-2 md:order-2"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <motion.p className="mb-16" custom={0} variants={fadeInVariant}>
            {content.paragraph1 || "Loading..."}
          </motion.p>

          <motion.h2
            className="text-5xl font-arabFontNana text-logoColor  mb-2"
            custom={1}
            variants={fadeInVariant}
          >
            {content.visionTitle || "يتم التحميل..."}
          </motion.h2>
          <motion.p className="mb-16" custom={2} variants={fadeInVariant}>
            {content.visionText || "Loading..."}
          </motion.p>

          <motion.h2
            className="text-5xl font-arabFontNana text-logoColor  mb-2"
            custom={3}
            variants={fadeInVariant}
          >
            {content.missionTitle || "Loading..."}
          </motion.h2>
          <motion.p custom={4} variants={fadeInVariant}>
            {content.missionText || "Loading..."}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-6 order-1 md:order-1"
          initial="hidden"
          animate="visible"
          variants={slideInVariant}
        >
          <img
            src={dc}
            alt="Law Office"
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

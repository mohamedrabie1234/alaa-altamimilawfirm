import React from "react";
import AboutUsImage from "../../assets/images/about-us.jpg"; 

export const AboutUs = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="h-[420px] relative">
        {/* Image */}
        <img
          src={AboutUsImage}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-arabFont4 text-white z-10 pt-20">
        <h1
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
          style={{
            textShadow:
              "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          من نحن
        </h1>
      </div>
    </div>
  );
};
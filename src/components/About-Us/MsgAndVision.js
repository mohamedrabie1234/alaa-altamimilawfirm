import React, { useState } from "react";
import { FaEye, FaEnvelope } from "react-icons/fa"; // Import icons
import eye from "../../assets/images/eye-scan.png";
import goal from "../../assets/images/goal.png";

export const MsgAndVision = () => {
  const [activeTab, setActiveTab] = useState("vision"); // State to manage active tab

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Headings Container */}
      <div className="w-full h-[94px] mx-auto flex justify-center items-center gap-8 mb-8 bg-gray-100 rounded-lg shadow-md">
        {/* Vision Heading */}
        <div
          className={`relative cursor-pointer flex-1 flex flex-col items-center justify-center h-full ${
            activeTab === "vision" ? "border-t-4 border-br3 bg-slate-100" : ""
          }`}
          onClick={() => setActiveTab("vision")}
        >
          <h3
            className={`text-2xl font-semibold transition-colors w-full text-center flex items-center justify-center gap-2 ${
              activeTab === "vision" ? "text-br3" : "text-gray-700"
            }`}
          >
            <FaEye className="inline-block" /> {/* Eye icon */}
            رؤية المكتب
          </h3>
        </div>

        {/* Mission Heading */}
        <div
          className={`relative cursor-pointer flex-1 flex flex-col items-center justify-center h-full ${
            activeTab === "mission" ? "border-t-4 border-br3 bg-slate-100" : ""
          }`}
          onClick={() => setActiveTab("mission")}
        >
          <h3
            className={`text-2xl font-semibold transition-colors w-full text-center flex items-center justify-center gap-2 ${
              activeTab === "mission" ? "text-br3" : "text-gray-700"
            }`}
          >
            <FaEnvelope className="inline-block" /> {/* Message icon */}
            رسالة المكتب
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        {activeTab === "vision" && (
          <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-200 p-4 rounded-lg">
            <img
              src={eye}
              alt="Our Vision"
              className="w-[280px] h-[280px] rounded-lg shadow-lg object-cover eye-filter"  // Fixed size
            />
            <p className="text-xl text-gray-900 leading-relaxed text-right">
              يتطلع مكتب الاستاذ الدكتور/ علاء التميمي، لأن يكون مركزا دوليا متميزا فى اعمال المحاماة وبيت خبرة دولى متميز لاعمال المحاماة وانشطة الاستثمار
            </p>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-200 p-4 rounded-lg">
            <img
              src={goal}
              alt="Our Mission"
              className="w-[280px] h-[280px] rounded-lg shadow-lg object-cover eye-filter" // Fixed size
            />
            <p className="text-xl text-gray-900 leading-relaxed text-right">
              يلتزم مكتب الاستاذ الدكتور/علاء التميمي بتقديم خدمات قانونية وفق الاصول والمعايير المهنية، ووفق اقصى درجات المصداقية والامانة والنزاهة والثقة
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
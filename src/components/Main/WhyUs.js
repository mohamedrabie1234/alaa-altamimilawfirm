import React, { useState } from "react";
import { FaUsers, FaHandsHelping, FaAward, FaLightbulb } from "react-icons/fa"; // Import icons

const whyUsData = [
  {
    id: 1,
    icon: <FaUsers className="text-5xl mb-4" />,
    title: "منازعات القضاء الادارى",
    description: "يختص المكتب بقضايا القضاء الادارى والمحاكم التاديبية امام محاكم مجلس الدولة ولجان فض المنازعات",
    img: "https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: <FaHandsHelping className="text-5xl mb-4" />,
    title: "التحكيم والوسائل البديلة لفض المنازعات",
    description: "يقدم مكتبنا خدمة فى غاية التميز فى مجالات التحكيم والتوفيق والوساطة امام هيئات ومراكز التحكيم المحلية والدولية باللغات العربية والانجليزية",
    img: "https://cdn.al-ain.com/lg/images/2018/9/19/85-003206-egypt-human-rights-brotherhood-judiciary-judgments_700x400.jpeg",
  },
  {
    id: 3,
    icon: <FaAward className="text-5xl mb-4" />,
    title: "اعمال الملاحة البحرية والجوية",
    description: "يقدم المكتب خدمات قانونية مميزة فى كافة ما يتعلق باعمال الملاحة البحرية والجوية، اهمها: شراء أو بيع أو تأجير أو استئجار السفن أو الطائرات، النقل البحرى والنقل الجوى، وعمليات الشحن أو التفريغ، استخدام الملاحين أو الطيارين أو غيرهم من العاملين فى السفن أو الطائرات",
    img: "https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    icon: <FaLightbulb className="text-5xl mb-4" />,
    title: "الترجمة القانونية",
    description: "يقدم المكتب خدمات فائقة التميز فى مجال الترجمة القانونية لكافة انواع العقود واللوائح والوثائق وغيرها ",
    img: "https://cdn.pixabay.com/photo/2023/12/10/19/08/judgment-8442199_960_720.png",
  },
];

export const WhyUs = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card for modal
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle full description

 

  const handleCloseModal = () => {
    setSelectedCard(null); // Close modal
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev); // Toggle full description
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 bg-gray-100">
      {/* Heading */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center">لماذا نحن</h1>
        <div className="w-16 h-[2px] bg-br2 mb-4"></div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyUsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-center border-2 border-gray-200 hover:border-br1 transition-all duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="text-br3">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600">
              {item.id === 3 && !showFullDescription
                ? `${item.description.slice(0, 100)}...` // Truncate description for id: 3
                : item.description}
            </p>

            {/* Read More Button */}
            {item.id === 3 && (
              <button
                onClick={toggleDescription}
                className="mt-4 text-br3 hover:underline"
              >
                {showFullDescription ? "قراءة أقل" : "قراءة المزيد"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Middle Divider */}
      <div className="flex justify-center w-full max-w-6xl mt-8">
        <div className="w-2/3 border-t border-gray-400" id="articles"></div>
      </div>

      {/* Modal for the selected card */}
      {selectedCard && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              {selectedCard.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedCard.title}
              </h3>
              <img
                src={selectedCard.img}
                alt={selectedCard.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700">{selectedCard.description}</p>
            </div>

            {/* Exit Button */}
            <button
              onClick={handleCloseModal}
              className="w-full py-2 bg-br3 text-white rounded-md hover:bg-br2 focus:outline-none"
            >
              Exit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyUs;
import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Public-Private-Partnership.png",
    title: "القضايا المدنية",
    description:
      ".كافة المنازعات الخاصة بالملكية والايجار والتأمين والرهن والوكالة والهبة والجمعيات الاهلية والاندية الرياضية وقضايا التعويض وغيرها من القضايا المدنية",
    link: "#",
  },
  {
    id: 4,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Criminal-Law-1.png",
    title: "قضايا الإفلاس",
    description:
      "رفع وادارة قضايا الافلاس والصلح الواقى منه واجراءات اعادة الهيكلة وتصفية الشركات",
    link: "#",
  },
  {
    id: 5,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/corporate-law.png",
    title: "عمليات البنوك",
    description:
      "تقديم كافة الاستشارات القانونية فى مجال عمليات البنوك، وتصميم العقود المصرفية وادارة التعاقدات المرتبطة بها، والقضايا والمنازعات امام المحاكم وهيئات التحكيم",
    link: "#",
  },
  {
    id: 6,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Administrative-Law.png",
    title: "البنية التحتية والعقارات والطاقة",
    description:
      "يقدم مكتبنا خدمات قانونية مميزة فى مجال مشروعات البنية التحتية والطاقة تتسم  بالشمولية والفعالية رغم ما تتسم به هذه الخدمات من تطور وتعقيد",
    link: "#",
  },

  {
    id: 8,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/tax.png",
    title: "تأسيس الشركات التجارية",
    description:
      "لدى مكتبنا خبرة استثنائية وفريق متخصص في مجال تأسيس الشركات، وتشمل تحديدًا\n تأسيس الشركات وقيدها وإشهارها واستخراج كافة التراخيص الضرورية.\n تسجيل العلامات التجارية، والأسماء التجارية، وبراءات الاختراع وأسماء النطاق.\n إعداد لوائح حوكمة الشركات، وضبط الأنظمة الداخلية للشركة طبقًا لها.\n إدارة عمليات الاستحواذ ودمج الشركات.\n التمثيل القانوني للشركات (من خلال حضور الاجتماعات، وتوقيع العقود، والاتفاقيات).\n إبداء الرأي القانوني في كافة المسائل التي تحتاج إلى استفسار.\n إدارة قضايا الشركات أمام المحاكم وهيئات التحكيم.\n تأسيس كيانات الاستثمار الأجنبي من خلال استصدار التراخيص اللازمة ومراجعة وإعداد عقودها القانونية اللازمة لممارسة تلك الشركات لنشاطها",
  },
  {
    id: 9,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Criminal-Law-1.png",
    title: "قضايا أسواق رأس المال",
    description:
      "يمتلك مكتبنا خبرة فى منازعات اسواق رأس المال، وعمليات الدمج والاستحواذ، والاكتتاب العام ، والصفقات الخاصة،  وتقديم الاستشارات القانونية فى مجال اكتتاب الاسهم وتداولها، وصناديق الاستثمار والمحافظ المالية وغيرها",
  },
  {
    id: 10,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Public-Private-Partnership.png",
    title: "المراجعات القانونية",
    description:
      "   يقدم مكتبنا خدمات مميزة فى مجال مراجعة وتدقيق كافة اللوائح القانونية، والعقود، والسياسات، والأنظمة الداخلية، والتعليق عليها وتقديم المقترحات بشأنها",
  },
  {
    id: 7,
    icon: "https://consortiolawfirm.com/wp-content/uploads/2024/08/Litigation-and-Arbitration.png",
    title: "القضايا التجارية",
    description:
      "يتميز المكتب فى هذا النوع من القضايا، مثل عقود البيع التجارى والايجار والرهن والوكالة والتأمين بمختلف انواعها، والوكالات التجارية، وقضايا الشيكات والكمبيالات والسندات لأمر، وعقود توريد البضائع والخدمات، والصناعة واعمال الصرافة، ومجالات النشر، والطباعة،  والاتصالات، والإعلان،  الاستغلال التجارى لبرامج الحاسب الآلى والبث الفضائى عبر الأقمار الصناعية، العمليات الاستخراجية لمواد الثروات الطبيعية من المناجم والمحاجر ومنابع النفط والغاز وغيرها، ومقاولات تشييد العقارات أو شراؤها أو استئجارها بقصد بيعها أو تأجيرها. واعمال مكاتب السياحة ومكاتب التصدير والاستيراد والإفراج الجمركى ومكاتب الاستخدام ومحال البيع بالمزاد العلنى .واعمال الفنادق والمطاعم، وقضايا المنافسة التجارية",
  },
];

export const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null); // State to track the selected service

  // Function to open the modal
  const openModal = (service) => {
    setSelectedService(service);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-white pt-20" id="whoweare">
      {/* Title Section */}
      <div className="w-full text-center py-12">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center">
          خدماتنا
        </h1>
        {/* Horizontal Line */}
        <span className="w-16 h-[2px] bg-br2 block mx-auto mt-4"></span>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-8">
        {/* Grid Container */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col mx-5 border-2 border-gray-200 hover:border-br1 transition-all duration-300 hover:scale-105"
            >
              {/* Heading with Icon */}
              <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
                {/* Icon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4 object-contain icon-filter"
                />
                {/* Title */}
                <h4 className="text-2xl font-arabFont font-semibold text-gray-800">
                  {service.title}
                </h4>
              </div>

              {/* Description */}
              <p
                className="text-gray-900 mt-4 font-arabFont2 text-lg text-right"
                style={{ whiteSpace: "pre-line" }}
              >
                {service.id === 7 || service.id === 8
                  ? `${service.description.slice(0, 150)}...` // Show only the first 150 characters
                  : service.description}
              </p>

              {/* Read More Button (for id 7 and 8) */}
              {(service.id === 7 || service.id === 8) && (
                <button
                  onClick={() => openModal(service)}
                  className="mt-4 text-br1 font-arabFont2 hover:underline"
                >
                  اقرأ المزيد
                </button>
              )}
            </div>
          ))}
          <span id="why-us"></span>
        </div>
      </div>

      {/* Modal for Read More */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-arabFont font-semibold text-gray-800">
                {selectedService.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <p
              className="text-gray-900 font-arabFont2 text-lg text-right"
              style={{ whiteSpace: "pre-line" }}
            >
              {selectedService.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;

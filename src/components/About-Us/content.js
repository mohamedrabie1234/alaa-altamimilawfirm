import logo from "../../assets/images/logo.jpg";

export const Content = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={logo}
            alt="About Us"
            className="h-[530] w-auto rounded-lg shadow-lg" // Set height to 457px
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center">
          <div
            className="text-base md:text-2xl text-gray-900 leading-relaxed text-right "
            style={{ width: "550px", height: "320px" }} // Set width and height
          >
            يعد مكتب الاستاذ الدكتور / علاء التميمي للمحاماة والاستشارات القانونية احد المكاتب الرائدة فى كافة مجالات العمل القانونى. ويتخصص المكتب فى القضايا المدنية والتجارية والادارية داخل مصر وخارجها، كما يعمل المكتب فى قضايا التحكيم والوساطة والتوفيق وصياغة العقود وتأسيس الشركات التجارية وقضايا الرياضة والترجمة القانونية
          </div>
        </div>
      </div>
    </div>
  );
};
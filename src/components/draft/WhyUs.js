import React from "react";
import { InfoSections } from "../common/InfoSections";

export const WhyUs = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12  ">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-br3 font-arabFont2 text-center mb-6">
          لماذا مكتب الاستاذ الدكتور
        </h1>
        <h1 className="text-7xl font-bold text-br2 font-arabFont4 text-center mb-6">
          علاء التميمي
        </h1>
        <div className="w-16 h-[2px] bg-br2 "></div>
      </div>
      <InfoSections />
    </section>
  );
};

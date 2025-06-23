import React from "react";
import designPatternImage from "../../../assets/Solutions/FreightSourcing/design-pattern-1.webp"; // use your uploaded design

const SmartFreightManagement = ({ heading, points, imageSrc }) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#14204A] to-[#1F2196] py-20 px-4 md:px-0 md:py-[80px] overflow-hidden">
      {/* Main content */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-[80px] relative z-10">
        {/* Text Box */}
        <div className="flex flex-col w-full max-w-[358px] md:max-w-[506px] gap-[12px] md:gap-[32px]">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center md:text-left">
            {heading}
          </h2>
          <ul className="text-white text-base md:text-lg list-disc pl-5 space-y-4">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Image Box */}
        {/* Image Box */}
        <div className="w-full flex justify-center items-center">
          <img
            src={imageSrc}
            alt={heading}
            className="w-full max-w-[694px] h-auto rounded-[8px] object-cover"
          />
        </div>
      </div>

      {/* Design Pattern Image at Bottom Right */}
      <img
        src={designPatternImage}
        alt="Design Pattern"
        className="absolute bottom-0 right-0 w-[400px] md:w-[540px] z-0"
      />
    </section>
  );
};

export default SmartFreightManagement;

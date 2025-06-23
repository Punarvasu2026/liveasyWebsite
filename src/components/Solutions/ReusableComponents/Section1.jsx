import React from "react";

const FreightSection1 = ({ imageSrc, heading, text }) => {
  return (
    <section className="flex flex-col items-center bg-white w-full px-4 sm:px-6 lg:px-10 pt-[40px] pb-[40px] sm:pt-20 sm:pb-20 mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-[48px] sm:gap-[80px] w-full max-w-[1280px] h-auto">
        {/* Image Container */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
          <img
            src={imageSrc}
            alt={heading}
            className="w-full max-w-[358px] sm:max-w-[618px] h-auto object-contain"
          />
        </div>

        {/* Text Container */}
        <div className="w-full sm:w-[582px] flex flex-col justify-center self-center gap-4 sm:gap-6">
          <h2 className="text-[#1D2B7F] text-[24px] sm:text-[32px] font-bold leading-tight">
            {heading}
          </h2>
          <p className="text-[#444] text-sm sm:text-base font-[18px]">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default FreightSection1;

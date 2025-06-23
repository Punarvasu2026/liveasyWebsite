import React from "react";

const LogisticsInfoBlock = ({ imageSrc, text }) => {
  return (
    <section className="w-full max-w-[1440px] px-[80px] py-[80px] mx-auto">
      <div className="flex items-center gap-[80px] max-w-[1280px] mx-auto">
        {/* Image */}
        <img
          src={imageSrc}
          alt="Logistics Info"
          className="w-[618px] h-[389px] rounded-[12px] object-cover"
        />

        {/* Text */}
        <div className="w-[582px] h-auto flex flex-col justify-center gap-[40px]">
          <p className="font-dm text-[18px] leading-[30px] text-[#40474F] font-normal">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogisticsInfoBlock;

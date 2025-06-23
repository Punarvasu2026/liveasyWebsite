import React from "react";

const LogisticsBanner = ({ heading, text, bgImage }) => {
  return (
    <section
      className="w-full min-h-[660px] h-auto relative bg-cover bg-center bg-no-repeat px-4 sm:px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-20 sm:top-[100px] left-4 sm:left-[80px] max-w-full sm:max-w-[872px] flex flex-col gap-6 text-white">
        <h2 className="font-sora font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[120%]">
          {heading}
        </h2>
        <p className="font-sans font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[130%]">
          {text}
        </p>
      </div>
    </section>
  );
};

export default LogisticsBanner;

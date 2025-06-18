import React from "react";

const LogisticsBanner = ({ heading, text, bgImage }) => {
  return (
    <section
      className="w-full h-[660px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-[100px] left-[80px] w-[872px] h-auto flex flex-col gap-[32px] text-white">
        <h2 className="font-sora font-bold text-[48px] leading-[120%]">
          {heading}
        </h2>
        <p className="font-sans font-normal text-[24px] leading-[130%]">
          {text}
        </p>
      </div>
    </section>
  );
};

export default LogisticsBanner;

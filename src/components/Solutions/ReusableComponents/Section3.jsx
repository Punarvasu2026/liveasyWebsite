import React from "react";
import designImage from "../../../assets/Solutions/FreightSourcing/design-pattern-2.webp"; // use your uploaded design

const ReverseAuctionSection = ({ heading, points = [], mainImage }) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-white px-4 md:px-[80px] py-[40px] md:py-[80px] flex items-center justify-center overflow-hidden">
      {/* Design Pattern Image */}
      {designImage && (
        <img
          src={designImage}
          alt="Design Pattern"
          className="absolute bottom-0 left-0 w-[300px] md:w-[420px] z-0 translate-x-[-50%] md:translate-x-0"
        />
      )}

      {/* Inner Frame */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-center w-full max-w-[1280px] gap-[32px] md:gap-[80px] relative z-10">
        {/* Image Section */}
        {mainImage && (
          <div className="w-full md:flex-1 flex justify-center md:justify-start items-center">
            <img
              src={mainImage}
              alt="Illustration"
              className="w-full max-w-full h-auto rounded-[5.63px] md:rounded-[8px] object-cover"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="w-full md:flex-1 flex flex-col justify-center text-left">
          {heading && (
            <h2 className="text-[#1B3C8D] text-[24px] md:text-[32px] font-semibold leading-tight mb-[32px]">
              {heading}
            </h2>
          )}

          {points.length > 0 && (
            <ul className="list-disc pl-5 text-[#223678] text-[14px] md:text-base leading-[1.7] space-y-[20px]">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReverseAuctionSection;

import React from "react";
import InsightsCard from "./BlogsCard";

const InsightsSection = ({
  insights = [],
  title = "Related Blogs you also may Like",
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col gap-[10px] bg-white">
      {/* Inner Container */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[40px]">
        {/* Heading Section */}
        {title && (
          <div className="text-center w-full flex flex-col gap-[8px]">
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1A1A] leading-[48px]">
              {title}
            </h2>
          </div>
        )}

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
          {insights.map((item, index) => (
            <InsightsCard
              key={index}
              image={item.image}
              heading={item.heading}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;

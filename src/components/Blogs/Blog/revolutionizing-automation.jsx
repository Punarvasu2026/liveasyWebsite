import React from "react";
import AutomationImage from "../../../assets/Blogs/Blog/revolutionizing-automation.png"; // Adjust path as needed

const AutomationHighlightSection = () => {
  return (
    <section className="w-full max-w-[1440px] px-[80px] py-[80px] bg-white">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[80px] items-center">
        {/* Image */}
        <div>
          <img
            src={AutomationImage}
            alt="Automation in logistics"
            className="w-[618px] h-[435px] rounded-[12px] object-cover"
          />
        </div>

        {/* Content Box */}
        <div className="max-w-[582px] flex flex-col gap-[40px]">
          {/* Heading */}
          <h2 className="text-[#22377C] font-sora font-semibold text-[40px] leading-[100%]">
            Revolutionizing logistics: <br />
            how automation is <br />
            transforming the freight <br />
            transport industry
          </h2>

          {/* Paragraph */}
          <p className="text-[#40474F] font-dm text-[18px] leading-[30px]">
            Discover the game-changing impact of <strong>CargoPro</strong>{" "}
            automation on freight transportation. From boosting efficiency and
            cutting costs to elevating customer satisfaction, our technology.
          </p>

          {/* Button */}
          <button className="w-[273px] py-[21px] px-[30px] rounded-full bg-[#22377C] text-white font-medium text-base hover:bg-[#1b2e6a] transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationHighlightSection;

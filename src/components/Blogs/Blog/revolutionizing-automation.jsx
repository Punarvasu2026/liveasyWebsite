import React from "react";
import { useNavigate } from "react-router-dom";

const AutomationHighlightSection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/blogs/revolutionizing-logistics");
  };

  return (
    <section className="w-full max-w-[1440px] px-[80px] py-[80px] bg-white">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[80px] items-center">
        {/* Image */}
        <div>
          <img
            src="/images/Blogs/Blog/revolutionizing-automation.webp"
            alt="Automation in logistics"
            loading="lazy"
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
          <button
            onClick={handleReadMore}
            className="w-[273px] py-[21px] px-[30px] rounded-full bg-[#22377C] text-white font-medium text-base hover:bg-[#1b2e6a] transition"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationHighlightSection;

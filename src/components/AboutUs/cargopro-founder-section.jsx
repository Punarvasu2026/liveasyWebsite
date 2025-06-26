import React from "react";
import founderImage from "../../assets/AboutCargoPro/cargopro-founder.webp"; // Update path as needed

const FounderSection = () => {
  return (
    <section className="w-full bg-[#14204A] px-4 md:px-[80px] py-[40px] md:py-[80px] flex justify-center">
      {/* Inner Container */}
      <div className="w-full max-w-[1280px] bg-[#22377C] rounded-[13px] p-[24px] md:p-[40px]">
        {/* Heading */}
        <h2 className="text-[#FCFCFC] font-dm-sans text-[28px] md:text-[40px] font-semibold leading-[100%] mb-[24px] md:mb-[40px]">
          About Founder
        </h2>

        {/* Content Row */}
        <div className="w-full flex flex-col md:flex-row gap-[32px] md:gap-[60px]">
          {/* Paragraph Container */}
          <div className="w-full md:w-[800px] bg-[#1A2A60] rounded-[12px] pt-[30px] pr-[24px] pb-[30px] pl-[24px] md:pt-[41px] md:pr-[40px] md:pb-[40px] md:pl-[40px] flex flex-col justify-between h-auto md:h-[472px]">
            {/* Text Box */}
            <div className="w-full pr-0 md:pr-[12px]">
              <p className="text-white font-dm-sans text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] font-normal">
                With a strong background in logistics and a deep passion for
                technology, he founded CargoPro to address the pressing
                challenges in the logistics industry. By combining technical
                expertise with an entrepreneurial spirit, he is driving change
                in an industry that has traditionally been fragmented and
                manual. As an entrepreneur, he is passionate about tackling
                large-scale problems and providing innovative solutions that
                drive real, impactful change. With CargoPro, we're not just
                optimizing logistics—we're reshaping the entire landscape,
                offering businesses a smarter and more efficient way to manage
                their supply chains. If you're looking to bring automation and
                innovation to your logistics operations, let's connect and
                explore how CargoPro can help drive your business forward.
              </p>
            </div>

            {/* Author */}
            <p className="text-white font-dm-sans text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] font-semibold mt-[20px] md:mt-[24px]">
              Pranav Gupta
              <br />
              Founder & CEO, CargoPro
            </p>
          </div>

          {/* Image aligned with paragraph container */}
          <div className="w-full md:w-[340px] h-[auto] md:h-[472px]">
            <img
              src={founderImage}
              alt="CargoPro Founder (Pranav Gupta)"
              loading="lazy"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

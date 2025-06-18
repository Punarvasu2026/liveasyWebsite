import React from "react";
import missionImage from "../../assets/AboutCargoPro/cargopro-mission-image.webp"; // Replace with your actual image
import icon from "../../assets/AboutCargoPro/cargopro-mission-icon.webp";

const MissionSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[80px] bg-gradient-to-t from-[#5C50E3] to-[#1F2196]">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[86px]">
        {/* Left Section */}
        <div className="flex flex-col gap-[38px] max-w-[694px]">
          {/* Heading + Para */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-white font-sora font-semibold text-[38px] leading-[50px] max-w-[531px]">
              Our Mission
            </h2>
            <p className="text-white font-dm-sans font-medium text-[18px] leading-[170%] max-w-[525px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse blandit ligula pellentesque lorem. Viverra tincidunt
              erat lobortis ut odio urna, arcu.
            </p>
          </div>
          {/* Image */}
          <img
            src={missionImage}
            alt="Mission Preview"
            className="w-[640px] h-[356px] object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-[32px] max-w-[500px]">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-[43px] rounded-[16px] p-[24px] text-white">
            <div className="flex gap-[24px]">
              <img src={icon} alt="Icon 1" className="w-[30px] h-[30px]" />
              <div className="flex flex-col gap-[20px] max-w-[398px]">
                <h3 className="text-white font-sora font-semibold text-[18px] leading-[100%]">
                  Driving Industry Transformation
                </h3>
                <p className="text-white font-dm-sans font-normal text-[16px] leading-[24px]">
                  CargoPro drives industry transformation through strategic
                  partnerships and innovative solutions to elevate logistic
                  standards and reduce cost.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-[43px] rounded-[16px] p-[24px] text-white">
            <div className="flex gap-[24px]">
              <img src={icon} alt="Icon 2" className="w-[30px] h-[30px]" />
              <div className="flex flex-col gap-[20px] max-w-[398px]">
                <h3 className="text-white font-sora font-semibold text-[18px] leading-[100%]">
                  Enabling Real-Time Visibility
                </h3>
                <p className="text-white font-dm-sans font-normal text-[16px] leading-[24px]">
                  We enable real-time visibility into logistic operations using
                  advanced tracking technologies and comprehensive analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-[43px] rounded-[16px] p-[24px] text-white">
            <div className="flex gap-[24px]">
              <img src={icon} alt="Icon 3" className="w-[30px] h-[30px]" />
              <div className="flex flex-col gap-[20px] max-w-[398px]">
                <h3 className="text-white font-sora font-semibold text-[18px] leading-[100%]">
                  Empowering Operations
                </h3>
                <p className="text-white font-dm-sans font-normal text-[16px] leading-[24px]">
                  We empower seamless logistics operations using advanced
                  tracking technologies and comprehensive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

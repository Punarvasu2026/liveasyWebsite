import React from "react";
import TakeControlOfYourLogistics from "../../../assets/Solutions/DashboardAndAnalytics/take-control-of-your-logistics.webp";

const ControlTowerSection = () => {
  return (
    <section className="w-full bg-[#266DF0] py-16 px-4 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-[595px] text-white flex flex-col gap-6">
          <h1 className="text-[44px] leading-[58px] tracking-[-1.2px] font-sans text-[#C4D9FF]">
            Take Control of Your Logistics,
            <br />
            <span className="text-white">One Click at a Time</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-sans">
            Whether you’re a supply chain manager, a logistics head, or a CXO,
            CargoPro’s Control Tower ensures you’re never in the dark. Our
            mission is to empower your teams with tools that aren’t just
            informative—they’re transformative.
          </p>
          <a
            href="https://calendly.com/pranav-cargopro/30min"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center w-[273px] h-[60px] rounded-full bg-white text-primaryBlue text-[18px] font-raleway font-semibold leading-[100%] hover:bg-gray-100 transition-colors"
          >
            Schedule Demo
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[790px] h-auto">
          <img
            src={TakeControlOfYourLogistics} // 🔁 replace with actual image path
            alt="Control Tower Illustration"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ControlTowerSection;

import React from "react";
import WhyChooseCargoProGraphics from "../assets/CargoProIndexPage/why-choose-cargopro.webp";

const WhyChooseCargoPro = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-12 px-6 md:px-12 py-12 bg-white">
      {/* Left Image Section (comes first in mobile) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src={WhyChooseCargoProGraphics}
          alt="why choose cargo pro"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <div className="space-y-5 md:space-y-6">
          <h2 className="font-dmSans font-semibold text-[28px] md:text-[40px] leading-[1.2] text-[#090A0B]">
            Why Choose CargoPro:
            <br />
            Optimize your road logistics with
            <br className="hidden md:block" />
            CargoPro's AI-based SaaS platform
          </h2>

          <p className="font-dmSans font-normal text-[16px] md:text-[20px] leading-[1.5] text-[#40474F]">
            Designed to streamline your road shipment management, our solution
            brings automation, real-time visibility, and enhanced operational
            efficiency — from order to delivery.
          </p>

          <ul className="text-[#2B2829] font-sofiaSans font-semibold italic text-[20px] md:text-[24px] leading-[1.4] space-y-2">
            <li>All-in-One Platform</li>
            <li>Automation First</li>
            <li>Industry Expertise</li>
            <li>End-to-End Visibility</li>
          </ul>

          <a
            href="https://calendly.com/pranav-cargopro/30min"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-[#2d55fb] text-white px-6 py-3 rounded-full hover:bg-[#1c3ec9] transition mt-4 md:mt-6 inline-block"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCargoPro;

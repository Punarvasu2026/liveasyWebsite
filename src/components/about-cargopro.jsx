import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white px-6 py-16 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div className="space-y-6">
        <h2 className="font-sora font-semibold text-[#22377C] text-[24px] md:text-[40px] leading-[100%]">
          About Us
        </h2>
        <p className="font-dm font-semibold text-[#40474F] text-[14px] md:text-[18px] leading-[22px] md:leading-[30px]">
          <strong>CargoPro</strong> is an AI-powered, SaaS-based platform
          <br className="hidden md:block" />
          designed to automate and streamline end-to-end logistics
          <br className="hidden md:block" />
          operations. From dispatch to final delivery, we help businesses
          <br className="hidden md:block" />
          reduce costs, improve visibility, and boost efficiency.
          <br className="hidden md:block" />
          With features like automated dispatch planning, freight sourcing,
          <br className="hidden md:block" />
          real-time tracking, digital proof of delivery, and analytics,
          <br className="hidden md:block" />
          CargoPro brings full transparency and control to your logistics —
          <br className="hidden md:block" />
          all in one smart dashboard.
        </p>

        {/* Button + Text Combo */}
        <div className="flex items-center gap-3">
          <Link
            to="/about"
            className="bg-primaryBlue text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Go to Learn More"
          >
            <ArrowUpRight size={20} />
          </Link>
          <Link
            to="/about"
            className="text-primaryBlue font-inter font-bold text-[16px] leading-[32px] tracking-[1.28px] uppercase hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center">
        <img
          src="/images/CargoProIndexPage/cargopro-about-us.webp"
          alt="CargoPro Features"
          loading="lazy"
          className="w-full max-w-[618px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;

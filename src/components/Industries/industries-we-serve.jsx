import React from "react";

// Replace these with your actual image imports
import metalIcon from "../../assets/Industries/industries-we-serve-image-1.webp";
import fmcgIcon from "../../assets/Industries/industries-we-serve-image-2.webp";
import chemicalIcon from "../../assets/Industries/industries-we-serve-image-3.webp";

const industries = [
  { title: "Metal & Pipes Logistics", icon: metalIcon },
  { title: "FMCG, FMCD & FMEG Logistics", icon: fmcgIcon },
  { title: "Chemicals Logistics", icon: chemicalIcon },
  { title: "EPC & Construction Logistics", icon: metalIcon },
  { title: "Engineering & Heavy Machinery Logistics", icon: fmcgIcon },
  { title: "Agriculture & Animal Feeds Logistics", icon: chemicalIcon },
];

const IndustriesWeServe = () => {
  return (
    <section className="w-full max-w-[1440px] bg-[#FEFEFE] px-4 md:px-[80px] py-[80px] mx-auto flex flex-col items-center gap-[40px]">
      {/* Heading */}
      <h2 className="w-full max-w-[816px] text-[40px] leading-[100%] text-center font-sora font-semibold text-[#22377C] py-4 rounded-md">
        Industries We Serve
      </h2>

      {/* Grid Container */}
      <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] bg-white border border-[#D4D2E3] rounded-[24px] px-5 py-12 flex flex-col items-center gap-[20px] mx-auto"
          >
            <img
              src={industry.icon}
              alt={industry.title}
              loading="lazy"
              className="w-[142px] h-[142px] object-contain"
            />
            <h3 className="text-[32px] leading-[38px] text-center font-sans font-bold text-[#0B3558]">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;

import React from "react";
import TrustedByLogos from "../assets/CargoProIndexPage/cargopro-companies-logos.webp"; // Replace with actual path

const TrustedBy = () => {
  return (
    <section className="bg-white py-12 overflow-hidden font-sans">
      <div className="max-w-[1220px] mx-auto px-4 text-center">
        <h2
          className="
    font-semibold
    text-[#1D2B7F]
    mb-4 sm:mb-6 md:mb-8
    leading-[22px] sm:leading-[28px] md:leading-[36px]
    text-[18px] sm:text-[24px] md:text-[32px]
    text-center
  "
        >
          Trusted by Global Businesses <br className="block md:hidden" />
          and Industries
        </h2>

        {/* Logo Container */}
        <div className="relative w-full max-w-[1220px] h-[50px] mx-auto overflow-hidden px-[0.04px]">
          <div className="flex md:justify-center gap-[100px]">
            <img
              src={TrustedByLogos}
              alt="Trusted by company logos"
              className="h-[50px] w-auto object-contain"
            />
            <img
              src={TrustedByLogos}
              alt="Duplicate logos"
              className="h-[50px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

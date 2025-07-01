import React from "react";
import { ArrowRight } from "lucide-react";

const CtaBanner = ({ heading, text }) => {
  return (
    <section className="w-full flex justify-center px-5 md:px-[140px] pt-10 pb-10 md:pt-[60px] md:pb-[60px] bg-[#F1F5F9]">
      <div className="relative w-full max-w-[390px] md:max-w-[1160px] rounded-[16px] overflow-hidden flex items-center justify-center py-8 md:py-[60px] bg-black">
        {/* Background Image */}
        <img
          src="/images/CargoProBookDemoBg.webp"
          alt="Freight trucks"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Neon Glow Accent */}
        <div className="hidden md:block absolute right-[64px] top-1/2 -translate-y-1/2 h-[96px] w-[96px] bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.6)_0%,rgba(0,255,150,0)_70%)] blur-[80px] z-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-30 flex flex-col items-start w-full md:max-w-[1000px] px-5 md:px-[100px] gap-4">
          <h2 className="text-white text-[20px] md:text-[36px] font-bold leading-snug">
            {heading}
          </h2>
          <p className="text-white text-base md:text-lg opacity-90">{text}</p>
          <a
            href="https://calendly.com/pranav-cargopro/30min"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group mt-6 md:mt-8 inline-flex items-center justify-center gap-1 bg-[#1B3C8D] hover:bg-[#1B3C8D]/90 text-white rounded-full text-sm md:text-base font-semibold px-6 md:px-10 py-3 md:py-4 max-w-[405px] h-[48px] md:h-[64px] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span className="tracking-wide">CONTACT OUR LOGISTICS EXPERTS</span>
            <ArrowRight
              size={28}
              strokeWidth={2}
              color="white"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

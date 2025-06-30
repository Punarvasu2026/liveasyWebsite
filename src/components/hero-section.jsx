import React from "react";

const HeroSection = ({
  heading,
  content,
  image,
  buttonLabel = "Schedule Demo",
  onButtonClick,
}) => {
  return (
    <div className="relative bg-[#F0F3Fc] overflow-hidden">
      {/* Background Shape - Desktop Only */}
      <img
        src="images/Vector_3.webp"
        alt="Background Shape"
        loading="lazy"
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "250px",
          left: "0",
          right: "0",
          margin: "0",
          opacity: 0.4,
          borderRadius: "1px",
        }}
      />

      <section className="relative z-10 py-16 sm:py-20 lg:pb-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left relative text-primaryBlue">
            <h1
              className="mb-4 font-bold leading-snug sm:leading-tight"
              style={{
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              <span className="block text-[32px] sm:text-[48px] leading-[1.2]">
                {heading}
              </span>
            </h1>

            <p
              className="mb-6"
              style={{
                fontWeight: 400,
              }}
            >
              <span className="block text-[16px] sm:text-[24px] leading-[1.5]">
                {content}
              </span>
            </p>

            <div className="relative inline-block">
              <a
                href="https://calendly.com/pranav-cargopro/30min"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-primaryBlue hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition duration-200 z-20 relative inline-block"
              >
                {buttonLabel}
              </a>

              {/* Arrow - Desktop */}
              <img
                src="/images/Pointer_Arrow.webp"
                alt="Arrow"
                className="absolute hidden sm:block"
                style={{
                  width: "120px",
                  height: "35px",
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-5%) rotate(10deg)",
                  marginLeft: "10px",
                  opacity: 0.8,
                }}
              />

              {/* Arrow - Mobile */}
              <img
                src="images/Pointer_Arrow.webp"
                alt="Arrow Mobile"
                className="absolute block sm:hidden"
                style={{
                  width: "96px",
                  height: "20px",
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-5%) rotate(10deg)",
                  marginLeft: "8px",
                  opacity: 0.8,
                }}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={image}
              alt="CargoPro Hero"
              className="w-full max-w-lg lg:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

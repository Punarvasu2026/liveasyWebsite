import React from "react";

const BlogsHeroSection = ({
  heading,
  content,
  buttonLabel = "Schedule Demo",
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh] flex items-start"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Optional Vector Decoration */}
      <img
        src="/images/Vector_3.webp"
        alt="Vector Background (Design)"
        loading="lazy"
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "250px",
          left: "0",
          right: "0",
          margin: "0 auto",
          opacity: 0.4,
        }}
      />

      <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-20 md:py-32 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full lg:w-1/2 text-left text-white">
            <h1 className="mb-6 text-[32px] md:text-[48px] font-bold leading-[120%] font-sora">
              {heading}
            </h1>
            <p className="mb-6 text-[18px] md:text-[24px] leading-[130%] font-dm-sans">
              {content}
            </p>

            <div className="relative inline-block">
              <a
                href="https://calendly.com/pranav-cargopro/30"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-primaryBlue hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition duration-200 z-20 relative inline-block"
              >
                {buttonLabel}
              </a>

              {/* Arrow for Desktop */}
              <img
                src="/images/Pointer_Arrow.webp"
                alt="Arrow"
                className="absolute hidden sm:block"
                style={{
                  width: "120px",
                  height: "35px",
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-50%) rotate(10deg)",
                  marginLeft: "10px",
                  opacity: 0.8,
                }}
              />

              {/* Arrow for Mobile */}
              <img
                src="/images/Pointer_Arrow.webp"
                alt="Arrow Mobile"
                className="absolute block sm:hidden"
                style={{
                  width: "96px",
                  height: "20px",
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-50%) rotate(10deg)",
                  marginLeft: "8px",
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsHeroSection;

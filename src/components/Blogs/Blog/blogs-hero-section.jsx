import React from "react";

// Images
import Arrow from "../../../assets/Pointer_Arrow.webp";
import BottomShape from "../../../assets/Vector_3.webp";

const BlogsHeroSection = ({
  heading,
  content,
  buttonLabel = "Schedule Demo",
  onButtonClick,
  backgroundImage, // <-- Accept background image here
}) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "660px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional Vector Decoration */}
      <img
        src={BottomShape}
        alt="Vector Background"
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "250px",
          left: "0",
          right: "0",
          margin: "0 auto",
          opacity: 0.4,
        }}
      />

      <section className="relative z-10 pb-20 px-6 sm:px-10 lg:px-20 h-full flex items-start pt-40">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full lg:w-1/2 text-left text-white">
            <h1
              className="mb-6"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "120%",
              }}
            >
              {heading}
            </h1>
            <p
              className="mb-6"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "130%",
              }}
            >
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
                src={Arrow}
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
                src={Arrow}
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

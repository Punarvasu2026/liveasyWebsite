import React from "react";

const MissionSection = () => {
  return (
    <section
      className="relative w-full"
      // Main Background
      style={{
        background:
          "linear-gradient(113.44deg, #0B163F 7.36%, #1F2B80 50%,rgb(33, 23, 150) 102.35%)",
      }}
    >
      {/* Decorative Lines Bottom Right */}
      <img
        src="/images/Solutions/FreightSourcing/design-pattern-1.webp"
        alt="Decorative Lines (Design)"
        loading="lazy"
        className="absolute bottom-0 right-0 w-[500px] pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[86px]">
          {/* Left Section */}
          <div className="flex flex-col gap-[38px] w-full max-w-[694px]">
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-white font-sora font-semibold text-[38px] leading-[50px] tracking-normal max-w-[531px]">
                Our Mission
              </h2>
              <p className="text-white font-sans font-medium text-[18px] leading-[170%] tracking-normal max-w-[525px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse blandit ligula pellentesque lorem. Viverra tincidunt
                erat lobortis ut odio urna, arcu.
              </p>
            </div>
            <img
              src="/images/AboutCargoPro/our-mission.webp"
              alt="CargoPro mission"
              className="w-[640px] h-[356px] object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-[32px] w-full max-w-[500px]">
            {[1, 2, 3].map((item, index) => {
              const headings = [
                "Driving Industry Transformation",
                "Enabling Real-Time Visibility",
                "Empowering Operations",
              ];
              const texts = [
                "CargoPro drives industry transformation through strategic partnerships and innovative solutions to elevate logistic standards and reduce cost.",
                "We enable real-time visibility into logistic operations using advanced tracking technologies and comprehensive analytics.",
                "We empower seamless logistics operations using advanced tracking technologies and comprehensive analytics.",
              ];
              return (
                <div
                  key={index}
                  className="rounded-[16px] p-[24px] w-full max-w-[500px]"
                  // Right Side Box Backgrounds
                  style={{
                    background: "#021351",
                    backdropFilter: "blur(9px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex gap-[24px]">
                    <img
                      src="/images/AboutCargoPro/cargopro-mission-icon.webp"
                      alt={`Icon ${index + 1}`}
                      className="w-[30px] h-[30px]"
                    />
                    <div className="flex flex-col gap-[20px] max-w-[398px]">
                      <h3 className="text-white font-sora font-semibold text-[18px] leading-[100%]">
                        {headings[index]}
                      </h3>
                      <p className="text-white font-sans font-normal text-[16px] leading-[24px]">
                        {texts[index]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

import React from "react";

const points = [
  {
    text: "End-to-End Visibility",
    description:
      "See vehicle location, direction, and speed through SIM & GPS technologies.",
    isHighlighted: true,
  },
  {
    text: "Multi-Mode Tracking",
    isHighlighted: false,
  },
  {
    text: "Compliance at a Glance",
    isHighlighted: false,
  },
  {
    text: 'No More "Where Is It?" Calls',
    isHighlighted: false,
  },
  {
    text: "Data-Driven Movement Insights",
    isHighlighted: false,
  },
];

const LiveTrackingSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#14204A] to-[#1F2196] px-6 py-20 md:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Content */}
        <div className="w-full max-w-[506px] flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-white text-[40px] leading-none font-sora font-semibold">
            Why Live Tracking with CargoPro?
          </h2>

          {/* Points List */}
          <ul className="flex flex-col gap-6 mt-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                {/* Line per point */}
                <div
                  className={`w-[1px] mt-1 rounded-full flex-shrink-0 ${
                    point.isHighlighted
                      ? "bg-[#AF52DE] h-[60px]"
                      : "bg-white h-[20px]"
                  }`}
                />

                {/* Text & Description */}
                <div className="flex flex-col">
                  <span
                    className={`text-[20px] leading-[28px] ${
                      point.isHighlighted
                        ? "font-sofia italic font-semibold text-[#AF52DE]"
                        : "font-sans text-white"
                    }`}
                  >
                    {point.text}
                  </span>

                  {point.description && (
                    <span className="mt-1 font-sans text-white text-[20px] leading-[28px]">
                      {point.description}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[694px] h-auto overflow-hidden rounded-lg">
          <img
            src="/images/Solutions/Tracking/live-tracking-with-cargopro.webp"
            alt="Live Tracking"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveTrackingSection;

import React from "react";
import TrackingImage from "../../../assets/Solutions/Tracking/integrated-tracking.webp"; // Adjust path as needed

const IntegratedTrackingSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#14204A] to-[#1F2196] px-6 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Image */}
        <div className="w-full max-w-[694px] h-auto">
          <img
            src={TrackingImage}
            alt="Tracking Dashboard"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full max-w-[506px] flex flex-col gap-6 text-white">
          <h2 className="font-sora font-semibold text-[32px] md:text-[40px] leading-[100%]">
            Integrated Tracking for Every Shipment. Every Time.
          </h2>
          <p className="font-sans text-base md:text-[18px] leading-[32px] font-normal">
            Whether you're managing 5 trips or 500, CargoPro ensures you never
            lose sight of what matters most: delivery certainty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegratedTrackingSection;

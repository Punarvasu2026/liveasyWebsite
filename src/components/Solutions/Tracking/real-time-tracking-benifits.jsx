import React from "react";
const smallBoxes = [
  {
    image: "/images/Solutions/Tracking/real-time-locations-updates.webp",
    title: "Real-Time Location Updates",
    description:
      "Track vehicle movement in real-time using SIM-based or app-based GPS, depending on your preference or transporter compatibility.",
  },
  {
    image: "/images/Solutions/Tracking/360-degree-visibility.webp",
    title: "360° Visibility for High-Value Goods",
    description:
      "From loading to final delivery, stay in sync on every move. Perfect for sensitive or high-value goods needing close monitoring.",
  },
  {
    image: "/images/Solutions/Tracking/Fastag-powered-tracking.webp",
    title: "FASTag–Powered Tracking Layer",
    description:
      "FASTag integration adds another layer of visibility — get alerts when your vehicle crosses toll booths for better route accountability.",
  },
];

const bigBoxes = [
  {
    image: "/images/Solutions/Tracking/complete-vehicle-profile-access.webp",
    title: "Complete Vehicle Profile Access",
    description:
      "Get transparency into the vehicle details carrying your load — from documentation to legal status — before and during transit.",
  },
  {
    image: "/images/Solutions/Tracking/centralized-dashboard.webp",
    title: "Centralized Dashboard for All Movements",
    description:
      "No more fragmented updates. Get a unified view of ongoing, completed, and delayed shipments — updated in real–time.",
  },
];

const CargoProBenefits = () => {
  return (
    <div className="bg-[#F0F3FC] py-20 px-4 md:px-16 text-[#40474F]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Heading + Description */}
        <div className="text-center px-4 md:px-20">
          <h2 className="text-[#22377C] font-sora text-[32px] md:text-[40px] font-semibold leading-[100%]">
            Benefits of CargoPro Real–Time Tracking
          </h2>
          <p className="mt-3 font-sans text-[16px] md:text-[18px] leading-[30px]">
            Monitor, manage, and optimize every movement, from pickup to
            delivery. Stay updated with accurate, actionable insights, and
            reduce manual follow-ups.
          </p>
        </div>

        {/* Small Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {smallBoxes.map((box, idx) => (
            <div key={idx} className="flex flex-col gap-4 max-w-[626px] w-full">
              <div className="w-full h-[275px] overflow-hidden rounded-xl">
                <img
                  src={box.image}
                  alt={box.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-[100%] text-[#090A0B]">
                  {box.title}
                </h3>
                <p className="font-sans text-[16px] md:text-[18px] leading-[30px]">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Boxes */}
        <div className="grid md:grid-cols-2 gap-7">
          {bigBoxes.map((box, idx) => (
            <div key={idx} className="flex flex-col gap-4 max-w-[626px] w-full">
              <div className="w-full h-[275px] overflow-hidden rounded-xl">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-[100%] text-[#090A0B]">
                  {box.title}
                </h3>
                <p className="font-sans text-[16px] md:text-[18px] leading-[30px]">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CargoProBenefits;

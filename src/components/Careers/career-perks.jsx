import React from "react";
import CareerPerksImage from "../../assets/Careers/careers-perks.webp";

const perksData = [
  {
    title: "Innovation Space",
    description: "A room for new ideas and initiatives",
    image: CareerPerksImage, // Replace with actual image path
  },
  {
    title: "Personal Growth",
    description: "A room for personality development",
    image: CareerPerksImage,
  },
  {
    title: "Digitizing Logistics",
    description:
      "Be a part of a company who is digitizing traditional logistics system.",
    image: CareerPerksImage,
  },
  {
    title: "Competitive Salary",
    description: "Get competitive salary and benefits",
    image: CareerPerksImage,
  },
];

const PerksSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-20 flex flex-col items-center gap-10">
      {/* Heading */}
      <h2 className="max-w-[816px] text-center text-[40px] font-sora font-semibold leading-[100%] text-[#22377C]">
        Perks of Working At CargoPro
      </h2>

      {/* Box Container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1280px]">
        {perksData.map((perk, index) => (
          <div
            key={index}
            className="w-[302px] h-[355px] bg-white rounded-[24px] p-6 flex flex-col gap-[21px] shadow-md"
          >
            <img
              src={perk.image}
              alt={perk.title}
              className="w-[254px] h-[189px] object-cover rounded-[24px]"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-semibold font-sans text-[#090A0B] leading-[100%]">
                {perk.title}
              </h3>
              <p className="text-[16px] font-normal font-sans text-[#141219] leading-[100%]">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksSection;

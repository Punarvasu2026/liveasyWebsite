import React from "react";
import visionImg from "../../assets/Careers/why-work-with-us-image-1.webp"; // replace with actual path
import techImg from "../../assets/Careers/why-work-with-us-image-2.webp"; // replace with actual path
import inspireImg from "../../assets/Careers/why-work-with-us-image-3.webp"; // replace with actual path

const cards = [
  {
    image: visionImg,
    title: "Work with vision",
    text: "Our Vision is to be our customers preferred end to end supply chain partner and collaborator in growth",
  },
  {
    image: techImg,
    title: "Be a technology pioneer",
    text: "For us to sustain our innovative edge, we are constantly looking for people who are at the forefront of their professions.",
  },
  {
    image: inspireImg,
    title: "Inspire others",
    text: "You will have the opportunity to challenge yourself, expand your horizons, learn and grow in your professional career.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="w-full px-4 md:px-20 py-20 bg-white flex flex-col items-center gap-10">
      {/* Heading */}
      <h2 className="text-sora font-semibold text-[40px] text- text-center leading-[100%] max-w-[1280px]">
        Why Work With Us ?
      </h2>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 max-w-[1280px]">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[8px] border border-gray-200 p-5 w-full max-w-[405px] flex flex-col gap-3"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="w-full h-[189px] rounded-[24px] object-cover"
            />
            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sans font-semibold text-[20px] text-[#090A0B] leading-[100%]">
                {card.title}
              </h3>
              <p className="text-sans font-normal text-[16px] text-[#141219] leading-[100%]">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

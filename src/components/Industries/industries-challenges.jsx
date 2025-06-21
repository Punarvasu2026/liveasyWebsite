import React from "react";

//images
import IndustriesComplicatedInvoicing from "../../assets/Industries/complicated-invoicing.webp";
import IndustriesInefficientInPlantVehicleMovement from "../../assets/Industries/inefficient-in-plant-vehicle-movement.webp";
import IndustriesIndentManagement from "../../assets/Industries/indent-management.webp";
import IndustriesLackOfTransparency from "../../assets/Industries/lack-of-transperency.webp";
import IndustriesManualDisparateDataSources from "../../assets/Industries/manual-data-sources.webp";
import IndustriesTraditionalTrackingMethods from "../../assets/Industries/traditional-tracking-method.webp";

const ChallengesSection = () => {
  const challengeData = [
    {
      title: "Lack Of transparency",
      description:
        "The freight transportation industry lacks a transparent and efficient process for shippers to source and negotiate with providers, leading to time-consuming and complex logistics operations.",
      image: IndustriesLackOfTransparency,
    },
    {
      title: "Indent Management",
      description:
        "Many businesses struggle with manual and error-prone indent management processes, leading to delays, inaccuracies, and inefficiencies in the procurement of goods.",
      image: IndustriesIndentManagement,
    },
    {
      title: "Inefficient In-Plant Vehicle Movement",
      description:
        "Inefficient in-plant vehicle movement can increase costs, reduce productivity, and pose safety risks. Traditional manual management is time-consuming, error-prone, and inefficient in resource usage.",
      image: IndustriesInefficientInPlantVehicleMovement,
    },
    {
      title: "Traditional Tracking Methods",
      description:
        "Traditional tracking methods are inefficient, while modern tracking techniques such as GPS, mobile apps, location-based tracking, and sim-based tracking are highly efficient.",
      image: IndustriesTraditionalTrackingMethods,
    },
    {
      title: "Manual & Disparate Data Sources",
      description:
        "Manual and disparate data sources used in logistics operations can lead to data silos and difficulty in tracking key performance metrics. This results in a lack of visibility into logistics operations and makes it difficult to identify areas for improvement.",
      image: IndustriesManualDisparateDataSources,
    },
    {
      title: "Complicated Invoicing",
      description:
        "The logistics industry struggles with complex, paper-based invoicing processes causing inefficiencies, delays, and errors. Manual methods hinder invoice tracking and management, leading to transparency and visibility issues.",
      image: IndustriesComplicatedInvoicing,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] bg-white px-4 md:px-[80px] py-[40px] flex flex-col gap-[60px]">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <h2 className="w-[816px] text-center font-sors text-[40px] font-semibold leading-[100%] text-[#22377C]">
          Challenges Faced By Logistics
          <br /> Industries
        </h2>
      </div>

      {/* Challenge Items */}
      {challengeData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px] w-full max-w-[1280px] mx-auto"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-[618px] h-[360px] object-cover rounded-[12px]"
          />
          <div className="w-full md:w-[582px] flex flex-col gap-[40px]">
            <h3 className="text-[40px] font-sors font-semibold text-[#22377C]">
              {item.title}
            </h3>
            <p className="font-sans text-[18px] leading-[30px] text-[#40474F]">
              {item.description}
            </p>
            <div className="flex items-center gap-4">
              <button className="text-[#304DAF] font-inter font-bold text-[16px] leading-[32px] tracking-[1.28px] uppercase">
                Read More
              </button>
              <div className="w-[40px] h-[40px] rounded-full bg-[#304DAF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChallengesSection;

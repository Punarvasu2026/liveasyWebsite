import React from "react";
import { Folder } from "lucide-react";

const advantages = [
  {
    bgColor: "#E4F7FF", // Light Blue
    iconColor: "#54CBFF",
    text: "Faster Decision-Making",
  },
  {
    bgColor: "#FFF4D6", // Light Yellow
    iconColor: "#FEDA80",
    text: "Improved Customer Experience",
  },
  {
    bgColor: "#FFECEC", // Light Red
    iconColor: "#FF9D9D",
    text: "Reduced Freight Costs",
  },
  {
    bgColor: "#E7FAF1", // Light Green
    iconColor: "#A0EABF",
    text: "100% Operational Transparency",
  },
  {
    bgColor: "#FFECEC", // Light Red (same as above)
    iconColor: "#FF9D9D",
    text: "Scalable Across Multiple Plants & Locations",
  },
  {
    bgColor: "#E7FAF1", // Light Green (same as above)
    iconColor: "#A0EABF",
    text: "Smarter Logistics",
  },
];

const CargoProAdvantage = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[80px]">
      <div className="max-w-[1280px] w-full mx-auto space-y-6">
        <h2 className="text-[#22377C] font-sora font-semibold text-[40px] leading-[100%]">
          The CargoPro Advantage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-1 rounded-md bg-white border border-gray-200 shadow-sm"
            >
              <div
                className="rounded-md p-2"
                style={{ backgroundColor: item.bgColor }}
              >
                <Folder color={item.iconColor} size={20} />
              </div>
              <p className="text-[#1D1D1F] font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CargoProAdvantage;

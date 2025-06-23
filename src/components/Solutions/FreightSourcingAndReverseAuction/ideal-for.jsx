import React from "react";
import { Folder } from "lucide-react";

const advantages = [
  {
    bgColor: "#E4F7FF", // Light Blue
    iconColor: "#54CBFF",
    text: "Manufacturers & Shippers with dynamic load requirements",
  },
  {
    bgColor: "#FFF4D6", // Light Yellow
    iconColor: "#FEDA80",
    text: "Businesses handling multiple transporters and spot markets",
  },
  {
    bgColor: "#FFECEC", // Light Red
    iconColor: "#FF9D9D",
    text: "Operations teams looking for process standardization and automation",
  },
];

const IdealFor = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[80px]">
      <div className="max-w-[1280px] w-full mx-auto space-y-6">
        <h2 className="text-[#22377C] font-sora font-semibold text-[40px] leading-[100%]">
          Ideal for
        </h2>

        <div className="flex flex-col gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-full gap-4 p-1 rounded-md bg-white border border-gray-200 shadow-sm"
            >
              <div
                className="rounded-md p-3"
                style={{ backgroundColor: item.bgColor }}
              >
                <Folder color={item.iconColor} size={24} />
              </div>
              <p className="text-[#1D1D1F] font-medium text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealFor;

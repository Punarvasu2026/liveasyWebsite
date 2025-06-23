import React from "react";
import { Folder } from "lucide-react";

const advantages = [
  {
    bgColor: "#E4F7FF", // Light Blue
    iconColor: "#54CBFF",
    text: "99% Accuracy in reconciliation",
  },
  {
    bgColor: "#FFF4D6", // Light Yellow
    iconColor: "#FEDA80",
    text: "80% Reduction in invoice processing time",
  },
  {
    bgColor: "#FFECEC", // Light Red
    iconColor: "#FF9D9D",
    text: "100% Transparency in billing and approval",
  },
  {
    bgColor: "#E7FAF1", // Light Green
    iconColor: "#A0EABF",
    text: "Zero Duplicate Payments",
  },
];

const WhyInvoicing = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-[80px] py-[80px]">
      <div className="max-w-[1280px] w-full mx-auto space-y-6">
        <h2 className="text-[#22377C] font-sora font-semibold text-[40px] leading-[100%]">
          Why CargoPro Invoicing
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

export default WhyInvoicing;

import React from "react";
import { PiggyBank, Timer, PhoneOff, Boxes, FileText } from "lucide-react";

const impactData = [
  {
    icon: <PiggyBank className="w-8 h-8 text-[#15204F]" />,
    percentage: "5%",
    label: "Freight Cost Savings",
  },
  {
    icon: <Timer className="w-8 h-8 text-[#15204F]" />,
    percentage: "90%",
    label: "Faster Dispatch Planning",
  },
  {
    icon: <PhoneOff className="w-8 h-8 text-[#15204F]" />,
    percentage: "Zero",
    label: "Daily Follow-Up Calls",
  },
  {
    icon: <Boxes className="w-8 h-8 text-[#15204F]" />,
    percentage: "70%",
    label: "Reduced Manual Workload",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#15204F]" />,
    percentage: "Zero",
    label: "Invoice Disputes",
  },
];

const BusinessImpactSection = () => {
  return (
    <section className="w-full bg-[#15204F] py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-white font-sora font-semibold text-[40px] leading-[100%] mb-12 text-left">
          Business Impact
        </h2>

        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {impactData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-white text-center gap-4"
            >
              {/* Icon */}
              <div className="w-[80px] h-[80px] p-4 bg-[#E3E3E399] rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              {/* Percentage/Value */}
              <div className="w-[216px] h-[62px] text-[48px] font-dm-sans font-semibold leading-[100%]">
                {item.percentage}
              </div>

              {/* Label */}
              <div className="text-[22px] font-dm-sans font-base leading-[100%]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;

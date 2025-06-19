import React from "react";
import { Upload, Link2, ClipboardList, Truck } from "lucide-react"; // or use your own icons

const benefits = [
  {
    icon: <Upload className="w-10 h-10 text-[#22377C]" />,
    title: "Faster Vehicle Allocation",
    description: "Cut response time with automated transporter engagement.",
  },
  {
    icon: <Link2 className="w-10 h-10 text-[#22377C]" />,
    title: "Zero Manual Errors",
    description: "Eliminate manual updates, calls, and WhatsApp chains.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-[#22377C]" />,
    title: "Increased Transporter Accountability",
    description: "Capture digital logs for every action with transparent SLAs.",
  },
  {
    icon: <Truck className="w-10 h-10 text-[#22377C]" />,
    title: "Full Plant-to-Delivery Visibility",
    description:
      "From indent to delivery, get complete supply chain transparency.",
  },
];

const BusinessImpactSection = () => {
  return (
    <section className="w-full px-4 py-20 bg-white flex flex-col items-center gap-12">
      {/* Heading */}
      <h2 className="text-[#22377C] font-sora text-[40px] font-semibold text-center">
        Business Impact & Benefits
      </h2>

      {/* Cards Container */}
      <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-200 rounded-xl px-3 py-8 gap-6"
          >
            <div className="bg-[#E3E3E399] p-4 rounded-full">
              {benefit.icon}
            </div>
            <h3 className="font-dm-sans px-4 text-[22px] font-bold text-[#12141D]">
              {benefit.title}
            </h3>
            <p className="font-dm-sans text-[22px] font-normal text-[#12141D] leading-tight">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessImpactSection;

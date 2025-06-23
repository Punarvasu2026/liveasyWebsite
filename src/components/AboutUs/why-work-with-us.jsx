import React from "react";
import { Lightbulb, Eye, Globe, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={20} className="text-black" />,
    title: "Make a Difference",
    description:
      "Join a team where every contribution matters. We are more than just a logistics tech company; we are changing the way SMEs operate and grow. At CargoPro, your work will directly impact the efficiency and success of thousands of businesses. Together, we can drive change.",
    size: "large",
  },
  {
    icon: <Eye size={20} className="text-black" />,
    title: "Work with Vision",
    description:
      "Our vision is to become the preferred end-to-end supply chain partner for our customers and a catalyst for their growth. As a part of our team, you’ll be instrumental in bringing this vision to life, solving real-world logistics problems, and shaping the future of the industry.",
    size: "large",
  },
  {
    icon: <Globe size={20} className="text-black" />,
    title: "Be a Technology Pioneer",
    description:
      "At CargoPro, we believe in the power of innovation. We constantly seek out passionate, forward-thinking individuals who are dedicated to being at the forefront of technology. If you're someone who thrives on solving complex problems with cutting-edge solutions, this is the place for you.",
    size: "small",
  },
  {
    icon: <TrendingUp size={20} className="text-black" />,
    title: "Grow with Us",
    description:
      "Your professional growth is as important as your work. At CargoPro, you’ll have the opportunity to challenge yourself, expand your knowledge, and develop new skills. We offer a dynamic environment that encourages continuous learning and offers paths for growth within the organization.",
    size: "small",
  },
  {
    icon: <Users size={20} className="text-black" />,
    title: "Inspire Others",
    description:
      "Working at CargoPro means inspiring others to push the boundaries of what’s possible. You’ll be part of a team that values collaboration, creativity, and leadership. Together, we’ll foster an environment where you can be your best self and encourage others to do the same.",
    size: "small",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-[40px] font-[600] text-[#22377C] font-sora mb-12 text-left leading-[100%]">
        Why Work With Us ?
      </h2>

      {/* First row – 2 large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {features
          .filter((f) => f.size === "large")
          .map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 w-full h-auto flex flex-col gap-6 shadow-sm"
            >
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#F1F1F1] rounded-full">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-sans text-[20px] font-[500] text-[#2B2829] leading-[100%]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[16px] font-[400] text-[#2D3339] leading-[140%]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Second row – 3 small cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features
          .filter((f) => f.size === "small")
          .map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 w-full h-auto flex flex-col gap-6 shadow-sm"
            >
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#F1F1F1] rounded-full">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-sans text-[20px] font-[500] text-[#2B2829] leading-[100%]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[16px] font-[400] text-[#2D3339] leading-[140%]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

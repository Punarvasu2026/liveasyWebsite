import React from "react";
import StepImage from "../assets/CargoProSteps.png"; // Replace with actual path

const steps = [
  {
    number: 1,
    title: "Sign Up & Onboard Teams",
    description: "Sign up and onboard your plants and teams (logistics, finance, etc.).",
  },
  {
    number: 2,
    title: "Integrate with ERP Systems",
    description: "Connect CargoPro with your ERP (SAP, Microsoft, etc.) for seamless data flow.",
  },
  {
    number: 3,
    title: "Automated Dispatch & Load Planning",
    description: "Dispatches and loads are automatically planned and posted, with real-time updates on the dashboard.",
  },
  {
    number: 4,
    title: "Optimize & Manage Operations",
    description: "Gain complete control of your logistics — track shipments, manage PODs, optimize routes, and more.",
  },
];

const CargoProSteps = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-20 md:py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
          Transform your Logistics Operation with <br className="hidden md:block" />
          CargoPro in four easy steps
        </h2>

        {/* Content: Text + Image */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-[62px] items-center">
          {/* Steps */}
          <div className="flex-1 flex flex-col gap-10 max-w-full md:max-w-[580px]">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Number + Divider */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
                    {step.number}
                  </div>
                  {/* Line below the number except the last */}
                  {step.number !== steps.length && (
                    <div className="w-px h-12 bg-blue-200 mt-1"></div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1 max-w-full md:max-w-[638px]">
            <img
              src={StepImage}
              alt="CargoPro Steps"
              className="w-full h-auto md:h-[516px] rounded-[12px] shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CargoProSteps;

import React from "react";
import { Link } from "react-router-dom";
import SolutionCard from "./solution-card";

import icon1Active from "../assets/ActiveIconSolutions.webp";
import icon1Inactive from "../assets/inActiceIconSolutions.webp";

const solutions = [
  {
    title: "All-In-One Dashboard",
    description:
      "A unified platform to manage all logistics operations. From freight sourcing to delivery tracking, everything is streamlined on a single screen for maximum efficiency. No need for multiple systems or manual updates.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Dispatch Planning",
    description:
      "AI-powered automation helps in planning dispatches intelligently. Based on the data from your ERP system, CargoPro automatically assigns the best transporter and optimizes delivery routes, saving you hours of manual planning and reducing operational costs.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Freight Sourcing & Reverse Auction",
    description:
      "Source transporters through competitive bidding with reverse auctions. This feature helps reduce freight costs by allowing multiple vendors to compete for the job, providing you with the best rates and full pricing transparency.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Real-Time SIM-Based Tracking",
    description:
      "With CargoPro's real-time tracking, you can monitor your shipments' locations instantly. No need for phone calls or waiting for updates — shipment details are live, and you'll receive automatic notifications for delays or route changes.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Digital Proof of Delivery (POD)",
    description:
      "Simplify the delivery process with instant, paperless POD updates. Once the delivery is completed, a digital POD is automatically generated and available for review, eliminating paperwork delays and improving operational speed.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Freight Invoice & Auditing",
    description:
      "CargoPro offers an integrated solution to manage freight invoices, resolve discrepancies, and ensure accuracy. With real-time data synchronization, invoice auditing becomes seamless, ensuring compliance and minimizing errors.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Route Optimization",
    description:
      "Leverage CargoPro's intelligent route optimization to reduce fuel consumption and improve delivery speed. By considering factors like traffic, weather, and vehicle capacity, the platform suggests the most efficient routes for your shipments.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Delivery & Last-Mile Management",
    description:
      "Track every delivery, especially the last mile, with real-time updates. Our platform ensures the final delivery is smooth and error-free by providing full visibility into the process and allowing you to manage any issues immediately.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Make data-driven decisions with CargoPro's advanced analytics. From vendor performance to cost trends, our dashboard offers insights that help you optimize logistics operations, reduce costs, and improve service quality.",
    iconActive: icon1Active,
    iconInactive: icon1Inactive,
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-[#FEFEFE] px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Description + Link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="font-sora font-semibold text-[24px] md:text-[40px] leading-[100%] text-[#22377C]">
              Our Solutions
            </h2>
            <br />
            <p className="mt-2 text-[14px] md:text-[16px] font-dmSans font-normal leading-[100%] text-[#64707D] max-w-2xl">
              Our Client Services Team is always happy to talk to you about what
              is best for your needs. Contact our team to find out if we are the
              right fit for you.
            </p>
          </div>
          {/* <Link
            to="/"
            className="text-[#3B78ED] text-[16px] font-inter font-medium leading-6 tracking-[-0.01em] text-center"
          >
            Explore Solutions →
          </Link> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FAFAFA]">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              iconActive={solution.iconActive}
              iconInactive={solution.iconInactive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

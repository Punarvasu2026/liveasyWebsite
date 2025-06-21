import React from "react";
import TeamImage from "../../assets/AboutCargoPro/who-are-we.webp"; // Update path if needed

const WhoAreWeSection = () => {
  return (
    <section className="w-full px-5 md:px-20 py-20 bg-white flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col gap-12">
        {/* Heading */}
        <h2 className="text-center text-[#090A0B] font-semibold text-[32px] md:text-[40px] leading-[100%] font-sans">
          Who Are We?
        </h2>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image */}
          <img
            src={TeamImage}
            alt="Who Are We (CargoPro)"
            className="w-full max-w-[618px] h-auto rounded-[12px]"
          />

          {/* Paragraph */}
          <div className="text-[#40474F] font-sans font-base text-[16px] md:text-[18px] leading-[30px] max-w-[582px]">
            <p className="mb-4">
              <strong>CargoPro</strong> is a leading provider of Transport
              Management Systems (TMS), delivering innovative freight and
              logistics management platforms designed to automate, track, and
              optimize end-to-end supply chain operations for businesses of all
              sizes. We are committed to transforming the logistics industry by
              addressing key pain points that many businesses face, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Freight Sourcing:</strong> Streamlining the process of
                finding and contracting transportation services, making it
                faster, more efficient, and cost-effective.
              </li>
              <li>
                <strong>Indent Management:</strong> Simplifying the management
                of inventory and orders across various points in the supply
                chain.
              </li>
              <li>
                <strong>Complex Finances:</strong> Offering solutions to handle
                the financial intricacies of logistics, from budgeting to
                settlement.
              </li>
              <li>
                <strong>Paper Invoicing:</strong> Eliminating the need for
                manual invoicing with digital solutions that reduce errors and
                save time.
              </li>
              <li>
                <strong>Outdated Tracking:</strong> Implementing real-time
                tracking solutions to provide full visibility across the entire
                transportation lifecycle.
              </li>
            </ul>
            <p className="mt-4">
              Our <strong>CargoPro</strong> Dashboard integrates every aspect of
              transportation management—planning, execution, settlement, and
              analysis—enabling businesses to gain visibility into their
              logistics operations and significantly reduce costs. With our
              cutting-edge solutions, you can enhance operational efficiency,
              improve decision-making, and unlock new levels of performance and
              transparency in your supply chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;

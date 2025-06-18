import React from "react";

const InsightsCard = ({ image, heading, date }) => {
  return (
    <div className="w-full max-w-[411px] h-[400px] p-6 rounded-[24px] bg-white shadow-md flex flex-col">
      {/* Top Image */}
      <img
        src={image}
        alt={heading}
        className="rounded-xl object-cover w-full h-[192px]"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 mt-4">
        {/* Date */}
        <p className="text-sm text-gray-500">{date}</p>

        {/* Heading */}
        <h3 className="text-lg font-semibold text-[#1A1A1A] leading-snug mt-2 line-clamp-2">
          {heading}
        </h3>

        {/* Read more and circular arrow */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-[#4C6FFF] font-semibold text-sm">
            Read more
          </span>
          <button className="w-8 h-8 rounded-full bg-[#4C6FFF] flex items-center justify-center hover:bg-[#3c5fe0] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] h-[14px] text-white transform rotate-[-45deg]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;

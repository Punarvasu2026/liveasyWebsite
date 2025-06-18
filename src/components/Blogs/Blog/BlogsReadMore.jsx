import React, { useState } from "react";
import InsightsCard from "./BlogsCard";
import BlogCardImage1 from "../../../assets/Blogs/Blog/blog-card-image-1.png";

const allInsights = [
  {
    image: BlogCardImage1,
    heading:
      "Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry",
    date: "January 10, 2025",
    link: "/blogs/revolutionizing-logistics",
  },
  {
    image: BlogCardImage1,
    heading:
      "Eco-Friendly Logistics: Reducing Carbon Footprint through Digital Innovation",
    date: "January 27, 2025",
    link: "/insights/eco-friendly-logistics",
  },
  {
    image: BlogCardImage1,
    heading:
      "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
    date: "January 18, 2025",
    link: "/insights/invoicing-automation",
  },
  {
    image: BlogCardImage1,
    heading:
      "Breaking Barriers: Overcoming Challenges in Implementing Digital Solutions",
    date: "January 15, 2025",
    link: "/insights/digital-solution-challenges",
  },
  {
    image: BlogCardImage1,
    heading: "Digital Transformation Strategies for Logistics Company",
    date: "January 9, 2025",
    link: "/insights/digital-transformation-strategies",
  },
  {
    image: BlogCardImage1,
    heading:
      "Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement",
    date: "January 26, 2025",
    link: "/insights/in-plant-automation",
  },
  // ...repeat for remaining items
];

const InsightsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(allInsights.length / cardsPerPage);

  const paginatedInsights = allInsights.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col gap-[10px] bg-white">
      {/* Inner Container */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[60px]">
        {/* Heading Section */}
        <div className="text-center mx-auto w-[503px] flex flex-col gap-[8px]">
          <span className="text-xs text-[#4C6FFF] uppercase font-semibold tracking-wider">
            Expert Insights
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1A1A] leading-[48px]">
            What’s New at CargoPro
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
          {paginatedInsights.map((item, index) => (
            <InsightsCard
              key={index}
              image={item.image}
              heading={item.heading}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 pt-10 flex-wrap">
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-[#4C6FFF] text-white"
                    : "bg-white text-gray-700 border hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-gray-500 text-xl hover:text-black"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;

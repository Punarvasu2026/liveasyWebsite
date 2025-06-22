import React, { useState } from "react";
import InsightsCard from "./BlogsCard";
import BlogCardImage1 from "../../../assets/Blogs/Blog/blog-card-image-1.webp";

const allInsights = [
  {
    image: BlogCardImage1,
    heading:
      "Eco-Friendly Logistics: Reducing Carbon Footprint Through Digital Innovation with CargoPro",
    date: "January 10, 2025",
    link: "/blogs/eco-friendly-logistics",
  },
  {
    image: BlogCardImage1,
    heading:
      "Revolutionizing Procurement and Indent Management with CargoPro’s Automated TMS Platform",
    date: "January 27, 2025",
    link: "/blogs/revolutionizing-procurement",
  },
  {
    image: BlogCardImage1,
    heading:
      "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
    date: "January 18, 2025",
    link: "/blogs/say-goodbye-to-invoicing-hassles",
  },
  {
    image: BlogCardImage1,
    heading:
      "Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions with CargoPro",
    date: "January 15, 2025",
    link: "/blogs/digital-solution-challenges",
  },
  {
    image: BlogCardImage1,
    heading:
      "Digital Transformation Strategies for Logistics Companies: The CargoPro Edge",
    date: "January 9, 2025",
    link: "/blogs/digital-transformation-strategies",
  },
  {
    image: BlogCardImage1,
    heading:
      "Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement with CargoPro",
    date: "January 26, 2025",
    link: "/blogs/in-plant-automation",
  },
  {
    image: BlogCardImage1,
    heading:
      "Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement with CargoPro",
    date: "January 26, 2025",
    link: "/blogs/in-plant-automation",
  },
  {
    image: BlogCardImage1,
    heading: "How to Choose the Right TMS: A Buyer’s Guide",
    date: "January 26, 2025",
    link: "/blogs/how-to-choose-the-right-tms",
  },
  {
    image: BlogCardImage1,
    heading:
      "Big Data and Predictive Analytics in Logistics: A Game Changer for Achieving End-to-End Supply Chain Visibility",
    date: "January 26, 2025",
    link: "/blogs/big-data-and-predictive-analytics-in-logistics",
  },
  {
    image: BlogCardImage1,
    heading: "Why Freight Cost is Higher in the Steel Industry?",
    date: "January 26, 2025",
    link: "/blogs/why-freight-cost-is-higher-in-the-steel-industry",
  },
  {
    image: BlogCardImage1,
    heading: "National Logistics Policy 2022 – Explained",
    date: "January 26, 2025",
    link: "/blogs/national-logistics-policy-2022",
  },
  {
    image: BlogCardImage1,
    heading:
      "Efficiency at Every Step – Automated Invoicing and Simplifying Logistics with CargoPro",
    date: "January 26, 2025",
    link: "/blogs/automated-invoicing-and-simplifying-logistics",
  },
  {
    image: BlogCardImage1,
    heading: "The Benefits of Automated Indent Management for Procurement",
    date: "January 26, 2025",
    link: "/blogs/benifits-of-automated-indent-management",
  },
  {
    image: BlogCardImage1,
    heading: "How to Streamline Yard Management with In-Plant Optimization",
    date: "January 26, 2025",
    link: "/blogs/how-to-streamline-yard-management-with-in-plant-optimization",
  },
  {
    image: BlogCardImage1,
    heading:
      "Achieving End-to-End Visibility with Logistics Tracking Solutions",
    date: "January 26, 2025",
    link: "/blogs/achieving-end-to-end-visibility-with-logistics-tracking-solutions",
  },
  {
    image: BlogCardImage1,
    heading: "The Power of Data-Driven Logistics Analytics and Insights",
    date: "January 26, 2025",
    link: "/blogs/the-power-of-data-driven-logistics-analytics-and-insights",
  },
  {
    image: BlogCardImage1,
    heading: "How to Leverage Digital Proof of Delivery for Faster Invoicing",
    date: "January 26, 2025",
    link: "/blogs/digital-proof-of-delivery",
  },
  {
    image: BlogCardImage1,
    heading: "Top Techniques for Optimizing Last Mile Delivery Logistics",
    date: "January 26, 2025",
    link: "/blogs/last-mile-delivery",
  },
  {
    image: BlogCardImage1,
    heading:
      "Elevating Warehouse Efficiency – The Path to Digital Transformation",
    date: "January 26, 2025",
    link: "/blogs/elevating-warehouse-efficiency",
  },
  {
    image: BlogCardImage1,
    heading:
      "Seamless Integration of Transportation and Warehouse Management Systems",
    date: "January 26, 2025",
    link: "/blogs/seamless-integration-of-transportation-and-warehouse-management",
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

//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";
import BlogsSection1 from "../../components/Blogs/ReusableComponents/blogs-section-1";
import ContentSection from "../../components/Blogs/ReusableComponents/blogs-content-section";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import RelatedBlogs from "../../components/Blogs/Blog/related-blogs";

//Images
import RevolutionzingLogisticsBg from "../../assets/Blogs/blog-16/blog-16-bg.webp";
import logisticsImage from "../../assets/Blogs/blog-16/blog-16-image.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/blog-16/route-optimization.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/blog-16/inventory-management.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/blog-16/fraud-detection.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/blog-16/risk-metigation.webp";

const Blog16 = () => {
  const sections = [
    {
      heading: "Route Optimization",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "CargoPro uses intelligent algorithms to identify the most efficient delivery routes. This reduces fuel costs, improves delivery speed, and enhances overall fleet productivity.",
    },
    {
      heading: "Inventory Management",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "By tracking inventory levels and demand trends, businesses can maintain the right stock at the right time. CargoPro helps prevent overstocking and stockouts, ensuring smooth operations and better service levels.",
    },
    {
      heading: "Fraud Detection",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "Our analytics engine detects unusual patterns that may indicate fraudulent activities, such as duplicate entries or route deviations, enabling companies to address issues proactively.",
    },
    {
      heading: "Risk Mitigation",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "CargoPro helps identify potential risks in the logistics chain, such as weather disruptions, carrier delays, or regulatory compliance issues. Businesses can take preventive action before risks escalate into costly problems.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "Data-driven logistics is the future of freight management. With CargoPro, businesses gain visibility into operations, identify performance gaps, and drive continuous improvement. The result is faster decisions, reduced costs, and improved customer satisfaction. If you're looking to modernize your freight operations with advanced logistics insights, CargoPro is here to help.",
    footerText: "Found this article helpful? Spread the word!",
  };

  const insightsData = [
    {
      image: logisticsImage,
      heading:
        "Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry",
      date: "January 10, 2025",
      link: "/blogs/revolutionizing-logistics",
    },
    {
      image: logisticsImage,
      heading:
        "Eco-Friendly Logistics: Reducing Carbon Footprint through Digital Innovation",
      date: "January 27, 2025",
      link: "/insights/eco-friendly-logistics",
    },
    {
      image: logisticsImage,
      heading:
        "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
      date: "January 18, 2025",
      link: "/insights/invoicing-automation",
    },
  ];

  return (
    <>
      <Navbar />
      <BlogsHero
        heading="The Power of Data-Driven Logistics Analytics and Insights"
        text="Freight management involves the planning, coordination, and
            execution of moving goods from one location to another. It is a
            complex process, often involving multiple transportation modes,
            partners, and moving parts. Traditional approaches to freight
            management, often manual and paper-based, result in inefficiencies,
            data silos, and delayed decision-making."
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            <h2 className="font-sora font-semibold text-[40px] leading-[100%] tracking-[0%] text-[#22377C]">
              The Problem
            </h2>
            <br />
            Manual freight management makes it difficult to track shipments,
            identify inefficiencies, or respond to issues in real time. Without
            centralized data and analytics, businesses lack the insights needed
            to optimize performance or reduce costs.
            <br />
            <br />
            <h2 className="font-sora font-semibold text-[40px] leading-[100%] tracking-[0%] text-[#22377C]">
              How CargoPro Can Help
            </h2>
            <br />
            CargoPro provides a comprehensive platform for data-driven logistics
            analytics, helping businesses monitor and improve every aspect of
            freight operations. Our system collects, integrates, and analyzes
            logistics data to surface actionable insights.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>Your Logistics, Now Smarter.</>}
        text={
          <>
            It’s time to take control of your freight operations with powerful
            data-driven insights — all powered by CargoPro.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog16;

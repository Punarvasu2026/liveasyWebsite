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
import logisticsImage from "../../assets/Blogs/blog-16/blog-16-image.webp";

const Blog16 = () => {
  const sections = [
    {
      heading: "Route Optimization",
      image: "/images/Blogs/blog-16/route-optimization.webp",
      paragraph:
        "CargoPro uses intelligent algorithms to identify the most efficient delivery routes. This reduces fuel costs, improves delivery speed, and enhances overall fleet productivity.",
    },
    {
      heading: "Inventory Management",
      image: "/images/Blogs/blog-16/inventory-management.webp",
      paragraph:
        "By tracking inventory levels and demand trends, businesses can maintain the right stock at the right time. CargoPro helps prevent overstocking and stockouts, ensuring smooth operations and better service levels.",
    },
    {
      heading: "Fraud Detection",
      image: "/images/Blogs/blog-16/fraud-detection.webp",
      paragraph:
        "Our analytics engine detects unusual patterns that may indicate fraudulent activities, such as duplicate entries or route deviations, enabling companies to address issues proactively.",
    },
    {
      heading: "Risk Mitigation",
      image: "/images/Blogs/blog-16/risk-metigation.webp",
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
      image: "/images/Blogs/blogs-cover-images/blog-17-cover-image.webp",
      heading: "How to Leverage Digital Proof of Delivery for Faster Invoicing",
      date: "January 26, 2025",
      link: "/blogs/digital-proof-of-delivery",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-18-cover-image.webp",
      heading: "Top Techniques for Optimizing Last Mile Delivery Logistics",
      date: "January 26, 2025",
      link: "/blogs/last-mile-delivery",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-19-cover-image.webp",
      heading:
        "Elevating Warehouse Efficiency – The Path to Digital Transformation",
      date: "January 26, 2025",
      link: "/blogs/elevating-warehouse-efficiency",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CargoPro | The Power of Data-Driven Logistics Analytics and Insights
        </title>
        <meta
          name="description"
          content="Leverage CargoPro’s data-driven logistics analytics to optimize freight management, improve route efficiency, detect fraud, mitigate risks, and boost customer satisfaction with actionable insights."
        />
        <link rel="icon" type="image/webp" href="/CargoProLogo.webp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/CargoProLogo.webp"
        />
        {/* Load GA script asynchronously */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LQCDPXD2T3"
        ></script>

        {/* Inline GA initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LQCDPXD2T3');
            `,
          }}
        />
      </Helmet>

      <Navbar />
      <BlogsHero
        heading="The Power of Data-Driven Logistics Analytics and Insights"
        text="Freight management involves the planning, coordination, and
            execution of moving goods from one location to another. It is a
            complex process, often involving multiple transportation modes,
            partners, and moving parts. Traditional approaches to freight
            management, often manual and paper-based, result in inefficiencies,
            data silos, and delayed decision-making."
        bgImage="/images/Blogs/blog-16/blog-16-bg.webp"
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

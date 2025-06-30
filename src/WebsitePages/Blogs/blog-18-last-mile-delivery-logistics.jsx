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

import logisticsImage from "../../assets/Blogs/blog-18/blog-18-image.webp";

const Blog18 = () => {
  const sections = [
    {
      heading: "Real-Time Route Optimization",
      image: "/images/Blogs/blog-18/real-time-route-optimization.webp",
      paragraph:
        "CargoPro’s dynamic routing engine recalculates optimal routes based on real-time traffic and delivery constraints. This reduces fuel use and shortens delivery times, significantly improving operational efficiency.",
    },
    {
      heading: "Smart Delivery Management",
      image: "/images/Blogs/blog-18/smart-delivery-management.webp",
      paragraph:
        "CargoPro provides delivery tracking dashboards and mobile apps that keep dispatchers, drivers, and customers informed. Real-time visibility helps resolve issues promptly and enhances communication across stakeholders.",
    },
    {
      heading: "Dynamic Capacity Adjustments",
      image: "/images/Blogs/blog-18/dynamic-capaccity-adjustments.webp",
      paragraph:
        "Demand fluctuates based on time of day, season, or promotional events. CargoPro allows logistics teams to scale delivery resources—vehicles, drivers, and time slots—based on live demand, ensuring responsiveness and cost control.",
    },
    {
      heading: "Customer-Centric Delivery Options",
      image: "/images/Blogs/blog-18/customer-centric-delivery-options.webp",
      paragraph:
        "Personalized delivery windows and delivery preferences are key to customer satisfaction. CargoPro supports these features natively, giving businesses the ability to offer flexible, customer-focused delivery options",
    },
    {
      heading: "Seamless Communication",
      image: "/images/Blogs/blog-18/seamless-communication.webp",
      paragraph:
        "CargoPro connects drivers, dispatchers, and end customers in real-time. Whether it’s delivery updates, proof of delivery, or special instructions, our platform ensures clear, timely communication.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "Optimizing the last mile is essential for delivering superior customer experiences and maintaining profitability. CargoPro helps businesses tackle last mile challenges with tools that improve visibility, automation, and adaptability. With our platform, companies are better equipped to deliver fast, efficient, and reliable service—right to the customer’s door.",
    footerText: "Found this article helpful? Spread the word!",
  };

  const insightsData = [
    {
      image: "/images/Blogs/blogs-cover-images/blog-19-cover-image.webp",
      heading:
        "Elevating Warehouse Efficiency – The Path to Digital Transformation",
      date: "January 26, 2025",
      link: "/blogs/elevating-warehouse-efficiency",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-20-cover-image.webp",
      heading:
        "Seamless Integration of Transportation and Warehouse Management Systems",
      date: "January 26, 2025",
      link: "/blogs/seamless-integration-of-transportation-and-warehouse-management",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-21-cover-image.webp",
      heading:
        "Streamlining Logistics Operations – The Benefits of Automated Indent Management",
      date: "January 26, 2025",
      link: "/blogs/seamless-logistics-operations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CargoPro | Top Techniques for Optimizing Last Mile Delivery Logistics
        </title>
        <meta
          name="description"
          content="Discover CargoPro’s advanced tools to optimize last mile delivery logistics with real-time route optimization, smart delivery management, dynamic capacity adjustments, and seamless communication for superior customer experience."
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
        heading="Top Techniques for Optimizing Last Mile Delivery Logistics"
        text={
          <>
            Freight management involves the planning, coordination, and
            execution of moving goods from one location to another. It is a
            complex process, often involving multiple transportation modes,
            partners, and moving parts. Traditional approaches to freight
            management, often manual and paper-based, result in inefficiencies,
            data silos, and delayed decision-making.
          </>
        }
        bgImage="/images/Blogs/blog-18/blog-18-bg.webp"
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            <h2 className="font-sora font-semibold text-[40px] leading-[100%] tracking-[0%] text-[#22377C]">
              Navigating Last Mile Complexity
            </h2>
            <br />
            <br />
            Last mile operations face challenges such as traffic variability,
            high delivery density, and narrow delivery windows. Delays and
            inefficiencies in this stage directly impact customer satisfaction
            and operational costs.
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

export default Blog18;

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
import RevolutionzingLogisticsBg from "../../assets/Blogs/blog-18/blog-18-bg.webp";
import logisticsImage from "../../assets/Blogs/blog-18/blog-18-image.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/blog-18/real-time-route-optimization.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/blog-18/smart-delivery-management.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/blog-18/dynamic-capaccity-adjustments.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/blog-18/customer-centric-delivery-options.webp";
import RevolutionizingLogisticsImage5 from "../../assets/Blogs/blog-18/seamless-communication.webp";

const Blog18 = () => {
  const sections = [
    {
      heading: "Real-Time Route Optimization",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "CargoPro’s dynamic routing engine recalculates optimal routes based on real-time traffic and delivery constraints. This reduces fuel use and shortens delivery times, significantly improving operational efficiency.",
    },
    {
      heading: "Smart Delivery Management",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "CargoPro provides delivery tracking dashboards and mobile apps that keep dispatchers, drivers, and customers informed. Real-time visibility helps resolve issues promptly and enhances communication across stakeholders.",
    },
    {
      heading: "Dynamic Capacity Adjustments",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "Demand fluctuates based on time of day, season, or promotional events. CargoPro allows logistics teams to scale delivery resources—vehicles, drivers, and time slots—based on live demand, ensuring responsiveness and cost control.",
    },
    {
      heading: "Customer-Centric Delivery Options",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "Personalized delivery windows and delivery preferences are key to customer satisfaction. CargoPro supports these features natively, giving businesses the ability to offer flexible, customer-focused delivery options",
    },
    {
      heading: "Seamless Communication",
      image: RevolutionizingLogisticsImage5,
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
        bgImage={RevolutionzingLogisticsBg}
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

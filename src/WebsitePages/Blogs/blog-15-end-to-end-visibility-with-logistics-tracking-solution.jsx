//External Libraries
import React from "react";

//Components
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";
import BlogsSection1 from "../../components/Blogs/ReusableComponents/blogs-section-1";
import ContentSection from "../../components/Blogs/ReusableComponents/blogs-content-section";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import RelatedBlogs from "../../components/Blogs/Blog/related-blogs";

//Images
import RevolutionzingLogisticsBg from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-bg.png";
import logisticsImage from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image.png";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-1.png";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-2.png";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-3.png";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-4.png";

const Blog15 = () => {
  const sections = [
    {
      heading: "Real-Time Tracking of Shipments",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          CargoPro enables real-time tracking using GPS, IoT, and integrated
          data from multiple sources. This allows companies to monitor the exact
          location of shipments, estimated time of arrival, and any delays,
          helping teams respond promptly to disruptions.
        </>
      ),
    },
    {
      heading: "Improved Fleet and Resource Optimization",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          Tracking is not just about monitoring—it’s also about planning. By
          analyzing vehicle movement and delivery performance, CargoPro helps
          companies optimize routes, reduce fuel consumption, and ensure better
          utilization of fleet resources.
        </>
      ),
    },
    {
      heading: "Enhanced Coordination Across Stakeholders",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          Supply chains often involve multiple parties, including suppliers,
          transporters, warehouses, and customers. CargoPro allows all
          stakeholders to access the same tracking data, improving collaboration
          and reducing the risk of miscommunication.
        </>
      ),
    },
    {
      heading: "Proactive Exception Management",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          End-to-end visibility allows teams to proactively handle delays or
          disruptions. Whether it’s a route blockage, weather issue, or late
          dispatch, real-time alerts ensure that mitigation strategies are
          activated without waiting for manual intervention.
        </>
      ),
    },
    {
      heading: "Centralized Dashboard for Monitoring",
      image: logisticsImage,
      paragraph: (
        <>
          CargoPro provides a single dashboard to view all logistics operations.
          Managers can track shipments, view performance metrics, and identify
          improvement areas—all in one place. This centralized control supports
          faster decisions and improved customer service.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping up",
    description: (
      <>
        Logistics tracking is no longer about “where is my shipment?”—it’s about
        full control of the supply chain. With CargoPro’s end-to-end tracking
        solutions, companies can improve visibility, coordination, and
        efficiency across every touchpoint. This not only leads to better
        service delivery but also strengthens your company’s reliability and
        reputation in the market.
      </>
    ),
    footerText: "Found this helpful? Share it with your team!",
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
        heading="Achieving End-to-End Visibility with Logistics Tracking Solutions"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            In today’s highly competitive logistics environment, visibility is
            no longer optional—it’s a necessity. Delays, miscommunication, and
            operational blind spots can result in high costs and customer
            dissatisfaction. To overcome these challenges, companies are turning
            to end-to-end logistics tracking solutions like those provided by
            CargoPro.
            <br />
            <br />
            End-to-end visibility refers to having real-time information about
            every stage of a shipment’s journey—from order placement to final
            delivery. It enables better decision-making, reduced delays, and
            increased customer satisfaction.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>See Your Entire Supply Chain at a Glance</>}
        text={
          <>
            Enable real-time shipment tracking, optimize routes, and never lose
            sight of your freight again — with CargoPro.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog15;

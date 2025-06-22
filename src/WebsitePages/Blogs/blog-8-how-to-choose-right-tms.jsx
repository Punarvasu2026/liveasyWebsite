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
import RevolutionzingLogisticsBg from "../../assets/Blogs/blog-8/blog-8-bg.webp";
import logisticsImage from "../../assets/Blogs/blog-8/blog-8-bg.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/blog-8/access-your-business-needs.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/blog-8/choose-a-user-friendly-interface.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/blog-8/real-time-visibility.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/blog-8/powerfull-analytics.webp";
import RevolutionizingLogisticsImage5 from "../../assets/Blogs/blog-8/integration-and-scalability.webp";

const Blog8 = () => {
  const sections = [
    {
      heading: "Assess Your Business Needs",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          Every business has unique logistics pain points. Start by identifying
          yours: <br />
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Are you struggling with manual dispatching or inefficient route
              planning?{" "}
            </li>
            <li>
              Do you need better real-time tracking or reverse auction features
              for freight rates?{" "}
            </li>
          </ul>
          Also consider your shipment volume, transport modes (road, rail, air,
          sea), geographic scope, and any regulatory constraints. This clarity
          will help you choose a TMS that adapts to your business today — and
          scales for tomorrow. <br />
          CargoPro is built with flexible modules to suit any organization,
          offering solutions for automated indenting, live order tracking, smart
          bidding, and much more.
        </>
      ),
    },
    {
      heading: "Choose a User-Friendly Interface",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          Even the most powerful system fails if it’s hard to use. <br />A great
          TMS platform should be:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Intuitive, even for non-technical users</li>
            <li>Mobile-responsive</li>
            <li>Designed for easy onboarding</li>
          </ul>
          CargoPro stands out with its clean UI, smooth user flows, and minimal
          learning curve. Transporters, dispatchers, and logistics managers can
          easily perform tasks like reverse bidding, load assignments, or track
          vehicle health, all from a single screen.
        </>
      ),
    },
    {
      heading: "Real-Time Visibility and Reporting",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          A strong TMS must offer real-time visibility into every shipment,
          vehicle, and milestone. Look for features like:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Live GPS tracking</li>
            <li>SIM/Fastag-based truck tracking</li>
            <li>Status alerts and delivery proofs (PODs)</li>
            <li>Analytics dashboards</li>
          </ul>
          CargoPro ensures end-to-end visibility for all stakeholders — from
          shipper to consignee — helping businesses proactively manage delays,
          monitor transporter performance, and automate POD submission for
          faster billing.
        </>
      ),
    },
    {
      heading: "Powerful Analytics for Smarter Decisions",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          Your TMS should not only track — it should analyze. <br />
          Analytics features should include:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Cost analysis per shipment or route</li>
            <li>Transporter performance benchmarking</li>
            <li>Load planning efficiency</li>
            <li>Sustainability insights</li>
          </ul>
          CargoPro gives you smart dashboards and exportable reports that
          empower logistics leaders to reduce costs, identify trends, and scale
          faster.
        </>
      ),
    },
    {
      heading: "Integration & Scalability",
      image: RevolutionizingLogisticsImage5,
      paragraph: (
        <>
          Your chosen TMS must integrate easily with existing systems — ERPs,
          invoicing platforms, GPS tools, or warehousing apps. <br />
          CargoPro offers:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>REST APIs for ERP integration</li>
            <li>Mobile apps for drivers and managers</li>
            <li>Scalable modules to support multi-location operations</li>
          </ul>
          Whether you're running in-plant logistics, long-haul dispatch, or
          city-based deliveries, CargoPro scales with you.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up: Your TMS Should Work For You",
    description: (
      <>
        Choosing the right TMS software is a crucial decision that affects your
        entire logistics workflow — from shipment planning to delivery
        confirmations and beyond. <br />
        With CargoPro, you don’t just buy software; you gain a platform designed
        for modern, agile logistics: <br />
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Automated load allocation & indenting</li>
          <li>Reverse auction & bidding features</li>
          <li>Full-cycle tracking and transporter management</li>
          <li>Seamless invoicing, with integrated POD validation</li>
        </ul>
        Whether you’re searching for Cargo TMS, cargo management, or a complete
        logistics automation platform, CargoPro checks all the boxes.
      </>
    ),
    footerText: "Found this article helpful? Share it with your network!",
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
        heading="How to Choose the Right TMS: A Buyer’s Guide"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            In the dynamic world of logistics, a robust Transportation
            Management System (TMS) is not just a digital tool — it’s a
            strategic enabler.The right TMS software helps streamline
            operations, reduce costs, and give logistics leaders real-time
            visibility across their supply chain. <br />
            But with countless TMS solutions on the market, choosing the right
            one for your business can feel overwhelming. This buyer’s guide is
            designed to simplify your decision, offering clear points to
            consider. Whether you’re a shipper, 3PL, or transporter, platforms
            like CargoPro (or Cargo Pro) deliver the flexibility, power, and
            simplicity modern logistics demand.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>Your Logistics, Now Smarter.</>}
        text={
          <>
            It’s time to stop guessing where your shipment is. <br />
            Start tracking it in real time — with CargoPro’s smart tracking
            suite.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog8;

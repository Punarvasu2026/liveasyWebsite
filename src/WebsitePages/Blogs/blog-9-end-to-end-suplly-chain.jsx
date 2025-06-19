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

const Blog9 = () => {
  const sections = [
    {
      heading: "Leverage Big Data Across Touchpoints",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          Logistics systems produce enormous data from IoT, WMS, GPS, and ERP
          tools. <br />
          But raw data is only valuable when structured and centralized.
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Aggregate and process data in real time</li>
            <li>Unify device, sensor, and app insights via APIs</li>
            <li>Visualize trends across networks</li>
          </ul>
          CargoPro transforms data chaos into clarity — giving you control and
          visibility like never before.
        </>
      ),
    },
    {
      heading: "Predictive Analytics for Proactive Planning",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          With predictive analytics, logistics shifts from reactive to
          proactive.
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Forecast delays based on weather and traffic data</li>
            <li>Predict load demand and resource needs</li>
            <li>Uncover trends that signal bottlenecks</li>
          </ul>
          CargoPro helps managers plan better, avoid risks, and maximize uptime
          across your supply chain.
        </>
      ),
    },
    {
      heading: "Smarter Route Optimization & ETA Accuracy",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          Today’s logistics requires live, adaptive routing.
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Use traffic, vehicle health, and delivery data to plan in real
              time
            </li>
            <li>Get precise ETAs with automated adjustments</li>
            <li>Improve OTD (On-Time Delivery) and fuel usage</li>
          </ul>
          CargoPro optimizes every trip, reducing delays and enhancing customer
          experience.
        </>
      ),
    },
    {
      heading: "Accurate Demand Forecasting & Inventory Management",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          Overstocks and stockouts hurt margins and service.
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Analyze seasonal and historical data</li>
            <li>Balance warehouse and transport planning</li>
            <li>Maintain optimal inventory at every node</li>
          </ul>
          With CargoPro, logistics and inventory sync to meet demand while
          cutting costs.
        </>
      ),
    },
    {
      heading: "Risk Detection and Disruption Management",
      image: logisticsImage,
      paragraph: (
        <>
          Disruptions are inevitable — preparedness is key.
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Monitor internal anomalies and external disruptions</li>
            <li>Flag shipment delays early</li>
            <li>Suggest reroutes and load balancing options</li>
          </ul>
          CargoPro alerts you before problems escalate — helping you maintain
          resilience under pressure.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        Big Data and predictive analytics are revolutionizing how logistics
        teams make decisions. <br />
        With CargoPro, raw data becomes real-time visibility, foresight, and
        action. <br />
        You unlock:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Predictive load planning and routing</li>
          <li>End-to-end shipment visibility</li>
          <li>Forecasting demand and detecting risk</li>
          <li>Integrated dashboards with instant insights</li>
        </ul>
        Whether you're exploring freight analytics or ready to adopt full-scope
        digital logistics — CargoPro makes your data work for you.
      </>
    ),
    footerText: "Found this helpful? Share with your logistics network!",
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
        heading="Big Data and Predictive Analytics in Logistics: A Game Changer for Achieving End-to-End Supply Chain Visibility"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            End-to-end visibility is no longer optional in logistics — it’s
            essential. <br />
            Big Data and predictive analytics are enabling logistics leaders to
            go from reactive fixes to proactive decisions. <br />
            From shipment tracking to delay prediction and inventory
            forecasting, platforms like CargoPro help shippers, 3PLs, and
            transporters harness data for real operational advantage.
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

export default Blog9;

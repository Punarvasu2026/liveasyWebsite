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

const Blog5 = () => {
  const sections = [
    {
      heading: "Data-Driven Decision Making",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          In modern logistics, data is your most valuable asset. <br />
          CargoPro empowers decision-makers with: <br />
          <ul className="list-disc list-inside ml-4">
            <li>Real-time dashboards for shipments, transporters, and costs</li>
            <li>
              Insights into route efficiency, delivery performance, and auction
              savings
            </li>
            <li>KPIs that drive smarter planning and faster decisions</li>
          </ul>
          With the right data at your fingertips, every move becomes strategic
          and measurable.
        </>
      ),
    },
    {
      heading: "Intelligent Automation",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          Say goodbye to manual errors and repetitive tasks. <br />
          CargoPro automates key logistics workflows, including: <br />
          <ul className="list-disc list-inside ml-4">
            <li>Indent creation and PO generation</li>
            <li>Transporter bidding and load allocation</li>
            <li>Auto-document handling and digital invoicing</li>
          </ul>
          This automation ensures consistency, saves time, and allows your team
          to focus on strategic growth.
        </>
      ),
    },
    {
      heading: "Seamless Collaboration & Connectivity",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          Logistics success is built on seamless coordination. <br />
          CargoPro connects all stakeholders in a single platform: <br />
          <ul className="list-disc list-inside ml-4">
            <li>Transporters, vendors, clients, and warehouse partners</li>
            <li>Live updates and centralized document exchange</li>
            <li>Improved SLA adherence through real-time visibility</li>
          </ul>
          The result? Faster deliveries, reduced delays, and stronger
          collaboration across your supply chain.
        </>
      ),
    },
    {
      heading: "Sustainability as a Strategic Advantage",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          Today, sustainability is no longer optional — it's a business
          imperative. <br />
          CargoPro helps reduce your carbon footprint through: <br />
          <ul className="list-disc list-inside ml-4">
            <li>Optimized routing and reduced fuel consumption</li>
            <li>Digital documentation and paperless invoicing</li>
            <li>
              Fleet compliance tracking (pollution, insurance, maintenance)
            </li>
          </ul>
          Achieve ESG goals while running lean, efficient operations.
        </>
      ),
    },
    {
      heading: "Enhanced Customer Experience",
      image: logisticsImage,
      paragraph: (
        <>
          Customers expect transparency and reliability at every step. <br />
          With CargoPro, deliver superior service through: <br />
          <ul className="list-disc list-inside ml-4">
            <li>Real-time cargo tracking via app, SIM, and FASTag</li>
            <li>Accurate ETAs and digital delivery confirmations</li>
            <li>Service-level agreements integrated into workflows</li>
          </ul>
          Build trust, increase retention, and stand out in a competitive
          market.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        Logistics is transforming — and those who digitize will lead the way.{" "}
        <br />
        With strategies rooted in data, automation, sustainability, and
        collaboration, CargoPro gives you the tools to grow fast, stay agile,
        and delight customers. <br />
        Whether you're searching for CargoPro, Cargo Pro, or a future-ready
        freight solution, we help you move beyond manual processes into a
        smarter, greener, and more connected logistics future. <br />
        Embrace digital transformation with confidence — and let CargoPro power
        your progress.
      </>
    ),
    footerText: "Found this article helpful? Share it with your network!",
  };

  const insightsData = [
    {
      image: logisticsImage,
      heading:
        "Digital Transformation Strategies for Logistics Companies: The CargoPro Edge",
      date: "February 19, 2025",
      link: "/blogs/digital-transformation-logistics",
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
        heading="Digital Transformation Strategies for Logistics Companies: The CargoPro Edge"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            In a world of high-speed supply chains and rising customer
            expectations, logistics companies need to evolve — fast. <br />
            Enter CargoPro (or Cargo Pro): a powerful digital platform that goes
            beyond TMS basics. <br />
            With advanced features spanning automation, sustainability,
            real-time tracking, and cross-functional collaboration, CargoPro
            empowers logistics companies to drive performance and future-proof
            their operations. <br />
            Let’s explore the five key strategies to unlock your logistics
            transformation.
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

export default Blog5;

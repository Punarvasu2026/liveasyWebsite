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
import RevolutionzingLogisticsBg from "../../assets/Blogs/blog-11/blog-11-bg.webp";
import logisticsImage from "../../assets/Blogs/blog-11/blog-11-image.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/blog-11/reducing-logistics-cost.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/blog-11/digital-transformations.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/blog-11/comprehensive-logistics-action-plan.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/blog-11/economic-developmemt.webp";
import RevolutionizingLogisticsImage5 from "../../assets/Blogs/blog-11/enhancing-customer-experience.webp";

const Blog11 = () => {
  const sections = [
    {
      heading: "Reducing Logistics Cost",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          India’s current logistics cost is considerably higher than that of
          developed countries such as the USA, Germany, and South Korea. This
          inflates the price of goods and hampers global competitiveness.
          <br />
          <br />
          <strong>Key Cost Challenges:</strong>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Manual customs clearance and bureaucratic delays</li>
            <li>Lack of a unified platform for documentation</li>
            <li>Inefficient tracking mechanisms</li>
            <li>High fuel prices and maintenance costs</li>
            <li>Poor infrastructure and traffic bottlenecks</li>
          </ul>
          The NLP proposes targeted reforms and investments to eliminate
          redundancies, reduce transit delays, and bring the logistics cost down
          to 8% by 2030.
        </>
      ),
    },
    {
      heading: "Digital Transformation in Logistics",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          The logistics sector has long relied on traditional methods, resulting
          in inefficiencies, delays, and rising costs. NLP 2022 emphasizes a
          shift to digitization as a core solution for modernization.
          <br />
          <br />
          <strong>Major Digital Initiatives:</strong>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>
              <strong>Digital Integration System</strong>: Aims to integrate
              databases and functions across road, rail, air, ports, customs,
              and commerce. Ensures real-time visibility and centralized control
              for all logistics activities.
            </li>
            <li>
              <strong>Unified Logistics Interface Platform (ULIP)</strong>: A
              one-stop digital portal consolidating all logistics services.
              Enables smoother coordination among shippers, freight operators,
              customs, and other stakeholders.
            </li>
            <li>
              <strong>Ease of Logistics Services (E-LOGS)</strong>: A digital
              platform for instant grievance redressal and support. Enables
              users to raise and resolve issues directly with government
              agencies.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Comprehensive Logistics Action Plan (CLAP)",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          To bring structure to its vision, NLP includes a Comprehensive
          Logistics Action Plan, focusing on:
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Standardization of logistics infrastructure</li>
            <li>Service benchmarking to meet international quality levels</li>
            <li>Human resource development and capacity building</li>
            <li>Development of multimodal logistics parks (MMLPs)</li>
            <li>Integrated infrastructure development under PM Gati Shakti</li>
          </ul>
        </>
      ),
    },
    {
      heading: "Economic Development and Global Competitiveness",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          The policy envisions the logistics sector as a growth engine for
          India’s economy. By simplifying complex supply chains and implementing
          technology-driven systems, NLP aims to:
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Reduce lead times in manufacturing and delivery</li>
            <li>Minimize stock-outs and wastage</li>
            <li>Improve inventory management and route optimization</li>
            <li>
              Generate employment through modern logistics parks, hubs, and
              services
            </li>
            <li>Promote “Make in India” and export competitiveness</li>
          </ul>
          The seamless and tech-powered logistics network will boost industrial
          output, enhance supply chain efficiency, and promote a self-reliant
          economy (Atmanirbhar Bharat).
        </>
      ),
    },
    {
      heading: "Enhancing Customer Experience",
      image: RevolutionizingLogisticsImage5,
      paragraph: (
        <>
          Customer expectations have evolved — they now demand real-time
          updates, accurate ETAs, and end-to-end visibility.
          <br />
          With CargoPro’s advanced tracking features, clients can monitor their
          cargo across the journey. Whether via app tracking, SIM-based GPS, or
          FASTag-based checkpoints, the system ensures full transparency.
          Integrated features like contract-based delivery SLAs and digital
          acknowledgments further enhance customer trust and retention.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        The National Logistics Policy 2022 marks a transformative leap for
        India’s logistics sector. With a clear roadmap for reducing logistics
        costs, integrating digital platforms, and modernizing infrastructure,
        NLP is a game-changer for the economy.
        <br />
        As logistics becomes faster, smarter, and more cost-effective, it will
        not only benefit businesses but also empower entrepreneurs, MSMEs,
        exporters, and consumers. By aligning with global standards, this policy
        positions India as a leading logistics hub, ready to compete on the
        world stage.
        <br />
        The PM Gati Shakti initiative, combined with NLP, is indeed the master
        plan India needed to streamline logistics and fuel the next wave of
        economic growth and development.
      </>
    ),
    footerText: "Found this helpful? Share it with your network!",
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
        heading="National Logistics Policy 2022 – Explained"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            The logistics sector is undeniably the cornerstone of the Indian
            economy. It plays a critical role in facilitating the seamless
            movement of raw materials, goods, and services across the country.
            Behind every successful business lies a well-coordinated logistics
            operation that enables timely delivery, cost efficiency, and
            enhanced consumer satisfaction.
            <br />
            <br />
            Not just in business operations, the logistics industry contributes
            nearly 13–14% of India’s GDP, making it a powerful driver of
            economic growth, global trade connectivity, and industrial
            development. However, despite its significance, the sector faces
            numerous inefficiencies due to fragmented infrastructure, outdated
            systems, and high operating costs.
            <br />
            <br />
            To address these challenges and push for a revolutionary
            transformation, the Government of India introduced the National
            Logistics Policy (NLP) on September 17, 2022, under the leadership
            of Prime Minister Narendra Modi.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>India’s Logistics Future Starts Now</>}
        text={
          <>
            Learn how CargoPro supports national policy goals with real-time
            visibility, predictive insights, and multi-modal integrations.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog11;

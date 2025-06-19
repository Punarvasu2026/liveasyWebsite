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

const Blog1 = () => {
  const sections = [
    {
      heading: "Optimized Routes = Lower Emissions",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "With CargoPro’s AI-driven route planning, your vehicles take the most efficient and eco-friendly paths. Real-time data from GPS, live tracking, and FASTag checkpoints help avoid congested or fuel-wasting routes — reducing idle time and overall fuel usage. The result? Fewer emissions, lower costs, and faster deliveries.This level of route optimization isn’t just good for business — it’s a game-changer for the planet.",
    },
    {
      heading: "Intelligent Fleet Management for Efficiency",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "CargoPro’s connected ecosystem tracks every shipment and vehicle in real-time. It monitors vehicle performance, identifies underperforming assets, and suggests proactive maintenance — ensuring optimal fuel efficiency and extending vehicle life.Better-maintained fleets = reduced breakdowns, fewer emissions, and a longer lifespan for every truck in your system.",
    },
    {
      heading: "Paperless Workflows Reduce Waste",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "CargoPro digitizes freight sourcing, bidding, POD (Proof of Delivery) submission, invoice generation, and even indent automation. Going paperless across your logistics workflow doesn’t just save time — it helps save trees and lowers your carbon output.Less printing. Less waste. More sustainable operations.",
    },
    {
      heading: "Unified Platform = Less Resource Waste",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "By acting as a centralized hub for transporters, vendors, accounts, and logistics teams, CargoPro eliminates inefficiencies like duplicate shipments, miscommunication, or overproduction. When everyone’s on the same page through a collaborative platform, the environmental benefits follow naturally.You reduce errors, rerouting, fuel wastage — and ultimately your environmental footprint.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "The path to sustainable logistics lies in the smart integration of technology and environmental responsibility. With CargoPro’s modern TMS, logistics companies gain not only operational control and cost savings but also reduce their environmental impact significantly.Whether you're searching for CargoPro, Cargo Pro, or just a better cargo and freight management platform, know this: the future of logistics is green, and it’s digital.By optimizing routes, managing fleets, reducing paperwork, and enhancing accountability, CargoPro enables logistics companies to become active contributors to climate solutions — not just supply chain players.",
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
        heading="Eco-Friendly Logistics: Reducing Carbon Footprint Through Digital Innovation with CargoPro"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text="In a world increasingly focused on sustainability and climate action, industries are re-evaluating how their operations affect the environment. The logistics and supply chain sector, a cornerstone of global commerce, has long grappled with its carbon footprint — from emissions caused by freight transport to paper-heavy administrative processes.
Enter CargoPro — or Cargo Pro, as many users also search it online — a next-generation TMS (Transportation Management System) that combines smart logistics, real-time tracking, and automation to drive not only operational efficiency but also a measurable reduction in environmental impact.
Whether you're looking for green logistics, freight optimization, or simply a more sustainable way to manage cargo, CargoPro is setting the benchmark for eco-conscious transportation."
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />;
      <CargoProBookDemo
        heading={<>Your Logistics, Now Smarter.</>}
        text={
          <>
            It’s time to stop guessing where your shipment is. Start tracking it
            in <br />
            real time — with CargoPro’s smart tracking suite.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog1;

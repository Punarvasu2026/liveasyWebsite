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

const Blog6 = () => {
  const sections = [
    {
      heading: "Enhanced Efficiency with Automation",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "Whether you're a plant manager or transporter, automation saves time and reduces manual coordination. CargoPro’s in-plant vehicle tools use real-time data to optimize routes, reduce congestion, and automate task assignments. It eliminates guesswork and ensures smoother movement from entry to loading bay. For transporters, it means: shorter turnaround times, live job updates, and GPS-based accuracy — resulting in higher throughput with fewer delays and less human intervention.",
    },
    {
      heading: "Safety-First Vehicle Movement",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "Safety risks rise when vehicle movement is uncontrolled. CargoPro allows plants to enforce access control and zone-based permissions. For transporters, it ensures drivers operate only in safe, authorized areas. Additional safety features include: dynamic speed limits, geofence alerts, and driver behavior tracking. This improves driver accountability and reduces on-site incidents, protecting both the plant and the transporter.",
    },
    {
      heading: "Smart Use of Data",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "Every in-plant movement creates data — and smart systems use it to optimize operations. CargoPro’s dashboard provides clear insights on idle time, route bottlenecks, driver efficiency, and vehicle entry/exit metrics. For transporters, this means better vehicle utilization and predictive maintenance — boosting reliability and reducing costs over time.",
    },
    {
      heading: "Wrapping Up: A Smarter Way Forward",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "In-plant vehicle automation is a win-win. For industries, it improves visibility, safety, and flow. For transporters, it boosts efficiency and credibility. With CargoPro, you get: real-time vehicle control, automated routing and dispatch, and safer, smarter logistics. As industries grow and transporter expectations evolve, CargoPro bridges the gap with a platform that’s both scalable and easy to adopt.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "In-plant vehicle logistics is often overlooked, but the impact of digitization is transformational. With CargoPro’s automation, safety protocols, and data-driven insights, companies can reduce delays, minimize risk, and optimize performance. Whether you're searching for CargoPro, Cargo Pro, or ways to modernize your industrial transport operations, our platform offers the tools you need to control, streamline, and future-proof your in-plant vehicle movement.",
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
        heading="Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement with CargoPro"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text="In today’s fast-moving industrial world, efficiency and safety are no longer optional — they’re critical for smooth operations. One often-overlooked area is in-plant vehicle movement — the circulation of transport vehicles within manufacturing plants, warehouses, or terminals. Manual processes often lead to delays, bottlenecks, and safety concerns. But with smart platforms like CargoPro (or Cargo Pro), both industries and transporters gain access to digital tools that streamline internal logistics and improve outcomes."
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
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

export default Blog6;

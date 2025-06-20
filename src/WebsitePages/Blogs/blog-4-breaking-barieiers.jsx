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

const Blog4 = () => {
  const sections = [
    {
      heading: "The Cost Conundrum: Making Digital Affordable",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "For many logistics SMEs, the initial cost of implementing digital logistics tools like a TMS can feel daunting. CargoPro solves this with modular, pay-as-you-scale pricing — so you invest only in what you need. Over time, the savings from automation, fewer errors, and faster operations far outweigh the upfront expense, making digital transformation both feasible and profitable.",
    },
    {
      heading: "Overcoming Resistance to Change",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "Operational teams often hesitate when switching from manual to digital workflows. CargoPro eases this transition with user-friendly, role-based dashboards tailored for shippers, carriers, and admins. Add onboarding support and dedicated success managers to the mix, and change becomes not a threat — but a competitive advantage.",
    },
    {
      heading: "Securing Your Supply Chain Data",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "Digital logistics success hinges on protecting sensitive cargo and bidding data. CargoPro ensures top-tier security with end-to-end encryption, GDPR compliance, regular audits, and strict access controls. From POD storage to contract data, security is embedded across our platform to build trust with every stakeholder.",
    },
    {
      heading: "Collaboration Over Complexity",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "Logistics isn’t a solo operation — it’s an ecosystem. CargoPro acts as your collaborative platform, connecting all supply chain players. With integrated features like live tracking, reverse auctions, and automated invoicing, we streamline coordination between teams, vendors, and carriers — reducing complexity and accelerating adoption.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up: From Challenge to Competitive Edge",
    description:
      "Digital logistics comes with hurdles — cost concerns, resistance to change, and security risks. But with CargoPro, each hurdle becomes an opportunity. Our platform helps companies move from manual chaos to digital clarity, with scalable features, intuitive interfaces, and robust security baked in. Whether it’s real-time tracking, reverse auction sourcing, or automation of freight invoices, CargoPro makes the future of logistics accessible — and transformative.",
    footerText: "Liked what you read? Share it with your network!",
  };

  const insightsData = [
    {
      image: logisticsImage,
      heading:
        "Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions with CargoPro",
      date: "February 5, 2025",
      link: "/blogs/breaking-barriers-digital-logistics",
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
        heading="Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions with CargoPro"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text="In today’s fast-evolving logistics ecosystem, going digital isn’t optional — it’s essential. Yet, adopting new tools comes with its own challenges. At CargoPro (or Cargo Pro, as many search it), we believe these challenges aren't barriers — they're opportunities for growth. From cost-effective scaling to seamless team adoption and robust data security, CargoPro helps logistics companies break through the noise and digitize with confidence."
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

export default Blog4;

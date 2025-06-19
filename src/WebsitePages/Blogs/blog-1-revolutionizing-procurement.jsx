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
      heading: "Centralized Procurement & Indent System",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "CargoPro consolidates your procurement and indent management into one smart dashboard. No more juggling spreadsheets or manual entries — all freight, vendor, and indent data is digitized and structured for real-time access. With every update visible to your team and vendors, you unlock full transparency and accountability across your entire logistics operation.",
    },
    {
      heading: "Smart Vendor & Transporter Management",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "Manage your vendor ecosystem like never before. With CargoPro, you maintain a verified database of transporters and vendors, track their past performance, automate communication via WhatsApp/email, and even evaluate bids through reverse auctions. The system ensures seamless onboarding, real-time visibility, and lasting partnerships with high-performing logistics providers.",
    },
    {
      heading: "Automated Indents & PO Generation",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "Forget manual indent creation or back-and-forth emails. CargoPro uses your pre-fed contract rates and shipment data to auto-assign indents to the most cost-effective transporter. For procurement, Purchase Orders (POs) can be automatically generated based on approved requisitions — saving hours of effort and minimizing data-entry errors. Through this automation, companies move toward a future where freight bidding and sourcing is seamless, digital, and optimized.",
    },
    {
      heading: "Real-Time Budget Control & Spend Visibility",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "Logistics and finance teams can now control spend like never before. Set contract rates, configure budget thresholds, and get alerts when spending crosses limits. CargoPro’s TMS platform brings budget discipline into your transport and procurement process — ensuring that every indent and order stays within planned costs.",
    },
    {
      heading: "Advanced Reporting & Spend Analytics",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "CargoPro gives you deep insights through detailed freight analytics, procurement KPIs, and audit logs. Identify trends in spending, evaluate vendor reliability, and unlock process optimizations. Whether it’s knowing which transporter wins the most bids, or tracking average freight cost per route, CargoPro helps you make data-driven logistics decisions.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "CargoPro isn’t just a logistics TMS platform — it’s a full-stack procurement automation and freight sourcing engine. From centralized indent creation and reverse auction bidding to live shipment tracking, automated invoice processing, and complete auditing, CargoPro is your one-stop solution for logistics transformation.Automate your processes. Eliminate manual chaos. Drive visibility, control, and cost savings — with CargoPro.",
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
        heading="Revolutionizing Procurement and Indent Management with CargoPro’s Automated TMS Platform"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text="In the dynamic world of logistics and supply chain management, procurement and indent workflows often become bottlenecks due to manual processes, redundant tasks, and lack of visibility. That’s where CargoPro, a powerful AI-based SaaS TMS (Transportation Management System), changes the game.
With features like reverse auction, automated freight sourcing, live tracking, and centralized indent automation, CargoPro streamlines procurement and logistics from planning to execution — saving time, reducing cost, and eliminating errors. Let’s explore how CargoPro empowers your logistics teams and transforms your operations:"
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

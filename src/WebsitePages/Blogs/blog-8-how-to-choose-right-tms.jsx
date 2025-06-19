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

const Blog8 = () => {
  const sections = [
    {
      heading: "Assess Your Business Needs",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          Every business has unique logistics pain points. <br />
          Begin by asking:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Are you struggling with manual dispatch or route planning?</li>
            <li>Do you need live shipment tracking or bidding tools?</li>
            <li>What’s your shipment volume and transport mode?</li>
          </ul>
          CargoPro offers flexible modules that adapt to your operations —
          supporting everything from indent automation to real-time freight
          bidding.
        </>
      ),
    },
    {
      heading: "Choose a User-Friendly Interface",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          A feature-rich TMS is only useful if it’s easy to operate. <br />
          Look for platforms that are:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Intuitive for all users</li>
            <li>Mobile-responsive for drivers on the go</li>
            <li>Quick to onboard and easy to scale</li>
          </ul>
          CargoPro delivers a sleek UI with smart navigation — enabling
          dispatchers, transporters, and managers to execute tasks seamlessly.
        </>
      ),
    },
    {
      heading: "Real-Time Visibility and Reporting",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          Visibility drives accountability. A powerful TMS must provide:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Live GPS or SIM/Fastag tracking</li>
            <li>Status alerts and delivery PODs</li>
            <li>Performance metrics and exceptions</li>
          </ul>
          With CargoPro, your teams gain real-time oversight from loading to
          delivery — helping you stay proactive, not reactive.
        </>
      ),
    },
    {
      heading: "Powerful Analytics for Smarter Decisions",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          Beyond visibility, analytics turn data into strategy. <br />
          Look for tools that support:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Shipment cost breakdowns</li>
            <li>Transporter benchmarking</li>
            <li>Route and load planning efficiency</li>
            <li>ESG and sustainability insights</li>
          </ul>
          CargoPro helps leadership teams optimize cost, reduce risk, and scale
          with confidence.
        </>
      ),
    },
    {
      heading: "Integration & Scalability",
      image: logisticsImage,
      paragraph: (
        <>
          Your TMS must plug into your digital ecosystem. <br />
          CargoPro offers:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Open REST APIs for ERP or WMS integration</li>
            <li>Driver/manager mobile apps for field updates</li>
            <li>Scalable modules for pan-India or multi-location ops</li>
          </ul>
          Whether you're running plant logistics or full-scale national
          dispatch, CargoPro grows with your business.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        Choosing the right TMS shapes how your logistics runs — today and
        tomorrow. <br />
        Whether you're managing 50 trucks or 5000, the ideal platform should
        automate, integrate, and simplify. <br />
        CargoPro is more than just a TMS — it’s your competitive edge. <br />
        From smart bidding and indenting to POD automation and performance
        insights, CargoPro delivers modern logistics infrastructure in a
        flexible, user-friendly solution. <br />
        Whether you searched for CargoPro, Cargo Pro, or just a smarter way to
        manage cargo — your search ends here.
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
            strategic enabler. <br />
            The right TMS helps streamline operations, reduce costs, and offer
            real-time visibility across your supply chain. <br />
            But with so many options, selecting the best fit can feel daunting.{" "}
            <br />
            This guide will help you focus on the right features and
            considerations — and show how CargoPro, or Cargo Pro, delivers a
            modular and intuitive solution that modern logistics teams can rely
            on.
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

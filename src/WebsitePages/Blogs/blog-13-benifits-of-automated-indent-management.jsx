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
import CargoProLogo from "../../assets/CargoProLogo.webp";
import RevolutionzingLogisticsBg from "../../assets/Blogs/blog-13/blog-13-bg.webp";
import logisticsImage from "../../assets/Blogs/blog-13/blog-13-image.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/blog-13/increase-efficiency.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/blog-13/improves-accuracy-and-reduces-errors.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/blog-13/enhances-transperency-and-control.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/blog-13/faster-approval-workflows.webp";
import RevolutionizingLogisticsImage5 from "../../assets/Blogs/blog-13/seamless-integration.webp";

const Blog13 = () => {
  const sections = [
    {
      heading: "Increases Efficiency",
      image: RevolutionizingLogisticsImage1,
      paragraph: (
        <>
          Automated systems eliminate the need for repetitive manual tasks such
          as filling out forms, sending emails for approvals, and following up
          on status. With a digital workflow in place, indents can be generated,
          routed, and approved in real-time, saving hours of manual effort.
        </>
      ),
    },
    {
      heading: "Improves Accuracy and Reduces Errors",
      image: RevolutionizingLogisticsImage2,
      paragraph: (
        <>
          Manual data entry often leads to mistakes in quantities,
          specifications, or pricing. Automation ensures that standardized
          templates and predefined fields are used, minimizing errors and
          improving data accuracy across procurement processes.
        </>
      ),
    },
    {
      heading: "Enhances Transparency and Control",
      image: RevolutionizingLogisticsImage3,
      paragraph: (
        <>
          Automated systems allow for real-time tracking and monitoring of each
          indent from submission to approval and fulfillment. Stakeholders can
          instantly check the status, reducing the dependency on follow-up
          emails and manual updates. This improves transparency and overall
          control.
        </>
      ),
    },
    {
      heading: "Faster Approval Workflows",
      image: RevolutionizingLogisticsImage4,
      paragraph: (
        <>
          CargoPro helps companies create customized workflows that
          automatically route indents to the correct department or individual
          based on predefined rules. This reduces bottlenecks and speeds up the
          approval process, ensuring timely procurement.
        </>
      ),
    },
    {
      heading: "Seamless Integration with Procurement Ecosystem",
      image: RevolutionizingLogisticsImage5,
      paragraph: (
        <>
          CargoPro supports integration with inventory systems, order processing
          tools, and finance modules, enabling a connected procurement process.
          Once an indent is approved, it can automatically initiate further
          actions such as vendor selection or order placement.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping up",
    description: (
      <>
        In conclusion, automated indent management systems like CargoPro offer
        significant advantages by simplifying procurement workflows, improving
        accuracy, and reducing delays. By eliminating manual bottlenecks and
        increasing transparency, businesses can ensure that procurement runs
        smoothly and contributes effectively to overall operational success.
      </>
    ),
    footerText: "Found this article helpful? Share with your procurement team!",
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
      <Helmet>
        <title>
          CargoPro | The Benefits of Automated Indent Management for Procurement
        </title>
        <meta
          name="description"
          content="Discover how CargoPro's automated indent management system streamlines procurement by reducing manual delays, improving accuracy, and enhancing transparency. Simplify your procurement workflows today."
        />
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
      </Helmet>

      <Navbar />
      <BlogsHero
        heading="The Benefits of Automated Indent Management for Procurement"
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            Procurement is a core function in any business, ensuring that the
            necessary goods and services are acquired efficiently and
            cost-effectively. One major challenge in procurement is the
            management of indents or purchase requests, which can become
            complicated, slow, and prone to errors when handled manually.
            <br />
            <br />
            To overcome these limitations, companies are increasingly adopting
            automated indent management systems like those offered by CargoPro.
            <br />
            Automated indent management systems simplify and streamline the
            process of creating, approving, and tracking purchase requests,
            ultimately improving procurement efficiency and reducing operational
            delays.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>Procurement Made Simple.</>}
        text={
          <>
            Eliminate manual indent delays and streamline your workflows with
            CargoPro’s smart procurement automation.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog13;

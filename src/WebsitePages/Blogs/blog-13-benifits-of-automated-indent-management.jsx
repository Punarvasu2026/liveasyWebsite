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
import logisticsImage from "../../assets/Blogs/blog-13/blog-13-image.webp";

const Blog13 = () => {
  const sections = [
    {
      heading: "Increases Efficiency",
      image: "/images/Blogs/blog-13/increase-efficiency.webp",
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
      image: "/images/Blogs/blog-13/improves-accuracy-and-reduces-errors.webp",
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
      image: "/images/Blogs/blog-13/enhances-transperency-and-control.webp",
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
      image: "/images/Blogs/blog-13/faster-approval-workflows.webp",
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
      image: "/images/Blogs/blog-13/seamless-integration.webp",
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
      image: "/images/Blogs/blogs-cover-images/blog-14-cover-image.webp",
      heading: "How to Streamline Yard Management with In-Plant Optimization",
      date: "January 26, 2025",
      link: "/blogs/how-to-streamline-yard-management-with-in-plant-optimization",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-15-cover-image.webp",
      heading:
        "Achieving End-to-End Visibility with Logistics Tracking Solutions",
      date: "January 26, 2025",
      link: "/blogs/achieving-end-to-end-visibility-with-logistics-tracking-solutions",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-16-cover-image.webp",
      heading: "The Power of Data-Driven Logistics Analytics and Insights",
      date: "January 26, 2025",
      link: "/blogs/the-power-of-data-driven-logistics-analytics-and-insights",
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
        <link rel="icon" type="image/webp" href="/CargoProLogo.webp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/CargoProLogo.webp"
        />
        {/* Load GA script asynchronously */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LQCDPXD2T3"
        ></script>

        {/* Inline GA initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LQCDPXD2T3');
            `,
          }}
        />
      </Helmet>

      <Navbar />
      <BlogsHero
        heading="The Benefits of Automated Indent Management for Procurement"
        bgImage="/images/Blogs/blog-13/blog-13-bg.webp"
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

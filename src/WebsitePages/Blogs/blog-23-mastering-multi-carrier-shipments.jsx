// External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

// Components
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";
import ContentSection from "../../components/Blogs/ReusableComponents/blogs-content-section";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import RelatedBlogs from "../../components/Blogs/Blog/related-blogs";

const Blog23 = () => {
  const sections = [
    {
      heading: "Unified Platform for Total Visibility",
      image: "/images/Blogs/blog-23/unified-platform-for-total-visibility.webp",
      paragraph: (
        <>
          CargoPro’s centralized Shipping Management System (SMS) gives you
          real-time updates on every order, carrier, and route. Track every
          shipment across your carrier network on one dashboard.
        </>
      ),
    },
    {
      heading: "Strategic Carrier Selection",
      image: "/images/Blogs/blog-23/strategic-carrier-selection.webp",
      paragraph: (
        <>
          Beyond lowest-cost bidding, CargoPro weighs speed, reliability, and
          service quality. It helps you build a resilient carrier network that
          meets your performance and budget benchmarks.
        </>
      ),
    },
    {
      heading: "Standardization Across Operations",
      image: "/images/Blogs/blog-23/standardization-across-operations.webp",
      paragraph: (
        <>
          Avoid compliance errors and shipment rejections. CargoPro enforces
          carrier-specific packaging, labeling, and documentation standards,
          ensuring smooth transfers between operators.
        </>
      ),
    },
    {
      heading: "Dynamic Rate Optimization",
      image: "/images/Blogs/blog-23/dynamic-rate-optimization.webp",
      paragraph: (
        <>
          Let CargoPro’s smart algorithms auto-select the best carrier based on
          price, ETA, and route. Real-time rate comparison ensures you always
          get the best deal without manual effort.
        </>
      ),
    },
    {
      heading: "Transparent Customer Communication",
      image: "/images/Blogs/blog-23/transparent-customer-communication.webp",
      paragraph: (
        <>
          CargoPro sends automated order updates and tracking links to
          customers, boosting satisfaction and minimizing inquiries. Better
          communication = stronger customer trust.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        With CargoPro’s multi-carrier shipment tools, you gain control,
        visibility, and savings. Reimagine your freight operations with unified
        dashboards, smart carrier logic, and seamless communication.
      </>
    ),
    footerText: "Found this article helpful? Share it with your network!",
  };

  const insightsData = [
    {
      image: "/images/Blogs/blogs-cover-images/blog-24-cover-image.webp",
      heading:
        "Revolutionizing Freight Transport – How Automation is Reshaping Logistics",
      date: "January 26, 2025",
      link: "/blogs/revolutionizing-freight-transport",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-23-cover-image.webp",
      heading:
        "Mastering Multi-Carrier Shipments and Orders – Best Practices for Modern Logistics",
      date: "January 26, 2025",
      link: "/blogs/mastering-multi-carrier-shipments-and-orders",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-22-cover-image.webp",
      heading:
        "Efficiency at Every Step – How Automated Invoicing is Simplifying Logistics",
      date: "January 26, 2025",
      link: "/blogs/how-automated-invoicing-in-simplifying-logistics",
    },
  ];

  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          CargoPro | Mastering Multi-Carrier Shipments and Orders – Best
          Practices for Modern Logistics
        </title>
        <meta
          name="description"
          content="Discover how CargoPro enables seamless integration of Transportation Management Systems (TMS) and Warehouse Management Systems (WMS) for smarter, faster logistics operations with real-time data sharing, streamlined order fulfillment, and enhanced customer satisfaction."
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

      <BlogsHero
        heading="Mastering Multi-Carrier Shipments and Orders – Best Practices for Modern Logistics"
        text={
          <>
            Managing multiple carriers is a modern logistics necessity—but it’s
            not easy. Fragmented systems, inconsistent tracking, and pricing
            variability are common pain points. CargoPro simplifies this with a
            unified solution for multi-carrier shipment management.
          </>
        }
        bgImage="/images/Blogs/blog-23/blog-23-bg.webp"
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>One Platform. Total Logistics Control.</>}
        text={
          <>
            Discover the power of synchronizing your transportation and
            warehousing with CargoPro’s fully integrated logistics platform.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog23;

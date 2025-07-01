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

const Blog24 = () => {
  const sections = [
    {
      heading: "Higher Productivity, Less Paperwork",
      image: "/images/Blogs/blog-24/higher-productivity-less-paperowork.webp",
      paragraph: (
        <>
          Say goodbye to manual documentation. From scanning invoices to digital
          PODs and automated order processing, CargoPro speeds up operations and
          reduces manual load.
        </>
      ),
    },
    {
      heading: "Improved Customer Experience",
      image: "/images/Blogs/blog-24/improved-customer-experience.webp",
      paragraph: (
        <>
          With features like route optimization, real-time tracking, and instant
          delivery confirmations, CargoPro cuts delays and keeps customers
          informed—elevating satisfaction and retention.
        </>
      ),
    },
    {
      heading: "Significant Cost Reductions",
      image: "/images/Blogs/blog-24/significant-cost-reductions.webp",
      paragraph: (
        <>
          Traditional logistics comes with redundant processes and excess
          paperwork. CargoPro centralizes scheduling, billing, and
          communication—cutting admin costs while ensuring compliance and
          security.
        </>
      ),
    },
    {
      heading: "Stay Ahead of the Curve",
      image: "/images/Blogs/blog-24/stay-ahead-of-the-curve.webp",
      paragraph: (
        <>
          As competition grows, automation is your edge. CargoPro evolves with
          market needs—adding features like reverse bidding, auto-indents, and
          smart reporting—so your business stays lean and responsive.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        Automation is no longer optional in logistics. With CargoPro, your
        business becomes faster, smarter, and more competitive. It’s time to
        ditch the outdated playbook and embrace the automated future of freight
        transport.
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
          CargoPro | Revolutionizing Freight Transport – How Automation is
          Reshaping Logistics
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
        heading="Revolutionizing Freight Transport – How Automation is Reshaping Logistics"
        text={
          <>
            Automation isn’t the future of logistics—it’s already here. In a
            world of rising costs and tight timelines, CargoPro delivers
            automated logistics workflows that boost productivity, improve
            accuracy, and slash operating costs.
          </>
        }
        bgImage="/images/Blogs/blog-24/blog-24-bg.webp"
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

export default Blog24;

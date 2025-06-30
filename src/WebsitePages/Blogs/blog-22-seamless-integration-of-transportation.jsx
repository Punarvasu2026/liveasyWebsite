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

const Blog22 = () => {
  const sections = [
    {
      heading: "Cracking the Code of Freight Sourcing",
      image: "/images/Blogs/blog-22/cracking-the-code-of-freight-sourcing.webp",
      paragraph: (
        <>
          Freight sourcing means finding the best rates from a network of
          carriers. CargoPro makes this efficient with its smart bidding system
          that evaluates cost, route, and performance.
        </>
      ),
    },
    {
      heading: "Unleashing Reverse Auctions",
      image: "/images/Blogs/blog-22/unleashing-reverse-auctions.webp",
      paragraph: (
        <>
          CargoPro introduces reverse auctions, where carriers bid against each
          other in real-time to win your shipment. You sit back while carriers
          offer their best price—saving you money without sacrificing quality.
        </>
      ),
    },
    {
      heading: "Encouraging Healthy Carrier Competition",
      image:
        "/images/Blogs/blog-22/encouraging-healthy-carrier-competition.webp",
      paragraph: (
        <>
          This competition drives better service, punctual deliveries, and lower
          costs. It also motivates carriers to innovate, resulting in a win-win
          for your supply chain.
        </>
      ),
    },
    {
      heading: "Simplifying Invoicing and Settlements",
      image: "/images/Blogs/blog-22/simplifying-invoicing-and-settlements.webp",
      paragraph: (
        <>
          CargoPro’s automated invoicing eliminates manual billing errors,
          automates settlement calculations, and ensures compliance with
          financial protocols. You get paid faster and reconcile accounts
          without delays.
        </>
      ),
    },
    {
      heading: "Staying Ahead in a Digital World",
      image: "/images/Blogs/blog-22/staying-ahead-in-digital-world.webp",
      paragraph: (
        <>
          CargoPro constantly evolves with industry trends. Our platform
          integrates seamlessly with your logistics workflow, providing you with
          cutting-edge features like digital POD, carrier tracking, and invoice
          matching.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        From freight sourcing to automated invoicing, CargoPro delivers next-gen
        logistics efficiency. Cut down on costs, streamline billing, and elevate
        service—all from one powerful platform.
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
          CargoPro | Efficiency at Every Step – How Automated Invoicing is
          Simplifying Logistics
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
        heading="Efficiency at Every Step – How Automated Invoicing is Simplifying Logistics"
        text={
          <>
            For logistics companies, efficiency isn’t a luxury—it’s survival.
            Financial operations like invoicing and freight sourcing can bog
            teams down if not optimized. CargoPro solves this with automated
            invoicing and reverse auction sourcing, streamlining your logistics
            like never before.
          </>
        }
        bgImage="/images/Blogs/blog-22/blog-22-bg.webp"
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

export default Blog22;

// External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

// Components
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";
import BlogsSection1 from "../../components/Blogs/ReusableComponents/blogs-section-1";
import ContentSection from "../../components/Blogs/ReusableComponents/blogs-content-section";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import RelatedBlogs from "../../components/Blogs/Blog/related-blogs";

// Image (kept local import as per instruction)
import logisticsImage from "../../assets/Blogs/blog-5/blog-5-image.webp";

const Blog5 = () => {
  const sections = [
    {
      heading: "Data-Driven Decision Making",
      image: "/images/Blogs/blog-5/data-driven-decision-making.webp",
      paragraph: (
        <>
          Smart logistics starts with smart data. With massive amounts of
          shipment, fleet, vendor, and rate data being generated daily,
          companies that rely on data-driven decision-making gain an undeniable
          edge
          <br />
          CargoPro empowers logistics leaders with actionable analytics
          dashboards and real-time visibility into key metrics — from
          transporter performance to reverse auction savings and live tracking
          stats. These insights enable better load planning, route optimization,
          and vendor negotiation, helping drive down costs and elevate
          performance.
        </>
      ),
    },
    {
      heading: "Intelligent Automation",
      image: "/images/Blogs/blog-5/intelligent-automation.webp",
      paragraph: (
        <>
          Automation is the cornerstone of operational excellence. Repetitive
          tasks such as indent creation, purchase order generation, document
          handling, and billing can drain manpower and increase errors. <br />
          CargoPro eliminates these inefficiencies through powerful automation —
          including Indent Automation, contract-based load assignment, and
          automated transporter bidding workflows. This ensures consistency,
          boosts speed, reduces paperwork, and allows human teams to focus on
          more strategic initiatives.
        </>
      ),
    },
    {
      heading: "Seamless Collaboration & Connectivity",
      image:
        "/images/Blogs/blog-5/seamless-collaboration-and-connectivity.webp",
      paragraph: (
        <>
          Digital transformation is as much about connectivity as it is about
          technology. Logistics success depends on constant coordination between
          multiple stakeholders — from transporters and vendors to warehouse
          operators and clients. With CargoPro’s collaborative TMS platform, all
          players are brought under a single digital roof, with real-time
          updates, live tracking, and centralized document workflows. This
          drastically reduces delays, enhances transparency, and improves SLAs.
        </>
      ),
    },
    {
      heading: "Sustainability as a Strategic Advantage",
      image: "/images/Blogs/blog-5/prioritizing-sustainability.webp",
      paragraph: (
        <>
          As environmental responsibility becomes a key business KPI,
          sustainable logistics is emerging as a critical focus area.
          <br />
          CargoPro supports eco-conscious practices through:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>Optimized routing (cutting fuel and emissions)</li>
            <li>Smart load consolidation</li>
            <li>Paperless documentation</li>
            <li>Digital PODs & invoices</li>
            <li>
              Fleet compliance tracking for pollution, insurance, and
              maintenance
            </li>
          </ul>
          This reduces your carbon footprint while aligning with both global
          standards and customer expectations for greener logistics.
        </>
      ),
    },
    {
      heading: "Enhanced Customer Experience",
      image: "/images/Blogs/blog-5/enhancing-customer-experience.webp",
      paragraph: (
        <>
          Customer expectations have evolved — they now demand real-time
          updates, accurate ETAs, and end-to-end visibility. <br />
          With CargoPro’s advanced tracking features, clients can monitor their
          cargo across the journey. Whether via app tracking, SIM-based GPS, or
          FASTag-based checkpoints, the system ensures full transparency.
          Integrated features like contract-based delivery SLAs and digital
          acknowledgments further enhance customer trust and retention.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        Digital transformation in logistics isn’t a trend — it’s the new
        standard. From intelligent automation and real-time cargo tracking to
        eco-friendly routing and robust collaboration, companies that embrace a
        connected and tech-first future are poised to dominate.
        <br />
        At CargoPro, we’re more than a tool — we’re a digital logistics
        ecosystem helping you thrive in a changing world. Whether you search for
        Cargo, Cargo Pro, or freight management software, our platform ensures
        your transformation journey is fast, secure, and ROI-driven.
      </>
    ),
    footerText: "Found this article helpful? Share it with your network!",
  };

  const insightsData = [
    {
      image: "/images/Blogs/blogs-cover-images/blog-6-cover-image.webp",
      heading:
        "Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement with CargoPro",
      date: "January 26, 2025",
      link: "/blogs/in-plant-automation",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-7-cover-image.webp",
      heading: "How Digitization Helps in Cutting Down Freight Cost",
      date: "January 26, 2025",
      link: "/blogs/digitization-helps-cutting-down-freight-cost",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-8-cover-image.webp",
      heading: "How to Choose the Right TMS: A Buyer’s Guide",
      date: "January 26, 2025",
      link: "/blogs/how-to-choose-the-right-tms",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Digital Transformation in Logistics: 5 Strategies for Growth with
          CargoPro
        </title>
        <meta
          name="description"
          content="Explore how CargoPro enables logistics companies to lead digital transformation with data-driven decisions, automation, sustainability, and customer-centric innovation."
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
        heading="Digital Transformation Strategies for Logistics Companies: The CargoPro Edge"
        bgImage="/images/Blogs/blog-5/blog-5-bg.webp"
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            In the fast-moving world of supply chains, digital transformation in
            logistics is no longer optional — it’s a strategic necessity. As
            competition intensifies and customer expectations grow, embracing
            digital innovation can mean the difference between thriving and
            falling behind.
            <br />
            At the forefront of this revolution is CargoPro (also known as Cargo
            Pro), a cutting-edge logistics platform redefining how companies
            manage cargo, optimize operations, and drive performance.
            <br />
            Below, we explore five proven digital strategies that logistics
            companies can implement to stay agile, sustainable, and
            customer-centric in today’s digital-first era.
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

export default Blog5;

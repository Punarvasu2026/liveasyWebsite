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

import logisticsImage from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image.webp";

const Blog1 = () => {
  const sections = [
    {
      heading: "Centralized Procurement & Indent System",
      image: "/images/Blogs/blog-1/centralized-procurement-and-indent.webp",
      paragraph:
        "CargoPro consolidates your procurement and indent management into one smart dashboard. No more juggling spreadsheets or manual entries — all freight, vendor, and indent data is digitized and structured for real-time access. With every update visible to your team and vendors, you unlock full transparency and accountability across your entire logistics operation.",
    },
    {
      heading: "Smart Vendor & Transporter Management",
      image: "/images/Blogs/blog-1/smart-vendor-and-transport-management.webp",
      paragraph:
        "Manage your vendor ecosystem like never before. With CargoPro, you maintain a verified database of transporters and vendors, track their past performance, automate communication via WhatsApp/email, and even evaluate bids through reverse auctions. The system ensures seamless onboarding, real-time visibility, and lasting partnerships with high-performing logistics providers.",
    },
    {
      heading: "Automated Indents & PO Generation",
      image: "/images/Blogs/blog-1/automated-indent-generation.webp",
      paragraph:
        "Forget manual indent creation or back-and-forth emails. CargoPro uses your pre-fed contract rates and shipment data to auto-assign indents to the most cost-effective transporter. For procurement, Purchase Orders (POs) can be automatically generated based on approved requisitions — saving hours of effort and minimizing data-entry errors. Through this automation, companies move toward a future where freight bidding and sourcing is seamless, digital, and optimized.",
    },
    {
      heading: "Real-Time Budget Control & Spend Visibility",
      image:
        "/images/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-4.webp",
      paragraph:
        "Logistics and finance teams can now control spend like never before. Set contract rates, configure budget thresholds, and get alerts when spending crosses limits. CargoPro’s TMS platform brings budget discipline into your transport and procurement process — ensuring that every indent and order stays within planned costs.",
    },
    {
      heading: "Advanced Reporting & Spend Analytics",
      image: "/images/Blogs/blog-1/advanced-reporting-and-spend-analysis.webp",
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
      image: "/images/Blogs/blogs-cover-images/blog-2-cover-image.webp",
      heading:
        "Eco-Friendly Logistics: Reducing Carbon Footprint Through Digital Innovation with CargoPro",
      date: "January 10, 2025",
      link: "/blogs/eco-friendly-logistics",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-3-cover-image.webp",
      heading:
        "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
      date: "January 18, 2025",
      link: "/blogs/say-goodbye-to-invoicing-hassles",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-4-cover-image.webp",
      heading:
        "Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions with CargoPro",
      date: "January 15, 2025",
      link: "/blogs/digital-solution-challenges",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Revolutionizing Procurement and Indent Management with CargoPro’s
          Automated TMS Platform | CargoPro
        </title>

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Revolutionizing Procurement and Indent Management with CargoPro’s
          Automated TMS Platform"
        />
        <meta
          property="og:description"
          content="Explore how CargoPro's AI-powered Transportation Management System (TMS) automates procurement and indent processes, enhances vendor management, controls budgets, and delivers advanced analytics to transform your logistics operations."
        />
        <meta
          property="og:image"
          content="https://cargopro.ai/CargoProLogo.webp"
        />
        <meta
          property="og:url"
          content="https://cargopro.ai/blogs/revolutionizing-procurement"
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Revolutionizing Procurement and Indent Management with CargoPro’s
          Automated TMS Platform"
        />
        <meta
          name="twitter:description"
          content="Explore how CargoPro's AI-powered Transportation Management System (TMS) automates procurement and indent processes, enhances vendor management, controls budgets, and delivers advanced analytics to transform your logistics operations."
        />
        <meta
          name="twitter:image"
          content="https://cargopro.ai/CargoProLogo.webp"
        />

        <meta
          name="description"
          content="Explore how CargoPro's AI-powered Transportation Management System (TMS) automates procurement and indent processes, enhances vendor management, controls budgets, and delivers advanced analytics to transform your logistics operations."
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
        heading="Revolutionizing Procurement and Indent Management with CargoPro’s Automated TMS Platform"
        bgImage="/images/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-bg.webp"
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

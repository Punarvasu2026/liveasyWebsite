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

// Images
import logisticsImage from "../../assets/Blogs/blog-4/blog-4-image.webp";

const Blog4 = () => {
  const sections = [
    {
      heading: "The Cost Conundrum: Making Digital Affordable",
      image: "/images/Blogs/blog-4/cost-conundrum.webp",
      paragraph:
        "For many logistics SMEs, the initial cost of implementing digital logistics tools like a TMS can feel daunting. CargoPro solves this with modular, pay-as-you-scale pricing — so you invest only in what you need. Over time, the savings from automation, fewer errors, and faster operations far outweigh the upfront expense, making digital transformation both feasible and profitable.",
    },
    {
      heading: "Overcoming Resistance to Change",
      image: "/images/Blogs/blog-4/resistance-to-change.webp",
      paragraph:
        "Operational teams often hesitate when switching from manual to digital workflows. CargoPro eases this transition with user-friendly, role-based dashboards tailored for shippers, carriers, and admins. Add onboarding support and dedicated success managers to the mix, and change becomes not a threat — but a competitive advantage.",
    },
    {
      heading: "Securing Your Supply Chain Data",
      image: "/images/Blogs/blog-4/overcoming-complexity.webp",
      paragraph:
        "Digital logistics success hinges on protecting sensitive cargo and bidding data. CargoPro ensures top-tier security with end-to-end encryption, GDPR compliance, regular audits, and strict access controls. From POD storage to contract data, security is embedded across our platform to build trust with every stakeholder.",
    },
    {
      heading: "Collaboration Over Complexity",
      image: "/images/Blogs/blog-4/data-security-concerns.webp",
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
      image: "/images/Blogs/blogs-cover-images/blog-5-cover-image.webp",
      heading:
        "Digital Transformation Strategies for Logistics Companies: The CargoPro Edge",
      date: "January 9, 2025",
      link: "/blogs/digital-transformation-strategies",
    },
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
  ];

  return (
    <>
      <Helmet>
        <title>
          Breaking Barriers: Solving Digital Logistics Challenges with CargoPro
        </title>
        <meta
          name="description"
          content="Discover how CargoPro helps logistics companies overcome digital adoption barriers—cost, resistance to change, security, and complexity—through scalable, secure, and user-friendly TMS solutions."
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
        heading="Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions with CargoPro"
        bgImage="/images/Blogs/blog-4/blog-4-bg.webp"
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

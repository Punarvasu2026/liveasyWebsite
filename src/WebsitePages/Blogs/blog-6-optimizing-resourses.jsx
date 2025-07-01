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

// Image (only this one kept imported locally as per instructions)
import logisticsImage from "../../assets/Blogs/blog-6/blog-6-image.webp";

const Blog6 = () => {
  const sections = [
    {
      heading: "Enhanced Efficiency with Automation",
      image: "/images/Blogs/blog-6/enhanced-efficiency-with-automation.webp",
      paragraph: (
        <>
          Whether you're a plant manager or transporter, automation saves time
          and reduces manual coordination.
          <br />
          CargoPro’s in-plant vehicle tools use real-time data to optimize
          routes, reduce congestion, and automate task assignments. It
          eliminates guesswork and ensures smoother movement from entry to
          loading bay.
          <br />
          For transporters, it means:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>Shorter turnaround times</li>
            <li>Live job updates</li>
            <li>GPS-based accuracy</li>
          </ul>
          The result? Higher throughput with fewer delays and less human
          intervention.
        </>
      ),
    },
    {
      heading: "Safety-First Vehicle Movement",
      image: "/images/Blogs/blog-6/safety-first-vehicle-movement.webp",
      paragraph: (
        <>
          Safety risks rise when vehicle movement is uncontrolled.
          <br />
          CargoPro allows plants to enforce access control and zone-based
          permissions. For transporters, it ensures drivers operate only in
          safe, authorized areas.
          <br />
          Additional safety features include:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>Dynamic speed limits</li>
            <li>Geofence alerts</li>
            <li>Driver behavior tracking</li>
          </ul>
          This improves driver accountability and reduces on-site incidents,
          protecting both the plant and the transporter.
        </>
      ),
    },
    {
      heading: "Smart Use of Data",
      image: "/images/Blogs/blog-6/smart-use-of-data.webp",
      paragraph: (
        <>
          Every in-plant movement creates data — and smart systems use it to
          optimize operations.
          <br />
          CargoPro’s dashboard provides clear insights on:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>Idle time</li>
            <li>Route bottlenecks</li>
            <li>Driver efficiency</li>
            <li>Vehicle entry/exit metrics</li>
          </ul>
          For transporters, this means better vehicle utilization and predictive
          maintenance — boosting reliability and reducing costs over time.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        In-plant vehicle automation is a win-win. For industries, it improves
        visibility, safety, and flow. For transporters, it boosts efficiency and
        credibility.
        <br />
        With CargoPro, you get:
        <ul className="list-disc list-inside ml-4">
          <li>Real-time Vehicle control</li>
          <li>Automated routing and dispatch</li>
          <li>Safer, Smarter logistics</li>
        </ul>
        As industries grow and transporter expectations evolve, CargoPro bridges
        the gap with a platform that’s both scalable and easy to adopt.
      </>
    ),
    footerText: "Found this article helpful? Spread the word!",
  };

  const insightsData = [
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
    {
      image: "/images/Blogs/blogs-cover-images/blog-9-cover-image.webp",
      heading:
        "Big Data and Predictive Analytics in Logistics: A Game Changer for Achieving End-to-End Supply Chain Visibility",
      date: "January 26, 2025",
      link: "/blogs/big-data-and-predictive-analytics-in-logistics",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CargoPro | Optimizing Resources and Safety: The Role of Automation in
          In-Plant Vehicle Movement
        </title>
        <meta
          name="description"
          content="Discover how CargoPro enhances in-plant vehicle movement with automation, improving efficiency, safety, and resource utilization for industries and transporters alike."
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
        heading="Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement with CargoPro"
        bgImage="/images/Blogs/blog-6/blog-6-bg.webp"
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            In today’s fast-moving industrial world, efficiency and safety are
            no longer optional — they’re critical for smooth operations. One
            often-overlooked area is in-plant vehicle movement — the circulation
            of transport vehicles within manufacturing plants, warehouses, or
            terminals.
            <br /> Manual processes often lead to delays, bottlenecks, and
            safety concerns. But with smart platforms like CargoPro (or Cargo
            Pro), both industries and transporters gain access to digital tools
            that streamline internal logistics and improve outcomes.
          </>
        }
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

export default Blog6;

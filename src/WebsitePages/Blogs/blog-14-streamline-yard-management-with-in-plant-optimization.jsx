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
import logisticsImage from "../../assets/Blogs/blog-14/blog-14-image.webp";

const Blog14 = () => {
  const sections = [
    {
      heading: "Reduces Turnaround Time",
      image: "/images/Blogs/blog-14/reduces-turnaround-time.webp",
      paragraph: (
        <>
          One of the biggest issues in logistics yards is high turnaround time.
          With in-plant optimization, trucks can be assigned gates, docks, and
          parking spaces in advance based on real-time data, reducing idle time
          and ensuring a continuous flow of operations.
        </>
      ),
    },
    {
      heading: "Improves Resource Allocation",
      image: "/images/Blogs/blog-14/improves-resource-allocation.webp",
      paragraph: (
        <>
          CargoPro’s system enables logistics teams to allocate dock doors,
          equipment, and labor more effectively by using data insights. This
          minimizes operational delays and ensures optimal use of available
          resources.
        </>
      ),
    },
    {
      heading: "Real-Time Visibility",
      image: "/images/Blogs/blog-14/real-time-visibility.webp",
      paragraph: (
        <>
          With real-time tracking of vehicles and assets, plant managers can
          monitor all ongoing yard activities through a central dashboard. This
          visibility allows for faster decision-making and proactive issue
          resolution, leading to better operational control.
        </>
      ),
    },
    {
      heading: "Enhances Safety and Compliance",
      image: "/images/Blogs/blog-14/enhance-safety-and-compliance.webp",
      paragraph: (
        <>
          By digitizing yard entries and exits, maintaining logs, and
          standardizing movement, CargoPro helps companies improve safety and
          meet compliance requirements. Automated check-in and check-out
          processes also reduce paperwork and manual errors.
        </>
      ),
    },
    {
      heading: "Supports Freight Sourcing with Reverse Auctions",
      image: "/images/Blogs/blog-14/support-freight-sourcing.webp",
      paragraph: (
        <>
          CargoPro also offers a reverse auction platform for freight sourcing,
          where transporters bid to win contracts. This leads to more
          competitive pricing, better carrier selection, and reduced
          transportation costs.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping up",
    description: (
      <>
        Efficient yard management is critical for logistics success. By
        optimizing in-plant operations with solutions like CargoPro, companies
        can reduce turnaround times, enhance safety, and gain real-time
        visibility. The result is a more organized, cost-efficient, and
        competitive logistics operation, both inside and outside the gate.
      </>
    ),
    footerText: "Found this article helpful? Share it with your yard ops team!",
  };

  const insightsData = [
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
    {
      image: "/images/Blogs/blogs-cover-images/blog-17-cover-image.webp",
      heading: "How to Leverage Digital Proof of Delivery for Faster Invoicing",
      date: "January 26, 2025",
      link: "/blogs/digital-proof-of-delivery",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CargoPro | How to Streamline Yard Management with In-Plant
          Optimization
        </title>
        <meta
          name="description"
          content="Optimize your logistics yard operations with CargoPro's in-plant optimization solutions. Reduce turnaround time, improve resource allocation, enhance safety, and gain real-time visibility for efficient yard management."
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
        heading="How to Streamline Yard Management with In-Plant Optimization"
        bgImage="/images/Blogs/blog-14/blog-14-bg.webp"
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            The efficiency of a logistics operation doesn’t only depend on the
            roads—it also depends on how well things function inside the plant.
            Poorly managed yards can lead to unnecessary congestion, delays in
            loading and unloading, and inefficient resource allocation. That’s
            where in-plant optimization becomes essential. With CargoPro,
            logistics companies can streamline their yard management to boost
            overall operational efficiency.
            <br />
            <br />
            Yard management involves controlling the movement of vehicles,
            trailers, and containers within a logistics facility. In-plant
            optimization adds intelligence to these movements using data,
            automation, and system integration.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>Optimize Yard Operations with CargoPro</>}
        text={
          <>
            Get real-time visibility, reduce turnaround delays, and streamline
            in-plant logistics — all with one smart TMS.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog14;

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
import logisticsImage from "../../assets/Blogs/blog-10/blog-10-image.webp";

const Blog10 = () => {
  const sections = [
    {
      heading: "Weight and Volume",
      image: "/images/Blogs/blog-10/weight-and-volume.webp",
      paragraph: (
        <>
          Steel is known for its density and durability—but those same qualities
          also create freight challenges:
          <ul className="list-disc list-inside ml-4">
            <li>Steel coils, rods, beams, and sheets are extremely heavy</li>
            <li>They often exceed standard transport weight limits</li>
            <li>
              Special heavy-duty trucks, rail wagons, or flatbed trailers are
              required
            </li>
          </ul>
          These lead to:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Higher fuel consumption</li>
            <li>Greater wear and tear on vehicles</li>
            <li>Need for reinforced infrastructure</li>
          </ul>
          The result? Increased freight costs across every leg of the journey.
        </>
      ),
    },
    {
      heading: "Specialized Handling and Equipment",
      image: "/images/Blogs/blog-10/specialized-handling-and-equipment.webp",
      paragraph: (
        <>
          Steel requires non-standard handling techniques, making logistics more
          labor- and equipment-intensive:
          <ul className="list-disc list-inside ml-4">
            <li>
              Cranes, forklifts, coil lifters, and hooks are necessary for
              loading/unloading
            </li>
            <li>Labor costs rise due to the need for skilled operators</li>
            <li>Loading and unloading takes more time than standard goods</li>
          </ul>
          CargoPro and similar logistics platforms often integrate scheduling to
          reduce delays, but the physical constraints remain. This specialized
          handling adds both time and money to steel transport.
        </>
      ),
    },
    {
      heading: "Raw Material Sourcing and Distribution",
      image: "/images/Blogs/blog-10/raw-material-sourcing.webp",
      paragraph: (
        <>
          Steel production starts with bulk raw materials like:
          <ul className="list-disc list-inside ml-4">
            <li>Iron ore</li>
            <li>Coal</li>
            <li>Limestone</li>
          </ul>
          These are often sourced from multiple remote regions and shipped to
          steel plants. After processing, the finished steel must then be
          shipped to:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Construction sites</li>
            <li>Factories</li>
            <li>Export ports</li>
          </ul>
          Each stage involves different modes of transport (road, rail, sea),
          each adding to cumulative freight cost.
        </>
      ),
    },
    {
      heading: "Distance and Location",
      image: "/images/Blogs/blog-10/distance-and-location.webp",
      paragraph: (
        <>
          The geographical gap between steel plants and end users significantly
          impacts freight pricing:
          <ul className="list-disc list-inside ml-4">
            <li>
              Steel mills are often located near mining or industrial zones
            </li>
            <li>
              Final consumers (e.g., builders, automakers) may be located
              hundreds or thousands of kilometers away
            </li>
          </ul>
          Longer haul distances = higher costs for fuel, vehicle depreciation,
          and driver wages. Remote delivery sites further amplify complexity.
          The lack of proximity often results in higher last-mile delivery
          charges as well.
        </>
      ),
    },
    {
      heading: "Industry-Specific Challenges",
      image: "/images/Blogs/blog-10/industry-specific-challenges.webp",
      paragraph: (
        <>
          Steel logistics come with their own set of unique issues:
          <ul className="list-disc list-inside ml-4">
            <li>Volatile demand cycles make freight planning unpredictable</li>
            <li>Frequent price shifts can affect contracted shipping rates</li>
            <li>Steel is prone to rust and corrosion, requiring:</li>
          </ul>
          <ul className="list-disc list-inside ml-8 mt-1">
            <li>Moisture-resistant packaging</li>
            <li>Weather-proof transport</li>
          </ul>
          Special compliance protocols and safety regulations must be followed.
          These sector-specific risks and requirements directly impact freight
          timelines, costs, and logistics complexity.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        In the intricate web of the steel industry, the challenge of elevated
        freight costs looms large. The formidable weight of steel, its handling
        complexities, and multi-stage supply chain logistics all contribute to
        increased transportation expenses.
        <br />
        However, innovation offers hope. The adoption of digital logistics
        platforms like CargoPro, investment in multi-modal transport, and use of
        AI for route optimization are paving the way for more efficient and
        cost-effective steel logistics.
        <br />
        As the industry continues to modernize, the focus on logistics
        intelligence, load optimization, and predictive visibility will be key
        to overcoming the cost barriers that have long defined steel freight.
      </>
    ),
    footerText: "Found this helpful? Share with your supply chain team!",
  };

  const insightsData = [
    {
      image: "/images/Blogs/blogs-cover-images/blog-11-cover-image.webp",
      heading: "National Logistics Policy 2022 – Explained",
      date: "January 26, 2025",
      link: "/blogs/national-logistics-policy-2022",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-12-cover-image.webp",
      heading:
        "Efficiency at Every Step – Automated Invoicing and Simplifying Logistics with CargoPro",
      date: "January 26, 2025",
      link: "/blogs/automated-invoicing-and-simplifying-logistics",
    },
    {
      image: "/images/Blogs/blogs-cover-images/blog-13-cover-image.webp",
      heading: "The Benefits of Automated Indent Management for Procurement",
      date: "January 26, 2025",
      link: "/blogs/benifits-of-automated-indent-management",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CargoPro | Why Freight Cost is Higher in the Steel Industry?
        </title>
        <meta
          name="description"
          content="Explore the key factors driving higher freight costs in the steel industry, including weight, specialized handling, sourcing challenges, and industry-specific risks. Learn how CargoPro’s smart logistics solutions help optimize steel freight for cost efficiency."
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
        heading="Why Freight Cost is Higher in the Steel Industry?"
        bgImage="/images/Blogs/blog-10/blog-10-bg.webp"
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text={
          <>
            The steel industry—a pillar of modern infrastructure and a major
            contributor to national GDP—plays a crucial role in shaping
            economies. It's also a significant player in the logistics market.
            However, freight cost remains one of the largest operational
            challenges within this sector. <br />
            Transporting steel isn’t just about moving goods from point A to B;
            it involves a complex mix of factors that drive up logistics
            expenses.
            <br />
            <br />
            In this blog, we explore the major reasons behind the elevated
            freight costs in the steel industry, offering insight into what
            makes steel transportation more demanding compared to other sectors.
          </>
        }
      />
      <ContentSection sections={sections} wrappingUp={wrappingUp} />
      <RelatedBlogs insights={insightsData} />
      <CargoProBookDemo
        heading={<>Reimagine Steel Freight with Smart Logistics</>}
        text={
          <>
            Cut unnecessary transport costs and optimize heavy-load logistics
            with CargoPro’s AI-driven insights.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Blog10;

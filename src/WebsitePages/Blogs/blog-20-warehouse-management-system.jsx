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
import CargoProLogo from "../../assets/CargoProLogo.webp";
import Blog20Bg from "../../assets/Blogs/blog-20/blog-20-bg.webp";
import Blog20Image from "../../assets/Blogs/blog-20/blog-20-image.webp";
import Step1Image from "../../assets/Blogs/blog-20/real-time-data-sharing.webp";
import Step2Image from "../../assets/Blogs/blog-20/coordinate-planning.webp";
import Step3Image from "../../assets/Blogs/blog-20/streamline-order-fullfillment.webp";
import Step4Image from "../../assets/Blogs/blog-20/enhance-customer-satisfaction.webp";

const Blog20 = () => {
  const sections = [
    {
      heading: "Enable Real-Time Data Sharing",
      image: Step1Image,
      paragraph: (
        <>
          The first step in integration is establishing live data communication
          between TMS and WMS. This includes:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Inventory availability updates</li>
            <li>Shipping schedules and delivery status</li>
            <li>Order fulfillment progress</li>
          </ul>
          With real-time visibility, logistics teams can act immediately to
          resolve bottlenecks or reroute deliveries.
        </>
      ),
    },
    {
      heading: "Coordinate Planning Across Systems",
      image: Step2Image,
      paragraph: (
        <>
          Integrated systems facilitate unified planning. When an order is
          placed:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>The WMS ensures inventory is picked and ready</li>
            <li>The TMS schedules the most efficient transport</li>
          </ul>
          This prevents redundancy, reduces delays, and ensures resources are
          used efficiently across both operations.
        </>
      ),
    },
    {
      heading: "Streamline Order Fulfillment",
      image: Step3Image,
      paragraph: (
        <>
          With TMS and WMS integration, order fulfillment becomes automated and
          efficient. From order receipt to final dispatch, each stage triggers
          the next:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Picking lists are auto-generated</li>
            <li>Packaging is aligned with transport schedules</li>
            <li>
              Shipments are updated in both systems for real-time tracking
            </li>
          </ul>
          The result is faster cycle times and fewer errors.
        </>
      ),
    },
    {
      heading: "Enhance Customer Satisfaction",
      image: Step4Image,
      paragraph: (
        <>
          Customers today expect timely deliveries and visibility. Integrated
          systems provide:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Accurate delivery estimates</li>
            <li>Real-time tracking</li>
            <li>Proactive alerts for any delays</li>
          </ul>
          Better coordination improves communication with customers,
          strengthening trust and service quality.
        </>
      ),
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description: (
      <>
        The integration of TMS and WMS is more than a technical upgrade—it is a
        strategic transformation that unifies warehousing and transportation
        into a single, agile supply chain system. By creating shared visibility,
        accelerating fulfillment, and reducing errors, businesses can scale
        efficiently and deliver exceptional service.
        <br />
        <br />
        CargoPro’s integrated logistics platform empowers businesses to unlock
        the full potential of their operations through real-time connectivity,
        intelligent automation, and seamless coordination.
      </>
    ),
    footerText: "Found this article helpful? Share it with your network!",
  };

  const insightsData = [
    {
      image: Blog20Image,
      heading:
        "Elevating Warehouse Efficiency – The Path to Digital Transformation",
      date: "February 2, 2025",
      link: "/blogs/elevating-warehouse-efficiency",
    },
    {
      image: Blog20Image,
      heading:
        "Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry",
      date: "January 10, 2025",
      link: "/blogs/revolutionizing-logistics",
    },
    {
      image: Blog20Image,
      heading:
        "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
      date: "January 18, 2025",
      link: "/insights/invoicing-automation",
    },
  ];

  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          CargoPro | Seamless Integration of Transportation and Warehouse
          Management Systems
        </title>
        <meta
          name="description"
          content="Discover how CargoPro enables seamless integration of Transportation Management Systems (TMS) and Warehouse Management Systems (WMS) for smarter, faster logistics operations with real-time data sharing, streamlined order fulfillment, and enhanced customer satisfaction."
        />
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
      </Helmet>

      <BlogsHero
        heading="Seamless Integration of Transportation and Warehouse Management Systems"
        text={
          <>
            Modern logistics demands more than just individual system
            efficiency—it calls for total integration. One of the most impactful
            transformations in logistics is the unification of Transportation
            Management Systems (TMS) and Warehouse Management Systems (WMS).
            <br />
            By integrating these systems, businesses gain synchronized control
            over goods movement from storage to shipment, driving faster,
            smarter operations.
          </>
        }
        bgImage={Blog20Bg}
      />
      <BlogsSection1
        imageSrc={Blog20Image}
        text={
          <>
            <h2 className="font-sora font-semibold text-[40px] leading-[100%] tracking-[0%] text-[#22377C]">
              Understanding TMS-WMS Integration
            </h2>
            <br />
            <strong>TMS:</strong> Manages the planning, execution, and
            optimization of transportation operations.
            <br />
            <strong>WMS:</strong> Controls the receipt, storage, and movement of
            inventory within a warehouse.
            <br />
            <br />
            Independently, each system is powerful. But when integrated, they
            create a seamless flow of data and decision-making across the entire
            logistics network.
          </>
        }
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

export default Blog20;

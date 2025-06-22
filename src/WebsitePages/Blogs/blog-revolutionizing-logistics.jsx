//External Libraries
import React from "react";

//Components
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";
import BlogsSection1 from "../../components/Blogs/ReusableComponents/blogs-section-1";
import ContentSection from "../../components/Blogs/ReusableComponents/blogs-content-section";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import RelatedBlogs from "../../components/Blogs/Blog/related-blogs";

//Images
import RevolutionzingLogisticsBg from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-bg.webp";
import logisticsImage from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image.webp";
import RevolutionizingLogisticsImage1 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-1.webp";
import RevolutionizingLogisticsImage2 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-2.webp";
import RevolutionizingLogisticsImage3 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-3.webp";
import RevolutionizingLogisticsImage4 from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-image-4.webp";

const Blog1 = () => {
  const sections = [
    {
      heading: "Increased Productivity",
      image: RevolutionizingLogisticsImage1,
      paragraph:
        "There are a lot of options available with CargoPro which helps businesses in improved efficiency. Document scanning and digitization software can automate the processing of paperwork, such as invoices, orders, and shipping manifests which earlier used to take a lot of processing time. With the help of CargoPro, processes like routing and navigation are also helpful in improving efficiency through tracking faster and more reliable routes for timely deliveries. Payment options make it a lot easier for both parties to avoid the hassle of going through lengthy processes and encourage trust among the parties involved.",
    },
    {
      heading: "Improved Customer Satisfaction",
      image: RevolutionizingLogisticsImage2,
      paragraph:
        "Customers are the backbone of businesses which is why customer satisfaction becomes the topmost priority for any business, especially in the logistics industry where the efficiency of delivery processes and service provided helps in manipulating customer satisfaction. With CargoPro, the delivery time and cost can be reduced with route optimization resulting in improved customer satisfaction.",
    },
    {
      heading: "Cost Saving",
      image: RevolutionizingLogisticsImage3,
      paragraph:
        "Adhering to traditional methods for documentation, planning, and delivering involves a lot of cost which can be reduced with the help of automation. CargoPro provides a platform for maintaining and controlling logistics with minimum paperwork and efficient data handling, ensuring accuracy and security for the data involved. Businesses can easily rely on CargoPro for efficient data handling, scheduling, documentation and other related tasks, reducing the cost to a minimum.",
    },
    {
      heading: "Stay Ahead of the Competition",
      image: RevolutionizingLogisticsImage4,
      paragraph:
        "Logistics industry over time has been undergoing changes and moving towards automation and digitization giving rise to competition in the Industry. CargoPro understands that in order to stay ahead in the competition businesses need to rely on the latest trends and technology which helps in enhancing the operations of the businesses. CargoPro ensures that its customers get the latest features and technology to stay ahead of the competition and for that very purpose we keep on enhancing the features, adhering to the changing needs of the industry.",
    },
  ];

  const wrappingUp = {
    title: "Wrapping Up",
    description:
      "Automation is transforming the freight transportation industry. It is improving efficiency, reducing costs, and making the transportation of goods more reliable. As automation continues to develop, it is likely to have an even greater impact on the industry in the years to come.",
    footerText: "Found this article helpful? Spread the word!",
  };

  const insightsData = [
    {
      image: logisticsImage,
      heading:
        "Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry",
      date: "January 10, 2025",
      link: "/blogs/revolutionizing-logistics",
    },
    {
      image: logisticsImage,
      heading:
        "Eco-Friendly Logistics: Reducing Carbon Footprint through Digital Innovation",
      date: "January 27, 2025",
      link: "/insights/eco-friendly-logistics",
    },
    {
      image: logisticsImage,
      heading:
        "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
      date: "January 18, 2025",
      link: "/insights/invoicing-automation",
    },
  ];

  return (
    <>
      <Navbar />
      <BlogsHero
        heading="Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry"
        text="In the logistics industry, procurement and indent management play a crucial role in ensuring smooth operations and efficient supply chain management. Manual processes can be time-consuming, error-prone, and lack the necessary visibility. However, with the power of automated solutions integrated in our CargoPro app, you can streamline your procurement and indent management processes for maximum efficiency and productivity."
        bgImage={RevolutionzingLogisticsBg}
      />
      <BlogsSection1
        imageSrc={logisticsImage}
        text="Automation is very useful in industries like logistics where manual processes can lead to a pile of paperwork and long processing hours, therefore CargoPro with a motive to serve businesses in improving efficiency, accuracy, and customer service becomes a handy tool to manage logistics operations."
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

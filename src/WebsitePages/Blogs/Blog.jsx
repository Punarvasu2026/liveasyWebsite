import React from "react";

//components
import NavBar from "../../components/navbar";
import BlogReadMore from "../../components/Blogs/Blog/BlogsReadMore";
import RevolutionizingAutomation from "../../components/Blogs/Blog/revolutionizing-automation";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import BlogsHeroSection from "../../components/Blogs/Blog/blogs-hero-section";
import Footer from "../../components/footer";

//images
import BackgroundImage from "../../assets/Blogs/Blog1-RevolutionizingLogistics/revolutionizing-logistics-bg.png";

const Blog = () => {
  return (
    <>
      <NavBar />
      <BlogsHeroSection
        heading={
          <>
            Our Blogs: Insights
            <br /> That Move Logistics
            <br /> Forward
          </>
        }
        content={
          <>
            Explore expert opinions, tech updates, and supply
            <br /> chain strategies powering the future of logistics.
          </>
        }
        backgroundImage={BackgroundImage}
      />
      <RevolutionizingAutomation />
      <BlogReadMore />
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

export default Blog;

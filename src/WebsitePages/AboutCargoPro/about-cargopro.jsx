//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FounderSection from "../../components/AboutUs/cargopro-founder-section";
import MissionSection from "../../components/AboutUs/cargopro-mission-section";
import WhoAreWeSection from "../../components/AboutUs/who-we-are-section";
import WhyWorkWithUs from "../../components/AboutUs/why-work-with-us";
import BlogsHeroSection from "../../components/Blogs/Blog/blogs-hero-section";

//Images
import BackgroundImage from "../../assets/AboutCargoPro/about-us-bg.webp";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>CargoPro | About Us</title>
        <meta
          name="description"
          content="CargoPro is a leading AI-powered Transport Management System (TMS) platform offering innovative freight sourcing, indent management, real-time tracking, and automated invoicing solutions to optimize supply chain operations and reduce logistics costs."
        />
        <link rel="icon" type="image/webp" href="/CargoProLogo.webp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/CargoProLogo.webp"
        />
      </Helmet>
      <Navbar />
      <BlogsHeroSection
        heading={
          <>
            AI Powered Best <br />
            TMS Platform
          </>
        }
        content={
          <>
            CargoPro is a leading provider of Transport Management Systems
            (TMS), delivering innovative freight and logistics management
            platforms designed to automate, track, and optimize end-to-end
            supply chain operations for businesses of all sizes.
          </>
        }
        backgroundImage={BackgroundImage}
      />
      <WhoAreWeSection />
      <MissionSection />
      <WhyWorkWithUs />
      <FounderSection />
      <Footer />
    </>
  );
};

export default AboutUs;

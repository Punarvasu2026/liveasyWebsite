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
import CargoProLogo from "../../assets/CargoProLogo.png";
import BackgroundImage from "../../assets/AboutCargoPro/about-us-bg.webp";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | CargoPro</title>
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
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

//External Libraries
import React from "react";

//Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FounderSection from "../../components/AboutUs/cargopro-founder-section";
import MissionSection from "../../components/AboutUs/cargopro-mission-section";
import WhoAreWeSection from "../../components/AboutUs/who-we-are-section";
import WhyWorkWithUs from "../../components/AboutUs/why-work-with-us";
import BlogsHeroSection from "../../components/Blogs/Blog/blogs-hero-section";

//Images

const AboutUs = () => {
  return (
    <>
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

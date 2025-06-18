//External Libraries
import React from "react";

//Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FounderSection from "../../components/AboutUs/cargopro-founder-section";
import MissionSection from "../../components/AboutUs/cargopro-mission-section";
import WhoAreWeSection from "../../components/AboutUs/who-we-are-section";
import WhyWorkWithUs from "../../components/AboutUs/why-work-with-us";

//Images

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <WhoAreWeSection />
      <MissionSection />
      <WhyWorkWithUs />
      <FounderSection />
      <Footer />
    </>
  );
};

export default AboutUs;

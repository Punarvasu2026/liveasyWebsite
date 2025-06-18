//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import TrustedBy from "../components/trustedby-cargopro";
import AboutUs from "../components/about-cargopro";
import WhyChooseCargoPro from "../components/why-choose-cargopro";
import SolutionsSection from "../components/solutions";
import CargoProSteps from "../components/cargopro-onboarding-steps";
import Reviews from "../components/reviews";
import CargoProBookDemo from "../components/cargopro-book-demo";
import Footer from "../components/footer";

//Images
import HeroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CargoPro | Smart TMS Platform for Freight & Logistics</title>
      </Helmet>
      <NavBar />
      <HeroSection
        heading={
          <>
            Putting Your Logistics
            <br />
            on Autopilot
          </>
        }
        content={
          <>
            AI-Based SaaS Platform Driving Operational
            <br />
            Efficiency, Automation, and Transparency across
            <br />
            Logistics Operations
          </>
        }
        image={HeroImage}
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <AboutUs />
      <WhyChooseCargoPro />
      <SolutionsSection />
      <CargoProSteps />
      <Reviews />
      <CargoProBookDemo
        heading={
          <>
            Ready to Simplify Your Logistics
            <br /> Operations?
          </>
        }
      />
      <Footer />

      {/* Add other components as needed */}
    </>
  );
};

export default Home;

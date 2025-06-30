//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

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

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto" }); // jump instantly
      }
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>CargoPro | Smart TMS Platform for Freight & Logistics</title>
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
        image="/images/CargoProIndexPage/cargopro-putting-your-logistics.webp"
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <AboutUs />
      <div id="whyChooseCargoPro">
        <WhyChooseCargoPro />
      </div>
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

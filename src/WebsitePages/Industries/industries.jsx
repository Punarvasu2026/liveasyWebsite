//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import Navbar from "../../components/navbar";
import IndustriesWeServe from "../../components/Industries/industries-we-serve";
import IndustriesChallenges from "../../components/Industries/industries-challenges";
import Footer from "../../components/footer";
import BlogsHeroSection from "../../components/Blogs/Blog/blogs-hero-section";

//Images
import CargoProLogo from "../../assets/CargoProLogo.webp";
import BackgroundImage from "../../assets/Industries/industries-bg.webp";

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>CargoPro | Industries</title>
        <meta
          name="description"
          content="Modernize and optimize your logistics operations with CargoPro. Serving Metal, FMCG, Chemicals, EPC, Engineering, Agriculture, and more. Solve challenges like lack of transparency, inefficient vehicle movement, manual tracking, and complicated invoicing."
        />
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
      </Helmet>
      <Navbar />
      <BlogsHeroSection
        heading={<>Industries</>}
        content={
          <>
            We aim logistics and supply chain professional who want to modernize
            and <br />
            optimize their operations
          </>
        }
        backgroundImage={BackgroundImage}
      />
      <IndustriesWeServe />
      <IndustriesChallenges />
      <Footer />
    </>
  );
};

export default Industries;

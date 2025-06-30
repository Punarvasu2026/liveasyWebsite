//External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import Navbar from "../../components/navbar";
import IndustriesWeServe from "../../components/Industries/industries-we-serve";
import IndustriesChallenges from "../../components/Industries/industries-challenges";
import Footer from "../../components/footer";
import BlogsHeroSection from "../../components/Blogs/Blog/blogs-hero-section";

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>CargoPro | Industries</title>
        <meta
          name="description"
          content="Modernize and optimize your logistics operations with CargoPro. Serving Metal, FMCG, Chemicals, EPC, Engineering, Agriculture, and more. Solve challenges like lack of transparency, inefficient vehicle movement, manual tracking, and complicated invoicing."
        />
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
        backgroundImage="/images/Industries/industries-bg.webp"
      />
      <IndustriesWeServe />
      <IndustriesChallenges />
      <Footer />
    </>
  );
};

export default Industries;

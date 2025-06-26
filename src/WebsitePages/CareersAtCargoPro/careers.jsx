import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import Navbar from "../../components/navbar";
import CareerPerks from "../../components/Careers/career-perks";
import WhyWorkWithUs from "../../components/Careers/why-work-with-us";
import ContactUs from "../../components/Careers/contact-us";
import Footer from "../../components/footer";
import TrustedBy from "../../components/trustedby-cargopro";
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";

//Images
import HeroBgImage from "../../assets/Careers/careers-bg.webp";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>CargoPro | Industries</title>
        <meta
          name="description"
          content="Join CargoPro to transform logistics with cutting-edge technology. Enjoy innovation-driven growth, competitive salary, personal development, and the chance to revolutionize supply chain solutions."
        />
        <link rel="icon" type="image/webp" href="/CargoProLogo.webp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/CargoProLogo.webp"
        />
      </Helmet>
      <Navbar />
      <BlogsHero
        heading="Careers: Join Us at CargoPro"
        text="At CargoPro, we are passionate about transforming the logistics industry with cutting-edge technology. Join us in empowering SMEs with the tools they need to grow and thrive. Together, we can revolutionize the way logistics works."
        bgImage={HeroBgImage}
      />
      <CareerPerks />
      <WhyWorkWithUs />
      <TrustedBy />
      <section id="contact-us">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
};

export default Career;

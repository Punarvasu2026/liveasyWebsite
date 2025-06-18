import React from "react";

//Components
import Navbar from "../../components/navbar";
import CareerPerks from "../../components/Careers/career-perks";
import WhyWorkWithUs from "../../components/Careers/why-work-with-us";
import ContactUs from "../../components/Careers/contact-us";
import Footer from "../../components/footer";
import TrustedBy from "../../components/trustedby-cargopro";
import BlogsHero from "../../components/Blogs/ReusableComponents/blogs-hero";

//Images
import HeroBgImage from "../../assets/Careers/careers-hero-bg.webp";

const Career = () => {
  return (
    <>
      <Navbar />
      <BlogsHero
        heading="Careers: Join Us at CargoPro"
        text="At CargoPro, we are passionate about transforming the logistics industry with cutting-edge technology. Join us in empowering SMEs with the tools they need to grow and thrive. Together, we can revolutionize the way logistics works."
        bgImage={HeroBgImage}
      />
      <CareerPerks />
      <WhyWorkWithUs />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Career;

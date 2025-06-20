// External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

// Components
import Navbar from "../../components/navbar";
import HeroSection from "../../components/hero-section";
import TrustedBy from "../../components/trustedby-cargopro";
import TrackingSection1 from "../../components/Solutions/Tracking/tracking-section-1";
import TrackingSection2 from "../../components/Solutions/Tracking/tracking-section-2";
import RealTimeTrackingBenifits from "../../components/Solutions/Tracking/real-time-tracking-benifits";
import SolutionsSection2 from "../../components/Solutions/ReusableComponents/Section2";
import SolutionsSection3 from "../../components/Solutions/ReusableComponents/Section3";
import SolutionsSection1 from "../../components/Solutions/ReusableComponents/Section1";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import Footer from "../../components/footer";

// Images
import TrackingHero from "../../assets/Solutions/Tracking/tracking-hero-image.webp";
import PodSectionImage from "../../assets/Solutions/pod/pod-image.webp";
import InstantUploads from "../../assets/Solutions/pod/pod-instant-uploads.webp";
import SeamlessInvoiceIntegrationImage from "../../assets/Solutions/pod/pod-seamless-invoice-integration.webp";
import ShipperAndVendorVisibilityImage from "../../assets/Solutions/pod/pod-shipper-and-vendor-visibility.webp";

const Tracking = () => {
  return (
    <>
      <Helmet>
        <title>Live Tracking | CargoPro</title>
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Track Every Shipment
            <br /> Live — With Full Visibility
            <br /> and Confidence
          </>
        }
        content={
          <>
            CargoPro Offers SIM-based and App tracking to give you <br />
            real-time vehicle updates, along with detailed insights
            <br /> about vehicle compliance and reliability.
          </>
        }
        image={TrackingHero} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <TrackingSection1 />
      <RealTimeTrackingBenifits />
      <TrackingSection2 />
      <CargoProBookDemo
        heading={<>Your Logistics, Now Smarter.</>}
        text={
          <>
            It’s time to stop guessing where your shipment is. Start tracking it
            in <br />
            real time — with CargoPro’s smart tracking suite.
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Tracking;
// This component can be used in your main application file or routed as needed.

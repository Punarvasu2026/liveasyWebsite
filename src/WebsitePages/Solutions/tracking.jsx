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
import CargoProBookDemo from "../../components/cargopro-book-demo";
import Footer from "../../components/footer";

// Images
import CargoProLogo from "../../assets/CargoProLogo.png";
import TrackingHero from "../../assets/Solutions/Tracking/live-tracking.webp";

const Tracking = () => {
  return (
    <>
      <Helmet>
        <title>Live Tracking | CargoPro</title>
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
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
            CargoPro Offers SIM-based and App tracking to give <br />
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

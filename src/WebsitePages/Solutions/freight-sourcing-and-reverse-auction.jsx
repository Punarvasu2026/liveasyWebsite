// External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

// Components
import Navbar from "../../components/navbar";
import HeroSection from "../../components/hero-section";
import TrustedBy from "../../components/trustedby-cargopro";
import SmartFreightSourcing from "../../components/Solutions/ReusableComponents/Section2";
import ReverseAuctionSection from "../../components/Solutions/ReusableComponents/Section3";
import FreightSourcingSection1 from "../../components/Solutions/ReusableComponents/Section1";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import Footer from "../../components/footer";
import IdealFor from "../../components/Solutions/FreightSourcingAndReverseAuction/ideal-for";
import BusinessImpactSection from "../../components/Solutions/FreightSourcingAndReverseAuction/bussiness-impact";

// Images
import CargoProLogo from "../../assets/CargoProLogo.webp";
import AutomatedFreightSourcingImage from "../../assets/Solutions/FreightSourcing/automated-freight-sourcing.webp";
import desktopImage from "../../assets/Solutions/FreightSourcing/smart-price-sourcing.webp";
import FreightPricing from "../../assets/Solutions/FreightSourcing/transperency-in-freight-sourcing.webp";
import FreightSourcingHeroImage from "../../assets/Solutions/FreightSourcing/freight-sourcing-and-reverse-auction-hero.webp";
import reverseAuctionImage from "../../assets/Solutions/FreightSourcing/reverse-auction-for-competitive-pricing.webp";
import TruckImage from "../../assets/Solutions/FreightSourcing/digitize-your-freight-procurement.webp";

const FreightSourcingAndReverseAuction = () => {
  const heading = (
    <>
      Digitize Your Freight
      <br /> Procurement. Discover Better <br />
      Rates. Faster. <br />
      Smarter.
    </>
  );

  const text =
    "At CargoPro, we’ve reimagined freight procurement to help you streamline sourcing, reduce logistics costs, and build strong transporter networks—all with maximum transparency and speed.";

  const smartFreightSoucingpoints = [
    "Freight requirements are automatically posted on CargoPro’s platform, which is then floated to all transporters via the platform, email, WhatsApp, and dashboards.",
    "Transporters can respond with their rates directly on the platform, streamlining the process and ensuring competitive pricing.",
    "No more manually calling each transporter and negotiating rates — everything is automated for a seamless and efficient sourcing experience.",
    "Simplify and speed up the entire process with smart freight sourcing that reduces operational efforts and minimizes human effort.",
  ];

  const reverseAuctionPoints = [
    "CargoPro’s reverse auction feature allows transporters to bid on each shipment, ensuring the best price.",
    "The reverse auction process is available via WhatsApp, the app, or the dashboard, ensuring easy participation for transporters.",
    "Transporters continuously try to outbid each other, pushing down freight prices, with the platform ensuring the lowest bid wins — no overcharging.",
    "Select the most cost-effective and reliable transporter without compromising on service quality. The reverse auction guarantees that you get the best deal every time.",
  ];

  const freightPricingPoints = [
    "View all transporter bids in one place — including historical rates for similar shipments.",
    "Instantly compare quotes to ensure you’re never overpaying for freight.",
    "See who in your team accepted a bid, along with the lowest offer at the time and justification if a higher bid was chosen.",
    "CargoPro brings complete transparency and accountability to freight pricing, empowering informed and auditable decisions.",
  ];

  const automatedFreightSourcingPoints = [
    "Eliminate manual coordination with automated bid requests sent via WhatsApp, email, app, and dashboard.",
    "Freight requirements are floated instantly to relevant transporters, reducing delays.",
    "CargoPro evaluates bids based on predefined rules — like cost, past performance, and delivery time.",
    "Smart decision engine auto-selects the best transporter, ensuring speed, savings, and reliability.",
  ];

  return (
    <>
      <Helmet>
        <title>Freight Sourcing and Reverse Auction | CargoPro</title>
        <link rel="icon" type="image/x-icon" href={CargoProLogo} />
        <link rel="apple-touch-icon" sizes="180x180" href={CargoProLogo} />
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Unlock Cost Savings
            <br />
            with Smart Freight
            <br />
            Sourcing
          </>
        }
        content={
          <>
            Streamline your freight sourcing process through
            <br /> competitive bidding and transparent pricing with <br />
            CargoPro's Reverse Auction.
          </>
        }
        image={FreightSourcingHeroImage} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <FreightSourcingSection1
        imageSrc={TruckImage}
        heading={heading}
        text={text}
      />
      <SmartFreightSourcing
        heading="Smart Freight Sourcing"
        points={smartFreightSoucingpoints}
        imageSrc={desktopImage}
      />

      <ReverseAuctionSection
        heading={
          <>
            Reverse Auction for <br /> Competitive Pricing
          </>
        }
        points={reverseAuctionPoints}
        mainImage={reverseAuctionImage}
      />
      <SmartFreightSourcing
        heading={
          <>
            Transparency In Freight <br /> Pricing
          </>
        }
        points={freightPricingPoints}
        imageSrc={FreightPricing}
      />
      <ReverseAuctionSection
        heading={<>Automated Freight Sourcing</>}
        points={automatedFreightSourcingPoints}
        mainImage={AutomatedFreightSourcingImage}
      />
      <BusinessImpactSection />
      <IdealFor />

      <CargoProBookDemo
        heading={
          <>
            Ready to Level-Up Your Freight
            <br /> Procurement?
          </>
        }
        text={
          <>
            Say goodbye to manual follow-ups and scattered communication. <br />
            Let CargoPro make your sourcing process frictionless, data-driven,
            <br /> and future-ready.
          </>
        }
      />

      <Footer />
    </>
  );
};

export default FreightSourcingAndReverseAuction;
// This component can be used in your main application file or routed as needed.

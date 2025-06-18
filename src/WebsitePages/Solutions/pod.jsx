// External Libraries
import React from "react";
import { Helmet } from "react-helmet-async";

// Components
import Navbar from "../../components/navbar";
import HeroSection from "../../components/hero-section";
import TrustedBy from "../../components/trustedby-cargopro";
import SolutionsSection2 from "../../components/Solutions/ReusableComponents/Section2";
import SolutionsSection3 from "../../components/Solutions/ReusableComponents/Section3";
import SolutionsSection1 from "../../components/Solutions/ReusableComponents/Section1";
import CargoProBookDemo from "../../components/cargopro-book-demo";
import Footer from "../../components/footer";

// Images
import PodHero from "../../assets/Solutions/pod/pod-hero-image.webp";
import PodSectionImage from "../../assets/Solutions/pod/pod-image.webp";
import InstantUploads from "../../assets/Solutions/pod/pod-instant-uploads.webp";
import SeamlessInvoiceIntegrationImage from "../../assets/Solutions/pod/pod-seamless-invoice-integration.webp";
import ShipperAndVendorVisibilityImage from "../../assets/Solutions/pod/pod-shipper-and-vendor-visibility.webp";

const Pod = () => {
  const heading = <>Digital Proof, Zero Delays.</>;

  const text =
    "With CargoPro, transporters can instantly upload PODs through the app or dashboard. These are automatically linked to the respective shipment and visible to your finance and logistics teams — ensuring faster invoice clearance and full accountability.";

  const instantPodUploads = [
    "With CargoPro, transporters can instantly upload PODs through the app or dashboard. These are automatically linked to the respective shipment and visible to your finance and logistics teams — ensuring faster invoice clearance and full accountability.",
    "PODs can include images, e-signatures, timestamps, and remarks.",
    "Uploaded PODs are linked directly to the specific shipment.",
    "No need for manual courier or physical copies.",
  ];

  const SeamlessInvoiceIntegration = [
    "Invoices can only be generated after POD upload — ensuring delivery confirmation.",
    "Auto-verification reduces disputes and keeps financial workflows smooth.",
    "PODs are tagged with shipment ID and linked to payment approval flow.",
    "Keeps operations and accounts teams aligned.",
  ];

  const ShipperAndVendorVisibility = [
    "Shippers can instantly view submitted PODs on the dashboard.",
    "Transporters can track status of POD acceptance or rejection.",
    "Clear visibility for both sides ensures trust and eliminates back-and-forth.",
    "Improves collaboration between logistics and vendor teams.",
  ];

  return (
    <>
      <Helmet>
        <title>Proof of Dilivery| CargoPro</title>
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Ensure Delivery
            <br /> Accountability with
            <br /> Digital PODs
          </>
        }
        content={
          <>
            CargoPro streamlines proof of delivery collection with
            <br /> real-time uploads, centralized access, and automation —
            keeping your invoicing and compliance on track.
          </>
        }
        image={PodHero} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <SolutionsSection1
        imageSrc={PodSectionImage}
        heading={heading}
        text={text}
      />
      <SolutionsSection2
        heading={<>Instant POD Uploads</>}
        points={instantPodUploads}
        imageSrc={InstantUploads}
      />

      <SolutionsSection3
        heading={
          <>
            Seamless Invoice
            <br /> Integration
          </>
        }
        points={SeamlessInvoiceIntegration}
        mainImage={SeamlessInvoiceIntegrationImage}
      />
      <SolutionsSection2
        heading={<>Shipper & Vendor Visibility</>}
        points={ShipperAndVendorVisibility}
        imageSrc={ShipperAndVendorVisibilityImage}
      />
      <CargoProBookDemo
        heading={<>Ready to Go Paperless?</>}
        text={
          <>
            Eliminate paperwork. Eliminate doubt.
            <br />
            Adopt CargoPro’s Digital POD and deliver with peace of mind.
          </>
        }
      />

      <Footer />
    </>
  );
};

export default Pod;
// This component can be used in your main application file or routed as needed.

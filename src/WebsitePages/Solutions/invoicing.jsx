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
import WhyInvoicing from "../../components/Solutions/Invoicing/why-invoicing";

// Images
import InvoicingHero from "../../assets/Solutions/Invoicing/Invoicing.webp";
import InvoicingSectionImage from "../../assets/Solutions/Invoicing/automated-freight-billing.webp";
import InvoicingDigitalRecords from "../../assets/Solutions/Invoicing/digital-records-for-audit.webp";
import OneClickInvoice from "../../assets/Solutions/Invoicing/one-click-invoice-generation.webp";
import SmartReviewAndDeduction from "../../assets/Solutions/Invoicing/smart-review-and-deduction.webp";
import VisibilityFromAllEnds from "../../assets/Solutions/Invoicing/visibility-from-all-ends.webp";

const Invoicing = () => {
  const heading = (
    <>
      Automated Freight Billing
      <br /> from Delivery to Approval
    </>
  );

  const text =
    "CargoPro automates the entire freight invoicing process — right from POD upload to final payment approval. Transporters can generate invoices based on completed bookings, add applicable charges, and share them digitally with shippers. Your accounts team gets full visibility, enabling faster verification, deduction handling, and seamless audit readiness.";

  const oneClickInvoicePoints = [
    "Transporters can create invoices directly from completed shipments after uploading the POD",
    "System auto-calculates billed amounts based on quoted rates, quantity, and distance.",
    "Allows bundling multiple bookings into one invoice for smoother billing cycles.",
    "Add GST, extra charges, and generate invoice numbers instantly from the app or dashboard.",
  ];

  const SmartReviewAndDeductionPoints = [
    "Every invoice is visible to the shipper’s accounts team for review and action.",
    "Accept, reject, or raise deductions — all from a central dashboard with reasons recorded.",
    "Transporters receive real-time updates about approval status and adjustments.",
    "All deduction remarks are digitally stored and traceable.",
  ];

  const DigitalRecordsPoints = [
    "Every invoice is archived with metadata — booking ID, POD, approver name, timestamps.",
    "Physical invoice scans can also be uploaded for audit proof.",
    "Historical invoices for all transporters are stored securely and are searchable by filters.",
    "Historical invoices for all transporters are stored securely and are searchable by filters.",
  ];

  const VisibilityFromAllEndsPoints = [
    "Both parties see the same invoice, with linked POD, dispatch, and route records.",
    "Invoices move through a transparent approval flow with status tracking.",
    "No manual emails or WhatsApp follow-ups — everything is system-driven.",
    "Speeds up processing while ensuring zero confusion or double billing.",
  ];

  return (
    <>
      <Helmet>
        <title>CargoPro | Invoicing</title>
        <meta
          name="description"
          content="Digitize freight invoicing with CargoPro’s automated billing from POD upload to payment approval. Achieve 99% accuracy, faster processing, and full transparency with audit-ready digital records."
        />
        <link rel="icon" type="image/webp" href="/CargoProLogo.webp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/CargoProLogo.webp"
        />
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Digitize and Streamline <br />
            Freight Invoicing with <br />
            CargoPro
          </>
        }
        content={
          <>
            From POD to payment — manage freight billing with
            <br /> automation, transparency, and full audit trails."Say <br />
            goodbye to manual errors and hello to streamlined, <br />
            transparent payment cycles.
          </>
        }
        image={InvoicingHero} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <SolutionsSection1
        imageSrc={InvoicingSectionImage}
        heading={heading}
        text={text}
      />
      <SolutionsSection2
        heading={
          <>
            One-Click Invoice <br />
            Generation
          </>
        }
        points={oneClickInvoicePoints}
        imageSrc={OneClickInvoice}
      />

      <SolutionsSection3
        heading={
          <>
            Smart Review and <br /> Deductions
          </>
        }
        points={SmartReviewAndDeductionPoints}
        mainImage={SmartReviewAndDeduction}
      />
      <SolutionsSection2
        heading={<>Visibility From all Ends</>}
        points={VisibilityFromAllEndsPoints}
        imageSrc={VisibilityFromAllEnds}
      />
      <SolutionsSection3
        heading={
          <>
            Digital Records for
            <br /> Audit & Compliance
          </>
        }
        points={DigitalRecordsPoints}
        mainImage={InvoicingDigitalRecords}
      />
      <CargoProBookDemo
        heading={
          <>
            Ready to Upgrade Your Freight <br />
            Billing Game?
          </>
        }
        text={
          <>
            Whether you're a shipper, 3PL, or transporter—CargoPro’s invoicing
            <br /> software helps you gain control, speed, and confidence in
            your
            <br /> financial workflows.
          </>
        }
      />
      <WhyInvoicing />

      <Footer />
    </>
  );
};

export default Invoicing;
// This component can be used in your main application file or routed as needed.

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
import BussinessBenifits from "../../components/Solutions/IndentAutomation/bussiness-benifits";

// Images
import IndentAutomationHero from "../../assets/Solutions/IndentAutomation/indent-automation-hero.webp";
import IndentAutomation from "../../assets/Solutions/IndentAutomation/indent-automation.webp";
import CentralizedContractManagement from "../../assets/Solutions/IndentAutomation/centralized-contract-management.webp";
import IntelligentIndentAssignment from "../../assets/Solutions/IndentAutomation/intelligent-indent-management.webp";
import RealTimeNotifications from "../../assets/Solutions/IndentAutomation/real-time-notification-and-acceptance.webp";
import FullVisibilityLogs from "../../assets/Solutions/IndentAutomation/full-visibility-logs.webp";

const FreightSourcingAndReverseAuction = () => {
  const heading = <>Why Indent Automation?</>;

  const text =
    "Managing freight indenting manually leads to delays, miscommunication, and lost time. CargoPro replaces fragmented spreadsheets and phone calls with a streamlined, automated flow—from indent creation to vehicle assignment—so your operations run faster, smoother, and error-free.";

  const centralizedContractManagementpoints = [
    "Save all transporter contracts in the system by route, rate, vehicle type, and validity.",
    "Access all contracts and rate cards in one place for better control.",
    "Maintain transparency and avoid outdated rate references.",
    "Makes rate-based decisions automatic and auditable.",
  ];

  const intelligentIndentAssignmentPoints = [
    "The system selects the transporter offering the best contractual or dynamic rate.",
    "Supports multiple rules: rate/km, region, priority vendor, and more.",
    "Eliminates need to call or manually shortlist transporters.",
    "Load assignment happens instantly after planning.",
  ];

  const realTimeNotificationAndAcceptancePoints = [
    "Once an indent is assigned, the transporter gets real-time alerts via WhatsApp, SMS, and the dashboard.",
    "Transporter can accept/reject directly from their interface.",
    "Any rejections trigger fallback rules to assign the next best transporter.",
    "Ensures zero downtime in dispatch process.",
  ];

  const fullVisibilityLogsPoints = [
    "View logs of who assigned what, when, and why — all in one place.",
    "Track if auto-assignment happened via contract or fallback logic.",
    "Shippers and admins can audit all decisions and intervene if needed.",
    "Brings consistency, traceability, and trust in indent decisions.",
  ];

  return (
    <>
      <Helmet>
        <title>Indent Automation | CargoPro</title>
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Automated Indent
            <br />
            Assignment to the
            <br />
            Best-Fit Transporter
          </>
        }
        content={
          <>
            CargoPro uses intelligent contract-based logic to
            <br /> auto-assign loads to transporters offering the best
            <br /> rates — reducing manual effort, ensuring
            <br /> consistency, and improving reliability.
          </>
        }
        image={IndentAutomationHero} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <FreightSourcingSection1
        imageSrc={IndentAutomation}
        heading={heading}
        text={text}
      />
      <SmartFreightSourcing
        heading="Centralized Contract Management"
        points={centralizedContractManagementpoints}
        imageSrc={CentralizedContractManagement}
      />

      <ReverseAuctionSection
        heading={
          <>
            Intelligent Indent <br /> Assignment
          </>
        }
        points={intelligentIndentAssignmentPoints}
        mainImage={IntelligentIndentAssignment}
      />
      <SmartFreightSourcing
        heading={
          <>
            Real-Time Notification <br /> and Acceptance
          </>
        }
        points={realTimeNotificationAndAcceptancePoints}
        imageSrc={RealTimeNotifications}
      />
      <ReverseAuctionSection
        heading={<>Full Visibility and Logs</>}
        points={fullVisibilityLogsPoints}
        mainImage={FullVisibilityLogs}
      />
      <BussinessBenifits />
      <CargoProBookDemo
        heading={<>See It In Action</>}
        text={
          <>
            Still juggling phone calls for truck assignments? Let CargoPro
            <br /> automate it.
          </>
        }
      />

      <Footer />
    </>
  );
};

export default FreightSourcingAndReverseAuction;
// This component can be used in your main application file or routed as needed.

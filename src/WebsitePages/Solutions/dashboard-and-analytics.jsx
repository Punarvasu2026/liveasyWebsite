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
import CargoProAdvantage from "../../components/Solutions/DadhboardAndAnalytics/cargopro-advantage";
import Footer from "../../components/footer";
import TakeControlOfYourLogistics from "../../components/Solutions/DadhboardAndAnalytics/take-control-of-your-logistics";

// Images
import DashboardAndAnalyticsHero from "../../assets/Solutions/DashboardAndAnalytics/dashboard-and-analytics-hero-image.jsx.webp";
import DashboardAndAnalyticsImage from "../../assets/Solutions/DashboardAndAnalytics/dashboard-and-analytics-image.webp";
import CentralizedLogisticsOverviewImage from "../../assets/Solutions/DashboardAndAnalytics/centralized-logistics-overview.webp";
import FreightAndLoadAnalysisImage from "../../assets/Solutions/DashboardAndAnalytics/freight-and-load-analysis.webp";
import FullAuditTrailAndTeamLogsImage from "../../assets/Solutions/DashboardAndAnalytics/full-audit-trail-and-team-logs.webp";
import TransporterAndVendorAnalysisImage from "../../assets/Solutions/DashboardAndAnalytics/transporter-and-vendor-analysis.webp";

const DashboardAndAnalytics = () => {
  const heading = (
    <>
      See Everything. Miss
      <br /> Nothing.
    </>
  );

  const text =
    "With CargoPro’s powerful dashboard, track every load, bid, invoice, and user action in real-time. Analyze freight trends, monitor transporter performance, and understand your logistics cost breakdown — all with clear visual charts and complete transparency.";

  const centralizedLogisticsOverview = [
    "View total loads posted, booked, ongoing, completed, or cancelled.",
    "Instantly see average freight rates, booking trends, and cost breakdown.",
    "Monitor KPIs like monthly shipment volume, average weight, and time-to-dispatch.",
    "A live bird’s-eye view of your logistics in one place.",
  ];

  const freightAndLoadAnalysis = [
    "Analyze freight trends: per km rate, weight-based costing, cost per shipment.",
    "Compare freight costs across time periods, transporters, and lanes.",
    "Spot savings through reverse bidding and track cost reductions.",
    "Evaluate load efficiency: empty run %, weight utilization, and more.",
  ];

  const transporterAndVendorInsights = [
    "See per-transporter metrics: bid participation, win ratio, average quote, cancellations.",
    "Track booking counts and performance ratings over time.",
    "Identify high-performing, low-cancellation vendors.",
    "Make sourcing decisions backed by performance data, not just relationships.",
  ];

  const fullAuditTrailAndTeamLogs = [
    "View detailed logs: who posted loads, who accepted bids, who made changes.",
    "Record every user’s action with time, reason, and data trail.",
    "Improve internal accountability and audit-readiness.",
    "Download full activity reports for compliance or internal reviews.",
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard and Analytics | CargoPro</title>
      </Helmet>
      <Navbar />
      <HeroSection
        heading={
          <>
            Full Control. Total <br /> Visibility. Smarter
            <br /> Decisions.
          </>
        }
        content={
          <>
            CargoPro’s advanced dashboard gives you real-time
            <br /> analytics, freight insights, team accountability logs, <br />
            and downloadable reports — all in one place.
          </>
        }
        image={DashboardAndAnalyticsHero} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <SolutionsSection1
        imageSrc={DashboardAndAnalyticsImage}
        heading={heading}
        text={text}
      />
      <SolutionsSection2
        heading={
          <>
            Centralized Logistics <br /> Overview
          </>
        }
        points={centralizedLogisticsOverview}
        imageSrc={CentralizedLogisticsOverviewImage}
      />

      <SolutionsSection3
        heading={<>Freight & Load Analysis</>}
        points={freightAndLoadAnalysis}
        mainImage={FreightAndLoadAnalysisImage}
      />
      <SolutionsSection2
        heading={
          <>
            Transporter $ Vendor <br /> Analysis
          </>
        }
        points={transporterAndVendorInsights}
        imageSrc={TransporterAndVendorAnalysisImage}
      />
      <SolutionsSection3
        heading={
          <>
            Full Audit Trail & Team
            <br /> Logs
          </>
        }
        points={fullAuditTrailAndTeamLogs}
        mainImage={FullAuditTrailAndTeamLogsImage}
      />
      <TakeControlOfYourLogistics />
      <CargoProAdvantage />
      <CargoProBookDemo
        heading={<>Your Logistics, Now Smarter.</>}
        text={
          <>
            It’s time to stop guessing where your shipment is. Start tracking it
            in
            <br /> real time — with CargoPro’s smart tracking suite.
          </>
        }
      />

      <Footer />
    </>
  );
};

export default DashboardAndAnalytics;
// This component can be used in your main application file or routed as needed.

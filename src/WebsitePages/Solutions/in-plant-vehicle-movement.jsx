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

const InPlantVehicleMovement = () => {
  const heading = (
    <>
      Maximize Facility Efficiency. <br />
      Minimize Downtime.
    </>
  );

  const text =
    "CargoPro’s  Inside Plant Visibility gives logistics and plant teams a centralized system to monitor all inbound and outbound vehicle movements. From gate-in to gate-out, every stage — like waiting, loading, unloading, and turnaround time — is tracked with real-time updates, enabling faster decisions and tighter control.";

  const gateIngateOutTrackingPoints = [
    "Transporters can create invoices directly from completed shipments after uploading the POD",
    "System auto-calculates billed amounts based on quoted rates, quantity, and distance.",
    "Allows bundling multiple bookings into one invoice for smoother billing cycles.",
    "Add GST, extra charges, and generate invoice numbers instantly from the app or dashboard.",
  ];

  const StageWiseProcessMonitoringPoints = [
    "View the live status of each vehicle: waiting, loading, unloading, or completed.",
    "Accountability for delays at any stage — identify bottlenecks instantly.",
    "Plant staff can update each stage through the app or system interface.",
    "Full operational transparency — no guesswork.",
  ];

  const TurnAroundTimePoints = [
    "Full operational transparency — no guesswork.",
    "Identify average delays per stage and benchmark performance.",
    "Use analytics to improve loading efficiency and reduce congestion.",
    "Boost throughput by optimizing scheduling and reducing idle time.",
  ];

  const StayInformedAtEveryStepPoints = [
    "Automated notifications for delays, stage completions, or abnormal movement.",
    "Alerts sent to relevant teams (plant, security, loading) — no manual follow-up.",
    "Proactive communication prevents mismanagement and reduces idle time.",
    "Everyone’s aligned with what's happening in real time.",
  ];

  return (
    <>
      <Helmet>
        <title>CargoPro | In Plant Vehicle Movement and Optimization</title>
        <meta
          name="description"
          content="Track vehicle movement inside your plant with CargoPro’s real-time alerts, stage-wise monitoring, and turnaround time optimization. Maximize efficiency and minimize downtime with full operational transparency."
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
      <HeroSection
        heading={
          <>
            Bring Complete Visibility
            <br /> and Accountability <br />
            Inside Your Plant
          </>
        }
        content={
          <>
            Track every vehicle's movement — from entry to exit — <br />
            with real-time alerts, stage-wise monitoring, and <br />
            turnaround time optimization.
          </>
        }
        image="/images/Solutions/InPlantVehicleMovement/in-plant-vehicle-movement-and-optimization.webp"
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <SolutionsSection1
        imageSrc="/images/Solutions/InPlantVehicleMovement/maximize-facility-efficiency.webp"
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
        points={gateIngateOutTrackingPoints}
      />

      <SolutionsSection3
        heading={
          <>
            Stage-Wise Process <br />
            Monitoring
          </>
        }
        points={StageWiseProcessMonitoringPoints}
        mainImage="/images/Solutions/InPlantVehicleMovement/stage-wise-process-monitoring.webp"
      />
      <SolutionsSection2
        heading={
          <>
            Turnaround Time (TAT) <br />
            Optimization
          </>
        }
        points={TurnAroundTimePoints}
        imageSrc="/images/Solutions/InPlantVehicleMovement/turnaround-time-optimization.webp"
      />
      <SolutionsSection3
        heading={
          <>
            Stay Informed at Every <br />
            Step
          </>
        }
        points={StayInformedAtEveryStepPoints}
        mainImage="/images/Solutions/InPlantVehicleMovement/stay-informed-at-every-step.webp"
      />
      <CargoProBookDemo
        heading={
          <>
            Fully Integrated with Your TMS & <br />
            WMS
          </>
        }
        text={
          <>
            CargoPro’s In-Plant Vehicle Movement solution syncs seamlessly with
            your existing Transport Management System and Warehouse Management
            Systems—ensuring no information silos and 100% visibility across the
            supply chain.
          </>
        }
      />

      <Footer />
    </>
  );
};

export default InPlantVehicleMovement;

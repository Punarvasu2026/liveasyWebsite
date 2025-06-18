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
import HeroImge from "../../assets/Solutions/InPlantVehicleMovement/inplant-vehicle-movement-hero-image.webp";
import Section1Image from "../../assets/Solutions/InPlantVehicleMovement/inplant-vehicle-movement-image.webp";
import StageWiseMonitoring from "../../assets/Solutions/InPlantVehicleMovement/in-plant-stage-wise-monitoring.webp";
import StayInformedAtEveryStep from "../../assets/Solutions/InPlantVehicleMovement/in-plant-stay-informed-at-every-step.webp";
import TurnAroundTime from "../../assets/Solutions/InPlantVehicleMovement/in-plant-turnaround-time.webp";

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
        <title>In Plant Vehicle Movement and Optimization| CargoPro</title>
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
        image={HeroImge} // Adjust the path as necessary
        buttonLabel="Schedule Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
      />
      <TrustedBy />
      <SolutionsSection1
        imageSrc={Section1Image}
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
        mainImage={StageWiseMonitoring}
      />
      <SolutionsSection2
        heading={
          <>
            Turnaround Time (TAT) <br />
            Optimization
          </>
        }
        points={TurnAroundTimePoints}
        imageSrc={TurnAroundTime}
      />
      <SolutionsSection3
        heading={
          <>
            Stay Informed at Every <br />
            Step
          </>
        }
        points={StayInformedAtEveryStepPoints}
        mainImage={StayInformedAtEveryStep}
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
// This component can be used in your main application file or routed as needed.

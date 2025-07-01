import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./WebsitePages/cargopro-home";
import FreightSourcingAndReverseAuction from "./WebsitePages/Solutions/freight-sourcing-and-reverse-auction";
import IndentAutomation from "./WebsitePages/Solutions/indent-automation";
import Blog from "./WebsitePages/Blogs/Blog";
import AboutCargoPro from "./WebsitePages/AboutCargoPro/about-cargopro";
import RevolutionizingLogistics from "./WebsitePages/Blogs/blog-revolutionizing-logistics";
import Invoicing from "./WebsitePages/Solutions/invoicing";
import InPlant from "./WebsitePages/Solutions/in-plant-vehicle-movement";
import Pod from "./WebsitePages/Solutions/pod";
import Careers from "./WebsitePages/CareersAtCargoPro/careers";
import Industries from "./WebsitePages/Industries/industries";
import DashboardAndAnalytics from "./WebsitePages/Solutions/dashboard-and-analytics";
import Blog1 from "./WebsitePages/Blogs/blog-1-revolutionizing-procurement";
import Blog2 from "./WebsitePages/Blogs/blog-2-eco-friendly-logistics";
import Blog3 from "./WebsitePages/Blogs/blog-3-say-goodbye-to-invoiceing-hassles";
import Blog4 from "./WebsitePages/Blogs/blog-4-breaking-barieiers";
import Blog5 from "./WebsitePages/Blogs/blog-5-digital-transformations-strategies";
import Blog6 from "./WebsitePages/Blogs/blog-6-optimizing-resourses";
import Blog7 from "./WebsitePages/Blogs/blog-7-cutting-down-freight-cost";
import Blog8 from "./WebsitePages/Blogs/blog-8-how-to-choose-right-tms";
import Blog9 from "./WebsitePages/Blogs/blog-9-end-to-end-suplly-chain";
import Blog10 from "./WebsitePages/Blogs/blog-10-higher-freight-cost-in-steel-industry";
import Blog11 from "./WebsitePages/Blogs/blog-11-national-logistics-policy-2022";
import Blog12 from "./WebsitePages/Blogs/blog-12-automated-invoicing";
import Blog13 from "./WebsitePages/Blogs/blog-13-benifits-of-automated-indent-management";
import Blog14 from "./WebsitePages/Blogs/blog-14-streamline-yard-management-with-in-plant-optimization";
import Blog15 from "./WebsitePages/Blogs/blog-15-end-to-end-visibility-with-logistics-tracking-solution";
import Blog16 from "./WebsitePages/Blogs/blog-16-data-driven-logistics";
import Blog17 from "./WebsitePages/Blogs/blog-17-digital-proof-of-dilivery";
import Blog18 from "./WebsitePages/Blogs/blog-18-last-mile-delivery-logistics";
import Blog19 from "./WebsitePages/Blogs/blog-19--elevating-warehoouse-efficiency";
import Blog20 from "./WebsitePages/Blogs/blog-20-warehouse-management-system";
import Blog21 from "./WebsitePages/Blogs/blog-21-slreamlining-logistics-operations";
import Blog22 from "./WebsitePages/Blogs/blog-22-seamless-integration-of-transportation";
import Blog23 from "./WebsitePages/Blogs/blog-23-mastering-multi-carrier-shipments";
import Blog24 from "./WebsitePages/Blogs/blog-24-revolutionizing-freight-transport";
import RevolutionizingLogisticsBlog from "./WebsitePages/Blogs/blog-revolutionizing-logistics";
import NotFoundPage from "./404";
//import NotFoundPage from "./404NotFound";

import Tracking from "./WebsitePages/Solutions/tracking";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Navbar */}

        {/* Solutions */}
        <Route
          path="/freight-sourcing-and-reverse-auction"
          element={<FreightSourcingAndReverseAuction />}
        />
        <Route path="/indent-automation" element={<IndentAutomation />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route
          path="/in-plant-vehicle-movement-and-optimization"
          element={<InPlant />}
        />
        <Route path="/proof-of-delivery" element={<Pod />} />
        <Route
          path="/dashboard-analytics"
          element={<DashboardAndAnalytics />}
        />
        <Route path="/tracking" element={<Tracking />} />

        {/* Industries */}
        <Route path="/industries" element={<Industries />} />

        {/* Company */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<AboutCargoPro />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blog />} />
        <Route
          path="/blogs/revolutionizing-logistics"
          element={<RevolutionizingLogistics />}
        />
        <Route path="/blogs/revolutionizing-procurement" element={<Blog1 />} />
        <Route path="/blogs/eco-friendly-logistics" element={<Blog2 />} />
        <Route
          path="/blogs/say-goodbye-to-invoicing-hassles"
          element={<Blog3 />}
        />
        <Route path="/blogs/digital-solution-challenges" element={<Blog4 />} />
        <Route
          path="/blogs/digital-transformation-strategies"
          element={<Blog5 />}
        />
        <Route path="/blogs/in-plant-automation" element={<Blog6 />} />
        <Route
          path="/blogs/digitization-helps-cutting-down-freight-cost"
          element={<Blog7 />}
        />
        <Route path="/blogs/how-to-choose-the-right-tms" element={<Blog8 />} />
        <Route
          path="/blogs/big-data-and-predictive-analytics-in-logistics"
          element={<Blog9 />}
        />
        <Route
          path="/blogs/why-freight-cost-is-higher-in-the-steel-industry"
          element={<Blog10 />}
        />
        <Route
          path="/blogs/national-logistics-policy-2022"
          element={<Blog11 />}
        />
        <Route
          path="/blogs/automated-invoicing-and-simplifying-logistics"
          element={<Blog12 />}
        />
        <Route
          path="/blogs/benifits-of-automated-indent-management"
          element={<Blog13 />}
        />
        <Route
          path="/blogs/how-to-streamline-yard-management-with-in-plant-optimization"
          element={<Blog14 />}
        />
        <Route
          path="/blogs/achieving-end-to-end-visibility-with-logistics-tracking-solutions"
          element={<Blog15 />}
        />
        <Route
          path="/blogs/the-power-of-data-driven-logistics-analytics-and-insights"
          element={<Blog16 />}
        />
        <Route path="/blogs/digital-proof-of-delivery" element={<Blog17 />} />
        <Route path="/blogs/last-mile-delivery" element={<Blog18 />} />
        <Route
          path="/blogs/elevating-warehouse-efficiency"
          element={<Blog19 />}
        />
        <Route
          path="/blogs/seamless-integration-of-transportation-and-warehouse-management"
          element={<Blog20 />}
        />
        <Route
          path="/blogs/seamless-logistics-operations"
          element={<Blog21 />}
        />
        <Route
          path="/blogs/how-automated-invoicing-in-simplifying-logistics"
          element={<Blog22 />}
        />
        <Route
          path="/blogs/mastering-multi-carrier-shipments-and-orders"
          element={<Blog23 />}
        />
        <Route
          path="/blogs/revolutionizing-freight-transport"
          element={<Blog24 />}
        />

        <Route
          path="/blogs/revolutionizing-logistics"
          element={<RevolutionizingLogisticsBlog />}
        />

        {/* Contacts */}
        <Route path="/contacts" element={<Careers />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

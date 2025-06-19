import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './WebsitePages/cargopro-home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreightSourcingAndReverseAuction from './WebsitePages/Solutions/freight-sourcing-and-reverse-auction';
import IndentAutomation from './WebsitePages/Solutions/indent-automation';
import Blog from './WebsitePages/Blogs/Blog';
import AboutCargoPro from './WebsitePages/AboutCargoPro/about-cargopro';
import RevolutionizingLogistics from './WebsitePages/Blogs/blog-revolutionizing-logistics';
import Invoicing from './WebsitePages/Solutions/invoicing';
import InPlant from './WebsitePages/Solutions/in-plant-vehicle-movement';
import Pod from './WebsitePages/Solutions/pod';
import Careers from './WebsitePages/CareersAtCargoPro/careers'
import Industries from './WebsitePages/Industries/industries';
import DashboardAndAnalytics from './WebsitePages/Solutions/dashboard-and-analytics';
import Blog1 from './WebsitePages/Blogs/blog-1-revolutionizing-procurement';
import Blog2 from './WebsitePages/Blogs/blog-2-eco-friendly-logistics';
import Blog3 from './WebsitePages/Blogs/blog-3-say-goodbye-to-invoiceing-hassles';
import Blog4 from './WebsitePages/Blogs/blog-4-breaking-barieiers';
import Blog5 from './WebsitePages/Blogs/blog-5-digital-transformations-strategies';
import Blog6 from './WebsitePages/Blogs/blog-6-optimizing-resourses';
import Blog8 from './WebsitePages/Blogs/blog-8-how-to-choose-right-tms';
import Blog9 from './WebsitePages/Blogs/blog-9-end-to-end-suplly-chain';
import Tracking from './WebsitePages/Solutions/tracking';



function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Navbar */}

        {/* Solutions */}
        <Route path="/freight-sourcing-and-reverse-auction" element={<FreightSourcingAndReverseAuction />} />
        <Route path="/indent-automation" element={<IndentAutomation />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/in-plant-vehicle-movement-and-optimization" element={<InPlant />} />
        <Route path='/proof-of-delivery' element={<Pod/>}/>
        <Route path="/dashboard-analytics" element={<DashboardAndAnalytics/>} />
        <Route path="/tracking" element={<Tracking />} />

        {/* Industries */}
        <Route path="/industries" element={<Industries />} /> 

        {/* Company */}
        <Route path='/careers' element = { <Careers />} />
        <Route path="/about" element={<AboutCargoPro />}/>

        {/* Blogs */}
        <Route path="/blogs" element={<Blog />} />
        <Route path='/blogs/revolutionizing-logistics' element = {<RevolutionizingLogistics />}/>
        <Route path='/blogs/revolutionizing-procurement' element = {<Blog1 />}/>
        <Route path='/blogs/eco-friendly-logistics' element = {<Blog2 />}/>
        <Route path='/blogs/say-goodbye-to-invoicing-hassles' element = {<Blog3 />}/>
        <Route path='/blogs/digital-solution-challenges' element = {<Blog4 />}/>
        <Route path='/blogs/digital-transformation-strategies' element = {<Blog5 />}/>
        <Route path='/blogs/in-plant-automation' element = {<Blog6 />}/>
        <Route path='/blogs/how-to-choose-the-right-tms' element = {<Blog8 />}/>
        <Route path='/blogs/big-data-and-predictive-analytics-in-logistics' element = {<Blog9 />}/>

        {/* Contacts */}
        <Route path="/contacts" element={<Careers />} />

        {/* Catch-all route */}


      </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './WebsitePages/cargopro-home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreightSourcingAndReverseAuction from './WebsitePages/Solutions/freight-sourcing-and-reverse-auction';
import IndentAutomation from './WebsitePages/Solutions/indent-automation';
import Blog from './WebsitePages/Blogs/Blog';
import AboutCargoPro from './WebsitePages/AboutCargoPro/about-cargopro';
import RevolutionizingLogistics from './WebsitePages/Blogs/blog-1-revolutionizing-logistics';
import Invoicing from './WebsitePages/Solutions/invoicing';
import InPlant from './WebsitePages/Solutions/in-plant-vehicle-movement';
import Pod from './WebsitePages/Solutions/pod';
import Careers from './WebsitePages/CareersAtCargoPro/careers'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freight-sourcing-and-reverse-auction" element={<FreightSourcingAndReverseAuction />} />
        <Route path="/indent-automation" element={<IndentAutomation />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/in-plant-vehicle-movement-and-optimization" element={<InPlant />} />
        <Route path='/proof-of-delivery' element={<Pod/>}/>
        <Route path="/blogs" element={<Blog />} />
        <Route path='/careers' element = { <Careers />} />
        <Route path="/about" element={<AboutCargoPro />}/>



        {/* Blogs */}
        <Route path='/blogs/revolutionizing-logistics' element = {<RevolutionizingLogistics />}/>
      </Routes>
    </Router>
  );
}

export default App;

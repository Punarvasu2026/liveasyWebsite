import logo from './logo.svg';
import './App.css';
import Home from './WebsitePages/cargopro-home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreightSourcingAndReverseAuction from './WebsitePages/Solutions/freight-sourcing-and-reverse-auction';
import IndentAutomation from './WebsitePages/Solutions/indent-automation';
import Blog from './WebsitePages/Blogs/Blog';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freight-sourcing-and-reverse-auction" element={<FreightSourcingAndReverseAuction />} />
        <Route path="/indent-automation" element={<IndentAutomation />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

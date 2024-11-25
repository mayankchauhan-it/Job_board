import React from 'react';
import './App.css';
import Index_page from './webpages/Index_page'; // Import the index_page component
import About_us_page from './webpages/About_us_page';
import Contact_us_page from './webpages/Contact_us_page';
import Jobs_categories from './webpages/jobs_categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index_page />} />
        <Route path="/aboutus" element={<About_us_page />} />
        <Route path="/contactus" element={<Contact_us_page />} />
        <Route path="/job_category" element={<Jobs_categories />} />
      </Routes>
    </Router>
  );
}


export default App;

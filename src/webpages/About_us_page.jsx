import React from "react";
import '../App.css';
import Header from '../components/Header'; // Import the Header component
import Aboutus from '../components/aboutUs_Main_Content'; // Import the AboutUs_main_content component
import Footer from '../components/Footer'; // Import the Footer component
import BackToTop from '../components/BackToTop'; // Import the BackToTop component

const about_us_page = () => {
  return (
    <>
      <Header />
      <Aboutus />
      <BackToTop />
      <Footer />
    </>
  );
};

export default about_us_page;

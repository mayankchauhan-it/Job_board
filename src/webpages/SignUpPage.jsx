import React from "react";
import '../App.css';
import Header from '../components/Header'; // Import the Header component
import Signup from '../components/Signup'; // Import the AboutUs_main_content component
import Footer from '../components/Footer'; // Import the Footer component

const about_us_page = () => {
  return (
    <>
      <Header />  
      <Signup />  
      <Footer /> 
    </>
  );
};

export default about_us_page;

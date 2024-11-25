import React from "react";
import '../App.css';
import Header from '../components/Header'; // Import the Header component
import ContactUs from '../components/ContactUs'; // Import the AboutUs_main_content component
import Footer from '../components/Footer'; // Import the Footer component

const contactUs = () => {
  return (
    <>
      <Header />  
      <ContactUs />  
      <Footer /> 
    </>
  );
};

export default contactUs;

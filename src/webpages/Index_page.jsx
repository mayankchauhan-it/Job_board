import React from "react";
import '../App.css';
import Header from '../components/Header'; // Import the Header component
import MainContent from '../components/MainContent'; // Import the MainContent component
import Footer from '../components/Footer'; // Import the Footer component
import BackToTop from '../components/BackToTop'; // Import the BackToTop component
import SecondDiv from '../components/second_div'; // Import the second_div component
import ThirdDiv from '../components/third_section'; // Import the Footer component

const index_page = () => {
  return (
    <>
      <Header />  
      <MainContent />    {/* Slider */}
      <SecondDiv />  {/* Cut the slider box */}
      <ThirdDiv />  {/* Main Content - home */}
      <BackToTop />  
      <Footer /> 
    </>
  );
};

export default index_page;

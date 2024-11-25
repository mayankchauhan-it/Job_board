import React from "react";
import '../App.css';
import Header from '../components/Header'; // Import the Header component
import Jc from '../components/jc_main_content'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import BackToTop from '../components/BackToTop'; // Import the BackToTop component

const job_category_page = () => {
    return (
        <>
            <Header />
            <Jc />
            <BackToTop />
            <Footer />
        </>
    );
};

export default job_category_page;

import React from 'react';
import './App.css';
import Header from './components/Header'; // Import the Header component
import MainContent from './components/MainContent'; // Import the MainContent component
import Footer from './components/Footer'; // Import the Footer component
import BackToTop from './components/BackToTop'; // Import the Footer component

function App() {
  return (
    <>
      <Header />  {/* Add Header component */}
      <MainContent />  {/* Add MainContent component */}
      <BackToTop />  {/* Add MainContent component */}
      <Footer />  {/* Add Footer component */}

    </>
  );
}


export default App;

import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/navbar';
//import Footer from '../Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />

    </>
  );
}

export default HomePage;
import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/heroSection';
import Navbar from '../components/navbar';

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
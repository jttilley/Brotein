import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
<<<<<<< HEAD
import HeroSection from '../components/heroSection';
=======
import HomeSection from '../components/homeBanner';
>>>>>>> 4ee973486b5c46f235d52c7ac77f0d53108c8d3a
import Navbar from '../components/navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Cards />
    </>
  );
}

export default HomePage;
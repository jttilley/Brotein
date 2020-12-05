import React from 'react';
import '../App.css';
import Cards from '../components/cards';
import HomeSection from '../components/homeBanner';
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
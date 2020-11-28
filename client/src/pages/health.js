import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HealthBanner from '../components/healthBanner';
import Youtube from '../components/youtube';
import Food from '../components/food';

function HealthPage() {
    return (
        <div>
            <Navbar />
            <HealthBanner />
            <Youtube />
            <Food />
        </div>

    );
};

export default HealthPage;
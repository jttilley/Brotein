import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/HistoryBanner';
import Youtube from '../components/youtube';
import Food from '../components/food';

function HealthPage() {
    return (
        <div>
            <Navbar />
            <HistoryBanner />
            <Youtube />
            <Food />
        </div>

    );
};

export default HealthPage;
import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HealthBanner from '../components/healthBanner';
// import Youtube from '../components/youtube';
// import Food from '../components/food';
//import SplitPane from "react-split-pane";
import '../css/main.css';
import Pane from '../components/splitPane';

function HealthPage() {
    return (
        <div>
            <Navbar />
            <HealthBanner />
            <Pane />
        </div>
    );
};

export default HealthPage;
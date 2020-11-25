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
            <div class="row">
                <div class="col-6">
                    <Youtube /> 
                </div>
                <div class="col-6">
                    <Food />
                </div>
            </div>
        </div>

    );
};

export default HealthPage;
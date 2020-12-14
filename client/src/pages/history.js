import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/historyBanner';
import CenteredTabs from '../components/historyTabView';
import Pane from '../components/splitPane';

function HistoryPage() {
    
    
    return (
        <>
            <Navbar />
            <HistoryBanner />
            <Pane />
            
        </>
    );


} 

export default HistoryPage;
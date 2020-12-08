import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/historyBanner';
import CenteredTabs from '../components/tabView';


function HistoryPage() {
    
    
    return (
        <>
            <Navbar />
            <HistoryBanner />
            <CenteredTabs />
            
        </>
    );


} 

export default HistoryPage;
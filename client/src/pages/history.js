import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/historyBanner';
import ExcerciseTable from '../components/exerciseTable';
import MealTable from '../components/mealTable';
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
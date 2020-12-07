import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/historyBanner';
import ExcerciseTable from '../components/exerciseTable';
import MealTable from '../components/mealTable';
import CenteredTabs from '../components/tabView';
import HistoryWorkout from '../components/historyWorkout';
function HistoryPage() {
    
    
    return (
        <>
            <Navbar />
            <HistoryBanner />
            <HistoryWorkout />
            
        </>
    );


} 

export default HistoryPage;
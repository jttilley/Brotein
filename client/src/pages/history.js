import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import HistoryBanner from '../components/HistoryBanner';
import ExcerciseTable from '../components/ExerciseTable';
import MealTable from '../components/MealTable';

function HistoryPage() {
    return (
        <>
            <Navbar />
            <HistoryBanner />
            <ExcerciseTable />
            <MealTable />
        </>
    );
}

export default HistoryPage;
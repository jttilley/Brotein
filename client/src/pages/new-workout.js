import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import exercises from '../utils/exercises.json';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/WorkoutBanner';



function NewWorkOutPage() {
    let [search, setSearch] = useState("");

    const handleChange = () => {

    }

    return (
        <div>
            <Navbar />
            <WorkoutBanner />
        </div>
    );
};
export default NewWorkOutPage;
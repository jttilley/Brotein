import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import exercises from '../utils/exercises.json';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import NewWorkout from '../components/newWorkout';



function NewWorkOutPage() {
    let [search, setSearch] = useState("");

    const handleChange = () => {

    }

    return (
        <div>
            <Navbar />
            <WorkoutBanner />
            <NewWorkout />
        </div>
    );
};
export default NewWorkOutPage;
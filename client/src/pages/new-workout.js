import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import AddWorkout from '../components/addWorkout';



function NewWorkOutPage() {
    let [search, setSearch] = useState("");

    const handleChange = () => {

    }

    return (
        <div>
            <Navbar />
            <WorkoutBanner />
            <AddWorkout />
        </div>
    );
};
export default NewWorkOutPage;
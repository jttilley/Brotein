import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import AddWorkout from '../components/addWorkout';



function NewWorkOutPage() {
    let [workout, setWorkout] = useState({
        exercise: '',
        weight: '',
        sets: '',
        reps: '',
        duration: ''
    });

    const handleInputChange = (event) {
        const { name, value } = event.target;
        setWorkout({...workout, [name]: value});
    }

    const handleAdd = (event) => {
        event.preventDefault()
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
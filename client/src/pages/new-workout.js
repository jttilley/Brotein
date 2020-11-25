import React, { useEffect, useContext } from 'react';
import API from '../utils/API';
import exercises from '../utils/exercises';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/WorkoutBanner';



function NewWorkOutPage() {
    // let exercises = [state, setState] = useContext;

    // const handleChange = () => {

    // }

    return (
        <div>
            <Navbar />
            <WorkoutBanner />
        </div>

    );
};
export default NewWorkOutPage;
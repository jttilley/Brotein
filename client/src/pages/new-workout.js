import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import AddWorkout from '../components/addWorkout';
import WorkoutContext from '../utils/workoutContext';
import API from '../utils/API';
import ExcerciseTable from '../components/exerciseTable';


function NewWorkOutPage() {
    let [workout, setWorkout] = useState({
        exercise: '',
        weight: '',
        sets: '',
        reps: '',
        duration: ''
    });

    const rows = [];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);
        setWorkout({...workout, [name]: value});
        console.log('workout: ', workout);
    }

    const handleAdd = (event) => {
        event.preventDefault()
        const newWorkout = {
            exercise: workout.exercise,
            sets: workout.sets,
            reps: workout.reps,
            weight: workout.weight,
            duration: workout.duration
        }
        API.postWorkout(newWorkout).then(() => {
            //add exercise to workout card
            rows.push(createData(newWorkout));
        }).catch((error) => {
            console.log(error);
        });
    }

    function createData( {name, sets, reps, weight, duration} ) {
        return { name, sets, reps, weight, duration };
    }

    // const rows = [
        // createData('Bicep Curls', 4, 10, 30, 7),
        // createData('Hammer Curls', 4, 10, 35, 5),
        // createData('Shoulder Press', 3, 10, 110, 6),
    // ];

    return (
        <WorkoutContext.Provider value={{
            exercise: '',
            weight: '',
            sets: '',
            reps: '',
            duration: '',
            handleInputChange: () => {},
            handleAdd: () => {}
        }}>
            <Navbar />
            <WorkoutBanner />
            <AddWorkout />
            <ExcerciseTable rows={rows}/>
        </WorkoutContext.Provider>
    );
};
export default NewWorkOutPage;
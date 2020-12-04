import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import AddWorkout from '../components/addWorkout';
import WorkoutContext from '../utils/workoutContext';
import API from '../utils/API';
import ExcerciseTable from '../components/exerciseTable';


const NewWorkOutPage = () => {
    let [workout, setWorkout] = useState({
        exercise: '',
        weight: '',
        sets: '',
        reps: '',
        duration: ''
    });
    
    let [rows, setRows] = useState([]);

    const workoutRows = [];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);
        setWorkout({...workout, [name]: value});
        console.log('workout: ', workout);
    }

    const handleAdd = (event) => {
        event.preventDefault()
        const newWorkout = createData(workout)

        console.log('newWorkout: ', newWorkout);
        workoutRows.push(newWorkout);
        setRows(workoutRows);
        const emptyIt = {
            exercise:"",
            reps:"",
            sets:"",
            weights:"",
            duration:""
        }
        setWorkout(emptyIt);

        // API.postWorkout(newWorkout).then(() => {
        //     //add exercise to workout card
        //     rows.push(createData(newWorkout));
        // }).catch((error) => {
        //     console.log(error);
        // });
    }

    function createData( { exercise, sets, reps, weight, duration } ) {
        return { exercise, sets, reps, weight, duration };
    }

    // const rows = [
    //     createData('Bicep Curls', 4, 10, 30, 7),
    //     createData('Hammer Curls', 4, 10, 35, 5),
    //     createData('Shoulder Press', 3, 10, 110, 6),
    // ];

    return (
        <WorkoutContext.Provider value={{
            workout,
            handleInputChange,
            handleAdd
        }}>
            <Navbar />
            <WorkoutBanner />
            <AddWorkout />
            <ExcerciseTable rows={rows}/>
        </WorkoutContext.Provider>
    );
};
export default NewWorkOutPage;
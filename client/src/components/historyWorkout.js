import { useState } from "react";
import React from 'react';
import ExcerciseTable from './exerciseTable';
import API from '../utils/API';
import HealthContex from '../utils/healthContex';
import DeleteBtn from './deleteBtn';

function HistoryWorkout () {

    const [ workouts ,setWorkout] = useState([])

    function getAllWorkouts() {
    API.getAllWorkouts()
        .then(res => 
        setWorkout(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteWorkout(id) {
    API.deleteWorkout(id)
        .then(res => getAllWorkouts())
        .catch(err => console.log(err));
    }
    //function updateWorkout(id) {
    //API.updateWorkout(id)
    //.then(res => getAllWorkouts())
    //.catch(err => console.log(err));
    //}



    return (
        <HealthContex.Provider value = {{
        workout,
        rows,
        getAllWorkouts,
        deleteWorkout,
        }}>
        <h1>Previous Workouts</h1>
        {workouts.length ? (
              <ExcerciseTable>
                {workouts.map(workout => (
                  
                
                <DeleteBtn onClick={() => deleteWorkout(workout._id)} />
               ))}
              </ExcerciseTable>
            ) : (
              <h3>No Results to Display</h3>
            )}     
        </HealthContex.Provider>

    )
}

export default HistoryWorkout;
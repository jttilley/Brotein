import { useState } from "react";
import React from 'react';
import API from '../utils/API';
import HealthContex from '../utils/healthContex';
import DeleteBtn from './deleteBtn';
import { List, ListItem } from './listItem';
import { Link } from "react-router-dom";

function HistoryWorkout () {

    const [ workouts, setWorkout] = useState([])

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
        
       <div>
        <h1>Previous Workouts</h1>
        {workouts.length ? (
                <List>
                  {workouts.map(workout => (
                    <ListItem key={workout._id}>
                      <Link to={"/api/meals/all" + workout._id}>
                        <strong>
                          {workout.excercise} 
                          {workout.sets} 
                          {workout.reps} 
                          {workout.weight} 
                          {workout.duration} 
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteWorkout(workout._id)} />
                    </ListItem>
                  ))}
                </List>
            ) : (
              <h3>No Results to Display</h3>
            )}     
           
        </div>

    )
}

export default HistoryWorkout;
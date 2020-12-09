import React, { useState, useEffect }  from 'react';
import API from '../utils/API';
import HealthContex from '../utils/healthContex';
import DeleteBtn from './deleteBtn';
import { List, ListItem } from './listItem';
import { Link } from "react-router-dom";

function HistoryWorkout () {

    const [ workouts, setWorkout] = useState([])

    function getAllWorkouts() {
    API.getAllWorkouts()
        .then(res => {
          console.log('workout res.data: ', res.data);
          setWorkout(res.data)
        })
        .catch(err => console.log(err));
    };

    function deleteWorkout(id) {
    API.deleteWorkout(id)
        .then(res => getAllWorkouts())
        .catch(err => console.log(err));
    }
    

    useEffect(() => {
      getAllWorkouts();
    }, [])

    return (
        
      <div>
        <h1>Previous Workouts</h1>
        {workouts.length ? (
                <List>
                  {workouts.map(workout => (
                    <ListItem key={workout._id}>
                        {workout.workout.map(data => (
                          <span>
                            <strong>
                              {data.exercise} 
                              {data.sets} 
                              {data.reps} 
                              {data.weight} 
                              {data.duration} 
                            </strong>
                          </span>
                        ))}
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
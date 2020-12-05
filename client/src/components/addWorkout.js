import React, { useContext } from "react";
import exercises from "../utils/exercises.json";
import WorkoutContext from "../utils/workoutContext";
import "../css/addWorkout.css"

function AddWorkout() {
  const { workout, handleInputChange, handleAdd } = useContext(WorkoutContext);
  console.log('workout: ', workout);

  return (
    // <div className="wrapper">
    <div className="exercise">
      <div className="ui raised card m-auto">
        <form action="POST">
          <div className="workout-name">
            <input type="text" className="form-control" name="name" placeholder="Name this workout" onChange={handleInputChange} />
          </div>
          <div className="workout-type">
            {/* <label for="exercise">Exercise Type:</label> */}
            <input type="exercise" className="form-control" name="exercise" list="exercises" id="exercise" value={workout.exercise} placeholder="Add an Exercise" onChange={handleInputChange} />
            <datalist id="exercises">
              {exercises.map(exercise => (
                <option value={exercise.fields.name}></option>
              ))}
            </datalist>
          </div>
          <div className="weight">
            {/* <label for="weight">Weight (lbs):</label> */}
            <input type="number" name="weight" id="weight" placeholder="Weight" onChange={handleInputChange} value={workout.weight} />
          </div>
          <div className="reps">
            {/* <label for="reps">Reps:</label> */}
            <input type="number" name="reps" id="reps" placeholder="Number of Reps" onChange={handleInputChange} value={workout.reps} />
          </div>
          <div className="sets">
            {/* <label for="sets">Sets:</label> */}
            <input type="number" name="sets" id="sets" placeholder="Number of Sets" onChange={handleInputChange} value={workout.sets} />
          </div>
          <div className="resistance-duration">
            {/* <label for="resistance-duration">Duration (minutes):</label> */}
            <input type="number" name="duration" id="resistance-duration" placeholder="Duration (minutes)" onChange={handleInputChange} value={workout.duration} />

          </div>
          <div className="buttons">
            <button className="huge ui positive button add-another" onClick={handleAdd} >
              Add Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWorkout;
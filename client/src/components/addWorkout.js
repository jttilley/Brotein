import React, { useContext } from "react";
import exercises from "../utils/exercises.json";
import WorkoutContext from "../utils/workoutContext";
import "../css/addWorkout.css"

function AddWorkout() {
  const {handleInputChange, handleAdd} = useContext(WorkoutContext);
  return (
    <div className="wrapper">
    <div>
      <h1>Fitness Tracker</h1>
    </div>
    <div className="exercise">
      <div className="ui raised card m-auto">
        <form action="POST">
          <div className="workout-type">
            <label for="type">Exercise Type:</label>
            <input type="exercise" className="form-control" name="exercise" list="exercises" id="exercise" placeholder="Bench Press" />
          <datalist id="exercises">
          { exercises.map(exercise => (
              <option value={exercise.fields.name}></option>
            ))}
          </datalist>
          </div>
            <div className="weight">
              <label for="weight">Weight (lbs):</label>
              <input type="number" name="weight" id="weight" placeholder="200" />
            </div>
            <div className="sets">
              <label for="sets">Sets:</label>
              <input type="number" name="sets" id="sets" placeholder="4" />
            </div>
            <div className="reps">
              <label for="reps">Reps:</label>
              <input type="number" name="reps" id="reps" placeholder="10" />
            </div>
            <div className="resistance-duration">
              <label for="resistance-duration">Duration (minutes):</label>
              <input type="number" name="resistance-duration" id="resistance-duration" placeholder="10" />
            
          </div>
          <div className="buttons">
            <button  className="huge ui positive button add-another">
              Add Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AddWorkout;
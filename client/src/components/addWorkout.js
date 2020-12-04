import React, { useContext } from "react";
import exercises from "../utils/exercises.json";
import WorkoutContext from "../utils/workoutContext";

function AddWorkout() {
  const {handleInputChange, handleAdd} = useContext(WorkoutContext);
  return (
    <div className="cards__item">
      <form>
        <p>
          <label>Workout Name </label>
          <input type="name" className="form-control" name="workout" id="name" placeholder="Monday" onChange={handleInputChange} />
        </p>
        <p>
          <label>Exercise </label>
          <input type="exercise" name="exercise" className="form-control" list="exercises" id="exercise" placeholder="Bench Press" onChange={handleInputChange} />
          <datalist id="exercises">
            { exercises.map(exercise => (
              <option value={exercise.fields.name} key={exercise.pk}></option>
            ))}
          </datalist>
        </p>
        <p>
          <label># Sets </label>
          <input type="sets" className="form-control"  name="sets" id="sets" placeholder="4" onChange={handleInputChange} />
        </p>
        <p>
          <label># Reps </label>
          <input type="reps" className="form-control"  name="reps" id="reps" placeholder="12" onChange={handleInputChange} />
        </p>
        <p>
          <label>Weight </label>
          <input type="weight" className="form-control"  name="weight" id="weight" placeholder="12" onChange={handleInputChange} />
        </p>
        <p>
          <label># Minutes </label>
          <input type="minutes" className="form-control"  name="duration" id="time" placeholder="15" onChange={handleInputChange} />
        </p>
        <p>
        <button onClick={handleAdd} >Add</button>
        </p>
      </form>
    </div>
  );
}

export default AddWorkout;
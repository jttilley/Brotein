import React from "react";
// import 


function NewWorkout() {
  return (
    <div className="cards__item">
      <form>
        <p>
          <label for="exercise">exercise</label>
          <input type="exercise" class="form-control" id="exercise" placeholder="Bench Press" />
          <datalist id="exercises">
            <option value="something"></option>
          </datalist>
  
        </p>
        <p>
          <label for="sets"># Sets</label>
          <input type="sets" class="form-control" id="sets" placeholder="4" />
        </p>
        <p>
          <label for="reps"># Reps</label>
          <input type="reps" class="form-control" id="reps" placeholder="12" />
        </p>
        <p>
          <label for="time"># Minutes</label>
          <input type="minutes" class="form-control" id="time" placeholder="15" />
        </p>

      </form>
    </div>
  );
}

export default NewWorkout;
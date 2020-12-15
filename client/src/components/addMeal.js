import React, { useContext } from "react";
import MealContext from "../utils/mealContext";
import "../css/main.css"
import FoodSelection from "./foodSelect";

function AddFood() {
  const { name, meal, mealRows, handleInputChange, handleAddMeal } = useContext(MealContext)

  // console.log('foods: ', foods[0]);

  return (
    <div className="card_item">
      <div className="meal-form">

        <form id="ad-form">
          <div className="workout-name">
            <input type="name" className="form-control" name="name" placeholder="Name this Meal" onChange={handleInputChange} />

          </div>
          <FoodSelection /> 
        </form>

      </div>
    </div>
  );
}

export default AddFood;
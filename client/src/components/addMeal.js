import React, { useContext } from "react";
import foods from "../utils/ingredients.json";

import MealContext from "../utils/mealContext";
import "../css/main.css"

function AddFood() {
  const { meal, mealRows, handleInputChange, handleAddMeal } = useContext(MealContext)

  // console.log('foods: ', foods[0]);

  return (
    <div className="card_item">
      <div className="meal-form">

        <form id="ad-form">
          <div className="workout-name">
            <input type="name" className="form-control" name="name" placeholder="Name this Meal" onChange={handleInputChange} />

          </div>
          <p>
            <input type="food" className="form-control" list="ingredients" id="food" placeholder="Select a food" name="food" value={meal.food} onChange={handleInputChange} />
            <datalist id="ingredients">
              {foods.map(food => (
                <option value={food.name} key={food.pk} ></option>
              ))}
            </datalist>
            <button className="food-button" onClick={handleAddMeal} >Add Food</button>
          </p>
        </form>

      </div>
    </div>
  );
}

export default AddFood;
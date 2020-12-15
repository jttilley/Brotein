import React, { useContext } from "react";
import foods from "../utils/ingredients.json";
import MealContext from "../utils/mealContext";
import "../css/main.css"

function FoodSelection() {
  const {meal, handleInputChange, handleAddMeal } = useContext(MealContext)

  return (
    <p>
      <input type="food" className="form-control" list="ingredients" id="food" placeholder="Select a food" name="food" onChange={handleInputChange}/>
      <datalist id="ingredients">
        {foods.map(food => (
          <option value={food} key={food} ></option>
        ))}
      </datalist>
      <button className="food-button" onClick={handleAddMeal} >Add Food</button>
    </p>

  )
}

export default FoodSelection;
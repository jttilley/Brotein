import React, { useContext } from "react";
import ingredients from "../utils/ingredients.json";
import MealContext from "../utils/mealContext";
import "../css/main.css"

function AddIngredient() {
  const { meal, mealRows, handleInputChange, handleAddMeal } = useContext(MealContext)
  // console.log('ingredients: ', ingredients);
  // console.log('ingredient.fields.name: ', ingredients[1].fields.name);
  return (
    <div className="cards__item">
      <form>
        <div className="workout-name">
          <input type="name" className="form-control" name="name" placeholder="Name this Meal" onChange={handleInputChange} />

        </div>
        <p>
          <input type="ingredient" className="form-control" list="ingredients" id="ingredient" placeholder="Add an Ingredient for your meal" name="ingredient" value={meal.ingredient} onChange={handleInputChange} />
          <datalist id="ingredients">
            {ingredients.map(ingredient => (
              <option value={ingredient.fields.name} key={ingredient.pk} ></option>
            ))}
          </datalist>
          <button onClick={handleAddMeal} >Add Ingredient</button>
        </p>
      </form>
    </div>
  );
}

export default AddIngredient;
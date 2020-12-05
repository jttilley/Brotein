import React, {useContext} from "react";
import ingredients from "../utils/ingredients.json";
import MealContext from "../utils/mealContext";

function AddIngredient() {
  const { meal, rows, handleInputChange, handleAdd } = useContext(MealContext)

  return (
    <div className="cards__item">
      <form>
      <div className="workout-name">
        <input type="text" className="form-control" name="name" placeholder="Name this Meal" /> 
        {/* onChange={handleInputChange} */}
      </div>
        <p>
          <input type="ingredient" className="form-control" list="ingredients" id="ingredient" placeholder="Add an Ingredient for your meal" name="ingredient" />
          <datalist id="ingredients">
            { ingredients.map(ingredient => (
              <option value={ingredient.fields.name} key={ingredient.fields.name} ></option>
            ))}
          </datalist>
          <button onClick={handleAdd} >Add Ingredient</button>
        </p>
      </form>
    </div>
  );
}

export default AddIngredient;
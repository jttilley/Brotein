import React from "react";
import ingredients from "../utils/ingredients.json";

function AddIngredient() {


  return (
    <div className="cards__item">
      <form>
      <div className="workout-name">
        <input type="text" className="form-control" name="name" placeholder="Name this Meal" /> 
        {/* onChange={handleInputChange} */}
      </div>
        <p>
          <input type="ingredient" class="form-control" list="ingredients" id="ingredient" placeholder="Add an Ingredient for your meal" name="ingredient" />
          <datalist id="ingredients">
            { ingredients.map(ingredient => (
              <option value={ingredient.fields.name}></option>
            ))}
          </datalist>
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}

export default AddIngredient;
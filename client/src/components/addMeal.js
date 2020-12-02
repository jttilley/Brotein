import React from "react";
import ingredients from "../utils/ingredients.json";

function AddIngredient() {
  return (
    <div className="cards__item">
      <form>
        <p>
          <label for="ingredient">Ingredient: </label>
          <input type="ingredient" class="form-control" list="ingredients" id="ingredient" placeholder="chicken breast" />
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
import React, { useState } from "react";
import RecipeDetails from "./recipe-details";
import "../css/main.css"

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;


  return (

    <div class='card-body'>
      <div className="recipe">
        <h2 class="card-read">{label}</h2>
        <span class="card-description subtle"></span>
        <a href={url}>
          <img src={image} alt={label} class="card-media" />
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          URL
      </a>

        <button class="collapsible" onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
        <div class="card-shadow"></div>
      </div>
    </div>
  );
};

export default Recipe;
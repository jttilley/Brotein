import React, { useState } from "react";
import RecipeDetails from "./recipe-details";
import "../css/main.css"

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  

  return (

    <div className='card-body'>
      <div className="recipe">
        <h2 className="card-read">{label}</h2>
        {/* <span className="card-description subtle"></span> */}
          <a href={url}>
            <img src={image} alt={label} class="card-media" />
          </a>
        <div className="recipe-buttons">
          <span>
            <a  className="collapsible" href={url} target="_blank" rel="noopener noreferrer">
              <div> See Recipe </div>
            </a>
          </span>

          <button className="collapsible" onClick={(e) => {
            e.preventDefault();
            setShow(!show)
          }}>Ingredients</button>
        </div>
        <div>
          {show && <RecipeDetails ingredients={ingredients} />}
        </div>
        <div className="card-shadow"></div>
      </div>
    </div>
  );
};

export default Recipe;
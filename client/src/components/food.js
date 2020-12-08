import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./recipe";
import Alert from "./alert";
import '../css/main.css';

function Food() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "48885148";
  const APP_KEY = "5d6732968fc7606b5e264b996eaecb2c" //process.env.FOODAPI_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="Search">
      {/* <h1>Find a Recipe</h1> */}
      <form onSubmit={onSubmit} className="yt-search">
        {alert !== "" && <Alert alert={alert} />}
        <input id="search-box"
          name="query"
          onChange={onChange}
          value={query}
          
          placeholder="Search Food" />
          <button>Search for Recipies</button>
        </form>
        <form method="get" action="">
        <div className="recipes">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </form>
    </div>
  );
}

export default Food;
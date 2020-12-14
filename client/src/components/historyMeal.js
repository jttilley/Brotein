import React, { useState, useEffect }  from 'react';
import API from '../utils/API';
import DeleteBtn from './deleteBtn';
import { List, ListItem } from './listItem';
import { Link } from "react-router-dom";
import Container from './grid';
import Row from './grid';
import Col from './grid';
import "../css/main.css";

function HistoryMeal () {
    const [ meals ,setMeal] = useState([])
    function getAllMeals() {
    API.getAllMeals()
        .then(res => {
          console.log('res.data: ', res.data);
          setMeal(res.data)
        })
        .catch(err => console.log(err));
    };
    function deleteMeal(id) {
    API.deleteMeal(id)
        .then(res => getAllMeals())
        .catch(err => console.log(err));
    }
    useEffect(() => {
      getAllMeals();
    }, [])
    return (
      <div>
        
        <h1>Previous meals</h1>
        {meals.length ? (
              <div className='card-body'>
              <div className="recipe">
                
                  {meals.map(meal => (
                    <ListItem key={meal._id}>
                        <div>
                          <br />
                          <br />
                          <strong>
                          <DeleteBtn onClick={() => deleteMeal(meal._id)} />
                          <h2 className="card-meal">{meal.name}</h2>  
                          <br />
                        {meal.meal.map(data => (
                          <span>
                                Food: {data.food}
                                <br />
                                Protein: {data.protein} grams
                                <br />
                                Carbs: {data.carbohydrates} grams
                                <br />
                                Fats: {data.fats} grams
                                <br />
                                Calories: {data.calories}
                                <br />
                          </span>
                        ))}
                        </strong>
                        </div>
                    </ListItem>
                  ))}
                <div className="card-shadow"></div>
                </div>
                </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>    
    )
}
export default HistoryMeal;
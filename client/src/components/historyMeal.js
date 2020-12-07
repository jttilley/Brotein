import { useState } from "react";
import React from 'react';
import API from '../utils/API';
import MealContex from '../utils/historyMealContex';
import DeleteBtn from './deleteBtn';
import Container from './grid';
import { List, ListItem } from './listItem';
import { Link } from "react-router-dom";

function HistoryMeal () {

    const [ meals ,setMeal] = useState([])

    function getAllMeals() {
    API.getAllMeals()
        .then(res => 
        setMeal(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteMeal(id) {
    API.deleteMeal(id)
        .then(res => getAllMeals())
        .catch(err => console.log(err));
    }
    



    return (
        
        <Container fluid>
        <h1>Previous meals</h1>
        {meals.length ? (
                <List>
                  {meals.map(meal => (
                    <ListItem key={meal._id}>
                      <Link to={"/history" + meal._id}>
                        <strong>
                          {meal.food} 
                          {meal.protien} 
                          {meal.carbohydrates} 
                          {meal.fats} 
                          {meal.calories} 
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteMeal(meal._id)} />
                    </ListItem>
                  ))}
                </List>
            ) : (
              <h3>No Results to Display</h3>
            )}     
        </Container>    
        

    )
}

export default HistoryMeal;
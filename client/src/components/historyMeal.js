import React, { useState, useEffect }  from 'react';
import API from '../utils/API';
import DeleteBtn from './deleteBtn';
import { List, ListItem } from './listItem';
import { Link } from "react-router-dom";


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
                <List>
                  {meals.map(meal => (
                    <ListItem key={meal._id}>
                        <div>
                          <br />
                          <br />
                          <strong>
                          <DeleteBtn onClick={() => deleteMeal(meal._id)} />
                          Meal Name: {meal.name}
                          <br />
                        {meal.meal.map(data => (
                          <span>
                                Food: {data.food}
                                <br />
                                Protein: {data.protein}
                                <br />
                                Carbs: {data.carbohydrates}
                                <br />
                                Fats: {data.fats}
                                <br />
                                Calories: {data.calories}
                                <br />
                          </span>
                        ))}
                        </strong>
                        </div>
                    </ListItem>
                  ))}
                </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    )
}
export default HistoryMeal;
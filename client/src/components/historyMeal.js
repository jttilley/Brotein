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
                      {/* <Link to={"/history" + meal._id}> */}
                        {meal.meal.map(data => (
                          <div>
                            <strong>
                                {data.food} 
                                {data.protein} 
                                {data.carbohydrates} 
                                {data.fats} 
                                {data.calories} 
                            </strong>
                      <DeleteBtn onClick={() => deleteMeal(meal._id)} />
                      {/* </Link> */}
                          </div>
                        ))}
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
import React, { useState } from 'react';
import { json } from 'sequelize/types';
import '../App.css';
import AddIngredient from '../components/addMeal';
import MealTable from '../components/mealTable';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';
import API from '../utils/API';


const curRows = [];

function NewMealPage() {
    let [meal, setMeal] = useState({
        name:'',
        ingredient: '',
        protein: '',
        carbohydrates: '',
        fats: '',
        calories: ''
    });
    
    let [mealRows, setMealRows] = useState([]);

    const getIngredientDetails = (ingredient) => {
        API.getIngredientData(ingredient).then(data => {
            return json(data);
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);
        if (name === "ingredient") {
            const food = getIngredientDetails(value);
        }

        setMeal({...meal, [name]: value});
        console.log('meal: ', meal);
    }

    const handleAdd = (event) => {
        event.preventDefault()
        // curRows.push(newWorkout);
        console.log('curRows: ', curRows);
        setMealRows(curRows);
        setMeal();
        
        // API.postWorkout(newWorkout).then(() => {
        //     //add exercise to workout card
        //     rows.push(createData(newWorkout));
        // }).catch((error) => {
        //     console.log(error);
        // });
    }

    function createData( { name, food, calories, protien, carbohydrates, fats } ) {
        return { name, food, calories, protien, carbohydrates, fats };
    }
    return (
        <div>
            <Navbar />
            <NewMealBanner />
            <AddIngredient />
            <MealTable />
        </div>

    );
};
export default NewMealPage;
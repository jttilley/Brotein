import React, { useEffect, useState } from 'react';
import '../App.css';
import AddIngredient from '../components/addMeal';
import MealTable from '../components/mealTable';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';
import API from '../utils/API';
import MealContext from '../utils/mealContext';

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

    useEffect(() => {

    },[])

    const getIngredientDetails = (ingredient, cb) => {
        API.getIngredientData(ingredient).then(({ data }) => {
            console.log('data.results: ', data.results[0]);
            if (data.results[0]) {
                const { protein, carbohydrates, fat, energy } = data.results[0];
                setMeal = {
                    name: meal.name,
                    ingredient: ingredient,
                    protein: protein,
                    carbohydrates: carbohydrates,
                    fats: fat,
                    calories: energy
                }
                cb();
            }
            // return json(data);
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);

        setMeal({...meal, [name]: value});
        console.log('meal: ', meal);
    }

    // const updateTable

    const handleAddMeal = (event) => {
        event.preventDefault()
        console.log('in handleAdd for new-meal page'); 
        if (meal.ingredient != "") {
            const food = getIngredientDetails(meal.ingredient);
        }
        const newMeal = createData(meal);
        curRows.push(newMeal);
        // console.log('curRows: ', curRows);
        setMealRows(curRows);
        // setMeal();
        
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
        <MealContext.Provider value={{
            meal,
            mealRows,
            handleInputChange,
            handleAddMeal
        }}>
            <div>
                <Navbar />
                <NewMealBanner />
                <AddIngredient />
                <MealTable />
            </div>
        </MealContext.Provider>

    );
};
export default NewMealPage;
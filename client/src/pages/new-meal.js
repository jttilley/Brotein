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
        protein: 0,
        carbohydrates: 0,
        fats: 0,
        calories: 0
    });
    
    let [mealTotals, setMealTotals] = useState({
        proTotal: 0,
        carbTotal: 0,
        fatTotal: 0,
        calTotal: 0
    });

    let [mealRows, setMealRows] = useState([]);

    useEffect(() => {
        if (meal.calories > 0) {
            updateTable();
        }
    },[meal])


    const updateTable = () => {
        console.log('meal: ', meal);
        curRows.push(meal);
        console.log('curRows: ', curRows);
        setMealRows(curRows);
        setMeal({
            name: meal.name,
            ingredient: '',
            protein: 0,
            carbohydrates: 0,
            fats: 0,
            calories: 0
        });
        
        let proTotal = 0;
        let carbTotal = 0;
        let fatTotal = 0;
        let calTotal = 0;

        curRows.forEach(row => {
            proTotal += parseFloat(row.protein);
            carbTotal += parseFloat(row.carbohydrates);
            fatTotal += parseFloat(row.fats);
            calTotal += parseFloat(row.calories);
        });

        setMealTotals({
            protein: proTotal,
            carbohydrates: carbTotal,
            fats: fatTotal,
            calories: calTotal
        })
        console.log('mealTotals: ', mealTotals);


        // API.postWorkout(newWorkout).then(() => {
        //     //add exercise to workout card
        //     rows.push(createData(newWorkout));
        // }).catch((error) => {
        //     console.log(error);
        // });
    }

    const getIngredientDetails = (ingredient) => {
        API.getIngredientData(ingredient).then(({ data }) => {
            console.log('data.results: ', data.results[0]);
            if (data.results[0]) {
                const { protein, carbohydrates, fat, energy } = data.results[0];
                console.log('energy: ', energy);
                console.log('fat: ', fat);
                console.log('carbohydrates: ', carbohydrates);
                console.log('protein: ', protein);

                setMeal({
                    name: meal.name,
                    ingredient: ingredient,
                    protein: protein,
                    carbohydrates: carbohydrates,
                    fats: fat,
                    calories: energy
                });
            }
        });
    }

    const handleAddMeal = (event) => {
        event.preventDefault()
        console.log('in handleAdd for new-meal page'); 
        if (meal.ingredient != "") {
            getIngredientDetails(meal.ingredient);
        }
        
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);

        setMeal({...meal, [name]: value});
        console.log('meal: ', meal);
    }

    function createData( { name, ingredient, calories, protien, carbohydrates, fats } ) {
        return { name, ingredient, calories, protien, carbohydrates, fats };
    }

    return (
        <MealContext.Provider value={{
            meal,
            mealRows,
            mealTotals,
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
import React, { useEffect, useState } from 'react';
import '../App.css';
import AddFood from '../components/addMeal';
import MealTable from '../components/mealTable';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';
import API from '../utils/API';
import MealContext from '../utils/mealContext';

const curRows = [];

function NewMealPage() {
    let [meal, setMeal] = useState({
        name:'',
        food: '',
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
        // update local rows array and update mealRows with it
        curRows.push(meal);

        //calculate totals
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

        //set totals
        setMealTotals({
            protein: Math.round(proTotal*1000)/1000,
            carbohydrates: Math.round(carbTotal*1000)/1000,
            fats: Math.round(fatTotal*1000)/1000,
            calories: Math.round(calTotal*1000)/1000
        })
        // console.log('mealTotals: ', mealTotals);
        const body = 

        API.postMeal(body).then(() => {

            setMealRows(curRows);
         //clear out meal data except for meal name
            setMeal({
                name: meal.name,
                food: '',
                protein: 0,
                carbohydrates: 0,
                fats: 0,
                calories: 0
            });
        
               
        // }).catch((error) => {
        //     console.log(error);
        // });
        })
    }
    
    const getFoodDetails = (food) => {
        API.getFoodData(food).then(({ data }) => {
            // console.log('data.results: ', data.results[0]);
            if (data.results[0]) {
                const { protein, carbohydrates, fat, energy } = data.results[0];
                // console.log('energy: ', energy);
                // console.log('fat: ', fat);
                // console.log('carbohydrates: ', carbohydrates);
                // console.log('protein: ', protein);

                setMeal({
                    name: meal.name,
                    food: food,
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
        // console.log('in handleAdd for new-meal page'); 
        if (meal.food != "") {
            getFoodDetails(meal.food);
        }
        
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log('value: ', value);
        // console.log('name: ', name);

        setMeal({...meal, [name]: value});
        // console.log('meal: ', meal);
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
                <AddFood />
                <MealTable />
            </div>
        </MealContext.Provider>

    );
};
export default NewMealPage;
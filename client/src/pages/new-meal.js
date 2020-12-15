import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import AddFood from '../components/addMeal';
import MealTable from '../components/mealTable';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';
import API from '../utils/API';
import MealContext from '../utils/mealContext';

let curRows = [];
let curName = "";
let curFood = "";

function NewMealPage() {

    let [name, setName] = useState("");
    let [meal, setMeal] = useState({
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
            updateDB();
        }
    },[meal])

    const cleanUpStates = () => {
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
    }

    const updateTable = () => {
        // update local rows array and update mealRows with it
        curRows.push(meal);

        //initialize totals
        let proTotal = 0;
        let carbTotal = 0;
        let fatTotal = 0;
        let calTotal = 0;

        //calculate totals
        curRows.forEach(row => {
            proTotal += parseFloat(row.protein);
            carbTotal += parseFloat(row.carbohydrates);
            fatTotal += parseFloat(row.fats);
            calTotal += parseFloat(row.calories);
        });

        //set totals
        setMealTotals({
            proTotal: Math.round(proTotal*1000)/1000,
            carbTotal: Math.round(carbTotal*1000)/1000,
            fatTotal: Math.round(fatTotal*1000)/1000,
            calTotal: Math.round(calTotal*1000)/1000
        })
    }

    const updateDB = () => {
        const {name, food, calories, protein, carbohydrates, fats} = meal;

        curRows = [];
        // console.log('mealTotals: ', mealTotals);
        //check if meal name already exists
        API.getMealByName(name).then((res) => {
            console.log('res: ', res);
            if (res.data) {
                console.log('res.data: ', res.data);
                //name was found so just add the food
                // setMeal({...meal, id: res.data._id})
                console.log('name was found: ', name);

                res.data.meal.forEach(item => {
                    curRows.push(item);
                });

                updateTable();

                const body = {
                    meal: {
                        food: food,
                        calories: calories,
                        protein: protein,
                        fats: fats,
                        carbohydrates: carbohydrates
                    }
                }
                
                API.addFood(name, body).then(() => {
                    cleanUpStates();
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                updateTable();

                // name is not found so create new meal
                console.log('name is not found so create new meal: ', name);
                
                const body = {
                    name: name,
                    meal: [{
                        food: food,
                        calories: calories,
                        protein: protein,
                        fats: fats,
                        carbohydrates: carbohydrates
                    }]
                }

                console.log('body: ', body);
                API.postMeal(body).then(() => {
                    cleanUpStates();
                }).catch((err) => {
                    console.log('err: ', err);
                });
            }
        }).catch((err) => {
            console.log('err: ', err);
        });
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

        console.log("🚀 ~ file: new-meal.js ~ line 173 ~ handleAddMeal ~ curName", curName)
        console.log("🚀 ~ file: new-meal.js ~ line 173 ~ handleAddMeal ~ curFood", curFood)
        
        setName(curName);
        
        // console.log('in handleAdd for new-meal page'); 
        if (curFood !== "") {
            getFoodDetails(curFood);
        }
        
    }
    
    

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        console.log('value: ', value);
        console.log('name: ', name);
        
        // title case the meal name 
        if (name === "name") {
            value = value.split(' ')
            .map(w => {
                if (w !== "") {
                    return w[0].toUpperCase() + w.substr(1).toLowerCase();
                }
            })
            .join(' ')
            curName = value;
        } else {
            curFood = value;
            // console.log('meal: ', meal);
        }
    }

    return (
        <MealContext.Provider value={{
            name,
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
}

export default NewMealPage;
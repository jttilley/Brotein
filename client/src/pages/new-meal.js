import React from 'react';
import '../App.css';
import AddIngredient from '../components/addMeal';
import MealTable from '../components/mealTable';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';



function NewMealPage() {

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
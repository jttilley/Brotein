import React from 'react';
import '../App.css';
import AddIngredient from '../components/addMeal';
import Navbar from '../components/navbar';
import NewMealBanner from '../components/newMealBanner';



function NewMealPage() {

    return (
        <div>
            <Navbar />
            <NewMealBanner />
            <AddIngredient />
        </div>

    );
};
export default NewMealPage;
const mongoose = require('mongoose'); 
const Workouts = require('../models/workouts'); 
const Meals = require('../models/meals'); 

// This file empties the Posts collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-auth-hooks");

const workout1 = new Workouts({
    exercise: 'Weight Lifting', 
    sets: 20, 
    reps: 2, 
    weight: 50, 
    duration: 20, 
    body: 'Workout1'
}); 
console.log(workout1); 

workout1.save(function (err, workout1){
    if (err) return console.error(err); 
}); 

const meal1 = new Meals({
    food: 'fish', 
    protein: 20,
    carbohydrates: 10,
    fats: 2,
    calories: 15, 
    body: 'Meal1'
}); 

console.log(meal1); 
    if (err) return console.error(err); 

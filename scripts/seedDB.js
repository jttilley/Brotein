const mongoose = require('mongoose'); 
const db = require('../models'); 


// This file empties the collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Brotein");

const workout1 = [{
    exercise: 'Weight Lifting', 
    sets: 20, 
    reps: 2, 
    weight: 50, 
    duration: 20, 
    body: 'Workout1'
}]
console.log(workout1); 

db.Workouts.deleteMany({})
  .then(() => db.Workouts.collection.insertMany(workout1))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const meal1 = [{
    food: 'fish', 
    protein: 20,
    carbohydrates: 10,
    fats: 2,
    calories: 15, 
    body: 'Meal1'
}]
console.log(meal1); 

db.Meals.deleteMany({})
  .then(() => db.Meals.collection.insertMany(meal1))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

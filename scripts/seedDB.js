const mongoose = require('mongoose'); 
const db = require('../models'); 


// This file empties the collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Brotein");

const workout1 = [
  {
    name: "Day 1", 
    workout: [
      {
        exercise: 'Weight Lifting', 
        sets: 20, 
        reps: 2, 
        weight: 50, 
        duration: 20, 
        // body: 'Workout1'
      }
    ]
  }, 

  {
    name: "Day 2", 
    workout: [
      {
        exercise: 'Leg Lifting', 
        sets: 20, 
        reps: 4, 
        weight: 25, 
        duration: 20, 
        // body: 'Workout2'
      }
    ]
  }, 
  {
    name: "Day 3", 
    workout: [
      {
        exercise: 'Arms', 
        sets: 20, 
        reps: 4, 
        weight: 20, 
        duration: 20, 
        // body: 'Workout3'
      }
    ]
  },
]; 
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

const meal1 = [
  {
    food: 'fish', 
    protein: 20,
    carbohydrates: 5,
    fats: 2,
    calories: 100, 
    // body: 'Meal1'
  }, 
  {
    food: 'steak', 
    protein: 30,
    carbohydrates: 10,
    fats: 10,
    calories: 200
  }, 
  {
    food: 'chicken', 
    protein: 10,
    carbohydrates: 10,
    fats: 2,
    calories: 150
  }
]
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

const user1 = [
  {
  email: "test@test.com",
  fullname: 'test', 
  username: 'test', 
  password: 'test', 
  admin: 0,
  }, 
  {
  email: "test@test2.com",
  fullname: 'test2name', 
  username: 'test2username', 
  password: 'test2password', 
  admin: 0
  }, 
  {
  email: "test@test3.com",
  fullname: 'test3name', 
  username: 'test3username', 
  password: 'test3password', 
  admin: 0
  }
]
console.log(user1); 

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(user1))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

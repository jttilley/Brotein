const mongoose = require('mongoose'); 
const db = require('../models'); 
// const ingList = require('../client/src/utils/ingredients.json');

// console.log('ingList: ', ingList);
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
    name: "breakfast",
    meal: [{
      food: 'fish', 
      protein: 20,
      carbohydrates: 5,
      fats: 2,
      calories: 100
    }]
  }, 
  {
    name: "lunch",
    meal: [{
      food: 'steak', 
      protein: 30,
      carbohydrates: 10,
      fats: 10,
      calories: 200
    }]
  }, 
  {
    name: "dinner",
    meal: [{
      food: 'chicken', 
      protein: 10,
      carbohydrates: 10,
      fats: 2,
      calories: 150
    }]
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


  const users = [
    {
      admin : false,
      meals : [],
      workouts : [],
      fullname : "tom",
      username : "tomjoe",
      password : "$2a$10$T/zP4O0r4MpEkTDgohM3cOtoE2qqBGE9p4rvRP8GYHiylhMFe/2mq"
    }
  ]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(users))
  .then(data => {
    console.log("Cleared users!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Ingredients.collection.insertMany(ingList)
//   .then(data => {
//     console.log('data: ', data);
//     // console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  const Meal = new Schema({
    
    food: {
      type: String,
      trim: true
    },

    protein: {
      type: Number
    },
  
    carbohydrates: {
      type: Number
    },
  
    fats: {
      type: Number,
    }, 

    calories: {
      type: Number,
    }
  });
  
  const Meals = mongoose.model("Meal", Meal);
  
  module.exports = Meals;
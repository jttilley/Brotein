  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
  
  const mealSchema = new Schema({
    food: {type: String},
    protein: {type: Number},
    carbohydrates: {type: Number},
    fats: {type: Number}, 
    calories: {type: Number}, 
    body: {type:String}, 
  });
  
  const Meals = mongoose.model('Meals', mealSchema);
 
  module.exports = Meals;
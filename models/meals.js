  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  const mealSchema = new Schema({
    name: {type: String},
    meal: [{
      food: {type: String},
      protein: {type: Number},
      carbohydrates: {type: Number},
      fats: {type: Number}, 
      calories: {type: Number}
    }]
  });
  
  const Meals = mongoose.model('Meals', mealSchema);

  module.exports = Meals;
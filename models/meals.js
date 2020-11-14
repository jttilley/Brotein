// creating table for meals page and exporting in form of a function for later use 

module.exports = function(sequelize, FoodTypes) {
    const Meal = sequelize.define("meal", {
      food: {
        type: FoodTypes.STRING
      },
      protein: {
        type: FoodTypes.NUMBER
      },
      carbohydrates: {
        type: FoodTypes.NUMBER
      },
      fats: {
        type: FoodTypes.NUMBER
      },
      calories: {
          type: FoodTypes.NUMBER
      }
    });
    return Meal;
  };
  
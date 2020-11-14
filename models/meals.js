// create meals table ---exporting in form of a function for later use 
module.exports = function(sequelize, nutrition) {
    const Meal = sequelize.define("meal", {
      food: {
        type: nutrion.STRING
      },
      protein: {
        type: nutrition.NUMBER
      },
      carbohydrates: {
        type: nutrition.NUMBER
      },
      fats: {
        type: nutrition.NUMBER
      },
      calories: {
          type: nutrition.NUMBER
      }
    });
    return Meal;
  };
  
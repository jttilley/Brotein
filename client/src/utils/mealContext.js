import React, { createContext } from 'react';

const MealContext = createContext({
  name: "",
  meal: {},
  mealTotals: {},
  mealRows: [],
  handleInputChange: () => {},
  handleAddMeal: () => {}
})

export default MealContext;
import React, { createContext } from 'react';

const MealContext = createContext({
  meal: {},
  mealTotals: {},
  mealRows: [],
  handleInputChange: () => {},
  handleAddMeal: () => {}
})

export default MealContext;
import React, { createContext } from 'react';

const MealContext = createContext({
  meal: {},
  mealRows: [],
  handleInputChange: () => {},
  handleAddMeal: () => {}
})

export default MealContext;
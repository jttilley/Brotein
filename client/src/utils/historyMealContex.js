import React, { createContext } from 'react';

const MealContext = createContext({
  meal: {},
  mealRows: [],
  getAllMeals: () => {},
  deleteMeals: () => {}
})

export default MealContext;
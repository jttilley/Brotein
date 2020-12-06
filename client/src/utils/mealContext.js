import React, { createContext } from 'react';

const MealContext = createContext({
  meal: {},
  mealRows: [],
  handleInputChange: () => {},
  handleAdd: () => {}
})

export default MealContext;
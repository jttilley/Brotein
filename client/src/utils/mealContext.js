import React, { createContext } from 'react';

const MealContext = createContext({
  meal: {},
  rows: [],
  handleInputChange: () => {},
  handleAdd: () => {}
})

export default MealContext;
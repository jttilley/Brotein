import React, { createContext } from 'react';

const WorkoutContext = createContext({
  workout: {},
  rows: [],
  handleInputChange: () => {},
  handleAdd: () => {}
})

export default WorkoutContext;
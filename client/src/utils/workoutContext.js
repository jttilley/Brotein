import React, { createContext } from 'react';

const WorkoutContext = createContext({
  workout: {},
  handleInputChange: () => {},
  handleAdd: () => {}
})

export default WorkoutContext;
import React, { createContext } from 'react';

const WorkoutContext = createContext({
  workout: {},
  rows: [],
  handleInputChange: () => {},
  handleAddWorkout: () => {}
})

export default WorkoutContext;
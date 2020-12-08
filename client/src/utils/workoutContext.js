import React, { createContext } from 'react';

const WorkoutContext = createContext({
  workout: {},
  rows: [],
  workoutTotals: {},
  handleInputChange: () => {},
  handleAddWorkout: () => {}
})

export default WorkoutContext;
import React, { createContext } from 'react';

const HealthContext = createContext({
  workout: {},
  rows: [],
  getAllWorkouts: () => {},
  deleteWorkout: () => {},
  updateWorkout: () => {}
})

export default HealthContext;
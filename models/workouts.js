  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
    
  const Workout = new Schema({
      
    exercise: {
      type: String
    },
  
    sets: {
      type: Number
    },
    
    reps: {
      type: Number
    },
    
    weights: {
      type: Number,
    }, 
  
    duration: {
      type: Number,
    }
  });
    
  const Workouts = mongoose.model("Workout", Workout);
    
  module.exports = Workouts;

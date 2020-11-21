  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
    
  const workoutSchema = new Schema({
    exercise: {type: String},
    sets: {type: Number},
    reps: {type: Number},
    weight: {type: Number}, 
    duration: {type: Number}, 
    body: {type: String}
  });
    
  const Workouts = mongoose.model("Workouts", workoutSchema);
    
  module.exports = Workouts;

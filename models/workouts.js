  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
    
  const workoutSchema = new Schema({
    userId: { 
      type: Schema.Types.ObjectId,
    },
    name: {type: String},
    workout: [{
      exercise: {type: String},
      sets: {type: Number},
      reps: {type: Number},
      weight: {type: Number}, 
      duration: {type: Number}, 
    }]
  });
    
  const Workouts = mongoose.model("Workouts", workoutSchema);
    
  module.exports = Workouts;

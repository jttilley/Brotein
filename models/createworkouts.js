// creating table for Create Workout page and exporting in form of a function for later use 

module.exports = function(sequelize, DataTypes) {
    const CreateWorkout = sequelize.define("CreateWorkout", {
      lift: {
        type: DataTypes.STRING
      },
      setS: {
        type: DataTypes.NUMBER
      },
      reps: {
        type: DataTypes.NUMBER
      },
      weights: {
        type: DataTypes.NUMBER
      },
    });
    return CreateWorkout;
  };
  
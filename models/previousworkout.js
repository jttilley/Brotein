// creating table for Create Workout page and exporting in form of a function for later use 

module.exports = function(sequelize, DataTypes) {
    const PreviousWorkout = sequelize.define("PreviousWorkout", {
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
    PreviousWorkout.associate = function(workout) {
        PreviousWorkout.belongsTo(workout.CreateWorkout, {
          foreignKey: {
            allowNull: false
          }
        });
      return PreviousWorkout;
  }};

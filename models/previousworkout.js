// create previous workout table --- exporting in form of a function for later use 

module.exports = function(sequelize, previous) {
    const PreviousWorkout = sequelize.define("PreviousWorkout", {
      workout: {
        type: previous.BOOLEAN
      },
      lift: {
        type: previous.STRING
      },
      setS: {
        type: previous.NUMBER
      },
      reps: {
        type: previous.NUMBER
      },
      weights: {
        type: previous.NUMBER
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

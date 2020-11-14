// create workout table---exporting in form of a function for later use 
module.exports = function(sequelize, types) {
    const CreateWorkout = sequelize.define("CreateWorkout", {
      exercise: {
        type: types.STRING
      },
      sets: {
        type: types.NUMBER
      },
      reps: {
        type: types.NUMBER
      },
      weights: {
        type: types.NUMBER
      },
      time: {
          type: types.NUMBER
      }
    });

    CreateWorkout.associate = function(data) {
        CreateWorkout.belongsTo(data.Users, {
          foreignKey: {
            allowNull: false
          }
        });
    return CreateWorkout;
    }};

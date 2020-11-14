// create workout table---exporting in form of a function for later use 
module.exports = function(sequelize, types) {
    const CreateWorkout = sequelize.define("CreateWorkout", {
      lift: {
        type: types.STRING
      },
      setS: {
        type: types.NUMBER
      },
      reps: {
        type: types.NUMBER
      },
      weights: {
        type: types.NUMBER
      },
    });

    CreateWorkout.associate = function(data) {
        CreateWorkout.belongsTo(data.Users, {
          foreignKey: {
            allowNull: false
          }
        });
    return CreateWorkout;
    }};

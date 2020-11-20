
module.exports = function (app) {

  // get all workouts
  app.get('/api/new/workouts', function (req, res) {
    console.log('Getting workouts');
  });

  // get all meals
  app.get('/api/new/meals', function (req, res) {
    console.log('Getting meals');
  });

  // get a workout
  app.get('/api/workout/:id', function (req, res) {
    console.log(req.params.id);
  });

  // get a meal
  app.get('/api/meal/:id', function (req, res) {
    console.log(req.params.id);
  });

  // add a workout
  app.post('/api/workout', function (req, res) {
    console.log(req.body);
  });

  // add a meal
  app.post('/api/meal', function (req, res) {
    console.log(req.body);
  });
}


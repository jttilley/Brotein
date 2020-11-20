
const mongoose = require('mongoose'); 
const db = require('../models'); 
const index = require('')

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

////////////////////////////////////////////////////////////////////////////////////////////////

  // get a meal 
  app.get("/api/meal/:id", (req, res) => {
    db.Meals.findOne({
      where: {
        UsersId: req.users.id 
      } 
    })
    .then(findMeal => {
      res.send(findMeal); 
    })
    .catch(err => {
      res.send(err); 
      console.log(err); 
    })
  });

  // get a workout 
  app.get("/api/workouts/:id", (req, res) => {
    db.Workouts.findOne({
      where: {
        UsersId: req.users.id
      }
    }) 
    .then(findWorkout => {
      res.send(findWorkout); 
    })
    .catch(err => {
      res.send(err); 
      console.log(err); 
    });
  });

  // get all meals 
  app.get("/api/allmeals/:id", (req, res) => {
    db.Meals.findAll({
      where: {
        UsersId: req.users.id 
      } 
    })
    .then(findAll => {
      res.send(findAll); 
    })
    .catch(err => {
      res.send(err); 
      console.log(err); 
    })
  });

  // get all workouts 
  app.get("/api/allworkouts/:id", (req, res) => {
    db.Workouts.findAll({
      where: {
        UserId: req.user.id 
      } 
    })
    .then(findAll => {
      res.send(findAll); 
    })
    .catch(err => {
      res.send(err); 
      console.log(err); 
    })
  });

  // add a meal 
  app.post("/api/meals/submit", (req, res) => {
    db.Meals.create({
      food: req.body.food, 
      protein: req.body.protein, 
      carbohydrates: req.body.carbohydrates, 
      fats: req.body.fats, 
      calories: req.body.calories
    })
      .then(addMeal => {
        res.send(addMeal);
      })
      .catch(err => {
        res.send(err);
      });
  });

  // add a workout 
  app.post("/api/workout/submit", (req, res) => {
    db.Workouts.create({
      exercise: req.body.exercise, 
      sets: req.body.sets, 
      reps: req.body.reps, 
      weight: req.body.weight, 
      duration: req.body.duration
    })
      .then(addWorkout => {
        res.send(addWorkout);
      })
      .catch(err => {
        res.send(err);
      });
  });

 // route to sign up a user 
  app.post("/api/signup", (req, res) => {
    db.Users.create({
      firstname: req.body.firstname, 
      lastname: req.body.lastname, 
      email: req.body.email,
      username: req.body.username,
      password: req.body.password, 
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
});

// Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", (req, res) => {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
}

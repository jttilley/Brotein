
// requiring our dependencies 
const mongoose = require('mongoose'); 
const db = require('../../models'); 
const passport = require('../../config/passport');
const path = require('path');
const mongojs = require("mongojs");

module.exports = function (app) {

//////////////////////////////////////////////////////// API "GET" ROUTES  //////////////////////////////////////////////////////// 

  // get a meal 
  app.get('/api/meal/:id', (req, res) => {
    db.Meals.findOne(
      {
        _id: mongojs.ObjectId(req.params.id) 
      },  
      (error, data) => {
        if (error) {
          res.send(error); 
        } else {
          res.send(data)
        }
      }
    ); 
  });

  // get a workout 
  app.get('/api/workout/:id', (req, res) => {
    db.Workouts.findOne(
      {
        _id: mongojs.ObjectId(req.params.id) 
      }, 
      (error, data) => {
        if (error) {
          res.send(error); 
        } else {
          res.send(data)
        }
      }
    );
  });
//////////////////////////////////////////////////////// API "GET ALL" ROUTES  //////////////////////////////////////////////////////// 

  // get all meals 
  app.get('/api/allmeals/:id', (req, res) => {
    db.Meals.findAll({
      where: {
        UsersId: req.users.id  /////////////// do we need to  use req.params.id? 
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
  app.get('/api/allworkouts/:id', (req, res) => {
    db.Workouts.findAll({
      where: {
        UserId: req.user.id /////////////// do we need to  use req.params.id? 
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
//////////////////////////////////////////////////////// API "POST/ADD" ROUTES  //////////////////////////////////////////////////////// 

  // add a meal 
  app.post('/api/meal/submit', (req, res) => {
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
  app.post('/api/workout/submit', (req, res) => {
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
//////////////////////////////////////////////////////// API "POST/UPDATE" ROUTES  //////////////////////////////////////////////////////// 
app.post('/api/updateworkout/:id', (req, res) => {
  db.Workouts.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        exercise: req.body.exercise,
        sets: req.body.sets,
        reps: req.body.reps, 
        weight: req.body.weight, 
        duration: req.body.duration,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post('/api/updatemeals/:id', (req, res) => {
  db.Meals.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        food: req.body.food,
        protein: req.body.protein,
        carbohydrates: req.body.carbohydrates, 
        fats: req.body.fats, 
        calories: req.body.calories,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

//////////////////////////////////////////////////////// API "DELETE" ROUTES  //////////////////////////////////////////////////////// 

app.delete('/delete/workout/:id', (req, res) => {
  db.Workouts.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete('/delete/meals/:id', (req, res) => {
  db.Meals.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete('/clearall/workouts', (req, res) => {
  db.Workouts.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

app.delete('/clearall/meals', (req, res) => {
  db.Meals.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

//////////////////////////////////////////////////////// USER SIGN-UP/LOG-IN ROUTES //////////////////////////////////////////////////////// 

// Using passport.authenticate middleware with  local strategy, if user has valid login credentials, send them to the members page otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });


 // route to sign up a user 
  app.post('/api/signup', (req, res) => {
    db.Users.create({
      firstname: req.body.firstname, 
      lastname: req.body.lastname, 
      email: req.body.email,
      username: req.body.username,
      password: req.body.password, 
    })
      .then(() => {
        res.redirect(307, '/api/login');
      })
      .catch(err => {
        res.status(401).json(err);
      });
});

// route for logging out the user 
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/");
  });

// route for getting data about our user to be used client side
  app.get('/api/user_data', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
})}; 

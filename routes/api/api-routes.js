
// requiring dependencies 
const mongoose = require('mongoose'); 
const db = require('../../models'); 
const passport = require('../../config/passport');
const mongojs = require("mongojs");


// const express = require('express');
// const router = express.Router();

module.exports = function (app) {

//////////////////////////////////////////////////////// API "GET" ROUTES  //////////////////////////////////////////////////////// 
 


  // get a meal // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
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

  // get a workout // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
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

  // get all meals // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
  app.get('/api/allmeals', (req, res) => {
    db.Meals.find({}, (error, data) =>{
      if (error) {
        res.send(error); 
      } else {
        res.json(data); 
      }
    })
  });

  // get all workouts // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
  app.get('/api/allworkouts', (req, res) => {
    db.Workouts.find({}, (error, data) =>{
      if (error) {
        res.send(error); 
      } else {
        res.json(data); 
      }
    })
  });
//////////////////////////////////////////////////////// API "POST/ADD" ROUTES  //////////////////////////////////////////////////////// 

  // add a meal // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
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

  // add a workout // API TESTED AND SUCCESSFULLY RETURNING KEY/VALUES
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

// API TESTED AND SUCCESSFULLY RETURNING UPDATED KEY/VALUES
app.put('/api/updateworkout/:id', (req, res) => {
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


// API TESTED AND SUCCESSFULLY RETURNING UPDATED KEY/VALUES
app.put('/api/updatemeals/:id', (req, res) => {
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

/////////////////// API TESTED SUCCESSFULLY ///////////////////////////
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

/////////////////// API TESTED SUCCESSFULLY ///////////////////////////
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

/////////////////// API TESTED SUCCESSFULLY ///////////////////////////
app.delete('/clearall/workouts', (req, res) => {
  db.Workouts.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

/////////////////// API TESTED SUCCESSFULLY ///////////////////////////
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
  
// If the user already has an account send them to the home page

app.get("/", (req, res) => {
  console.log("test")

  if (req.username) {
    res.redirect('/home');
    } else {
      console.log("test")
  res.redirect('https://google.com');
  }
}); 

// route to sign in user 
app.post('/sign-in', passport.authenticate('local'), (req, res) => {
  res.json({
    username: req.user.username,
    id: req.user.id
  });


// route to sign up a user 
  app.post('/sign-up', (req, res) => {
    db.User.create({
      fullname: req.body.fullname, 
      username: req.body.username,
      password: req.body.password 
    })
      .then(() => {
        res.redirect(307, '/sign-in');
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

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
})}; 


// // add this in 
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');

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

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}


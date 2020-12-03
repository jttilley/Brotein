// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');

module.exports = function (app) {

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


// get all workouts 
    app.get('/api/allworkouts', (req, res) => {
        db.Workouts.find({}, (error, data) =>{
        if (error) {
            res.send(error); 
        } else {
            res.json(data); 
        }
        })
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

// update a workout 
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

// delete a workout 
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


// delete all workouts 
    app.delete('/clearall/workouts', (req, res) => {
     db.Workouts.remove({}, (error, response) => {
        if (error) {
         res.send(error);
        } else {
          res.send(response);
        }
      });
    });
};
// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');

module.exports = function (app) {

// get a workout 
    router.get('/api/workouts/:id', (req, res) => {
        db.Workouts.findOne(
            {
                _id: mongojs.ObjectID(req.params.id)
            }, 
            (error, data) => {
                if(error) {
                    res.send(error); 
                } else {
                    res.send(data)
                }
            }
        )
    });

// get all workouts 
    router.get('/api/workouts/all', (req, res) => {
        db.Workouts.find({}, (error, data) => {
            if (error) {
                res.send(error); 
            } else {
                res.send(data)
            }
        })
    }); 


// add a workout 
    router.post('/api/workouts/add', (req, res) =>{
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
        })
    });


// update a workout 
    router.put('/api/workouts/update/:id', (req, res) => {
        db.Workouts.update(
            {
                _id: mongojs.ObjectID(req.params.id)
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
        )
    });


// delete a workout 
    router.delete('/api/workouts/delete:id', (req, res) => {
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
        )
    });

// delete all workouts 
    router.delete('/api/workouts/deleteall', (req, res) => {
        db.Workouts.remove({}, (error, response) => {
            if (error) {
                res.send(error); 
            } else {
                res.send(response)
            }
        })
    });
};
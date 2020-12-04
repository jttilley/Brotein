// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');
const router = require('express').Router(); 


// get a workout ---WORKING 
    router.get('/:id', (req, res) => {
        db.Workouts.findOne(
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


// get all workouts 
    router.get('/all', (req, res) => {
        db.Workouts.find({}, (error, data) => {
            if (error) {
                res.send(error); 
            } else {
                res.send(data)
            }
        })
    }); 


// add a workout 
    router.post('/add', (req, res) =>{
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
    router.put('/update/:id', (req, res) => {
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
    router.delete('/delete:id', (req, res) => {
        db.Workouts.deleteOne(
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
    router.delete('/deleteall', (req, res) => {
        db.Workouts.deleteMany({}, (error, response) => {
            if (error) {
                res.send(error); 
            } else {
                res.send(response)
            }
        })
    });
module.exports = router; 
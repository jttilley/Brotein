// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');
const { read } = require('fs');
const router = require('express').Router(); 

// get all workouts 
router.get('/all', (req, res) => {
    db.Workouts.find({})
    .then(findAll => {
        res.send(findAll); 
    })
    .catch(err => {
        console.log(err); 
    })
});

// get a workout ---WORKING  
router.get('/:id', (req, res) => {
    db.Workouts.findOne({
        _id: mongojs.ObjectID(req.params.id)
    }, (error, data) => {
        if (error) {
            res.send(error); 
        } else {
            res.send(data); 
        }
    })
});


// get a workout ---WORKING 
router.get('/name/:name', (req, res) => {
    db.Workouts.findOne({
        name: req.params.name
    }, (error, data) => {
        if (error) {
            res.send(error); 
        } else {
            res.send(data); 
        }
    })
});



// // get all workouts 
// router.get('/all', (req, res) => {
//     db.Workouts.find({}, (error, data) => {
//         if (error) {
//             res.send(error); 
//         } else {
//             res.json(data)
//         }
//     })
// }); 


// add a workout --- WORKING 

    router.post('/add', (req, res) =>{
    console.log("🚀 ~ file: workoutRoutes.js ~ line 64 ~ router.post ~ req", req)
 
        
        db.Workouts.create({
            name: req.body.name, 
            workout: req.body.workout
        })
        .then(({_id}) => db.User.findOneAndUpdate({_id: id}, {$push: {workout: _id}}, {new: true}))
        .then(addWorkout => {
            res.send(addWorkout);
        })
        .catch(err => {
            res.send(err); 
        })
    });

//Db.tableName.update ( {continent : “Africa”}, {$push: {cities: ”city4”} } ) - update an array
// update a workout 
    router.put('/add/exercise/:name', (req, res) => {
        console.log('req.body.workout: ', req.body.workout);
        db.Workouts.update(
            {
                name: req.params.name
            }, 
            {
                $push: {workout: req.body.workout}
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

// update a workout 
    router.put('/update/:id', (req, res) => {
        db.Workouts.findOneAndUpdate(
            {
                _id: mongojs.ObjectID(req.params.id)
            }, 
            {
                $set: {
                    name: req.body.name, 
                    workout: req.body.workout, 
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

    // router.put('/update/:id', (req, res) => {
    //     db.Workouts.update(
    //         {
    //             _id: mongojs.ObjectID(req.params.id)
    //         }, 
    //         {
    //             $set: {
    //                 name: req.body.name, 
    //                 workout: req.body.name, 
    //                 exercise: req.body.exercise, 
    //                 sets: req.body.sets, 
    //                 reps: req.body.reps, 
    //                 weight: req.body.weight, 
    //                 duration: req.body.duration,
    //                 modified: Date.now()
    //             }
    //         }, 
    //         (error, data) => {
    //             if (error) {
    //                 res.send(error); 
    //             } else {
    //                 res.send(data); 
    //             }
    //         }
    //     )
    // });


// delete a workout ---WORKING 
    router.delete('/delete/:id', (req, res) => {
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

// delete all workouts --- WORKING 
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
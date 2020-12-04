// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');
const router = require('express').Router(); 

// get a meal -- WORKING 
  router.get('/:id', (req, res) => {
    db.Meals.findOne(
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


// get all meals ----NOT WORKING 
  router.get('/all', (req, res, error) => {
    db.Meals.findAll({}, (error, data) => {
      console.log("data", data); 
      if (error) {
        res.send(error);
      } else {
        res.send(data); 
      }
    })
  }); 
  
// add a meal --- WORKING 
  router.post('/add', (req, res) => {
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

// update a meal --WORKING 
  router.put('/update/:id', (req, res) => {
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

// delete a meal ---WORKING 
  router.delete('/delete/:id', (req, res) => {
    db.Meals.deleteOne(
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

// delete all meals --WORKING 
  router.delete('/deleteall', (req, res) => {
    db.Meals.deleteMany({}, (error, response) => {
        if (error) {
          res.send(error);
        } else {
          res.send(response);
        }
      });
    });
module.exports = router; 
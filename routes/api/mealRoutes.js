// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');


module.exports = function (app) {

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

// get all meals 
  app.get('/api/allmeals', (req, res) => {
    db.Meals.find({}, (error, data) =>{
      if (error) {
        res.send(error); 
      } else {
        res.json(data); 
      }
    })
  });

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

// update a meal 
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
// delete a meal 
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
// delete all meals 
  app.delete('/clearall/meals', (req, res) => {
    db.Meals.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
         res.send(response);
        }
        });
    });
  };
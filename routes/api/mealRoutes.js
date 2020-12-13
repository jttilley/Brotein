// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');
const router = require('express').Router(); 


// get all meals ----NOT WORKING --- add a promise 

router.get('/all', (req, res) => {
  db.Meals.find({})
  .then(allMeals => {
    console.log('allMeals: ', allMeals);

    res.json(allMeals); 
  }).catch(err => {
    res.status(400).json(err); 
  }); 
}); 

// get a meal -- WORKING 
router.get('/:id', (req, res) => {
  db.Meals.findOne({
      _id: mongojs.ObjectID(req.params.id)
  }, (error, data) => {
      if (error) {
          res.send(error); 
      } else {
          res.send(data); 
      }
  })
});

// get a meal by name
router.get('/name/:name', (req, res) => {
  db.Meals.findOne({
      name: req.params.name
  }, (error, data) => {
      if (error) {
          res.send(error); 
      } else {
          res.send(data); 
      }
  })
});


  // router.get("/api/workouts/range",(req,res) => {
  //   Workouts.find({}).then(workouts => {
  //     res.json(workouts);
  //   }).catch(err => {
  //     res.status(400).json(err);
  //   });
  // });
  
// add a meal --- WORKING 
  router.post('/add', (req, res) => {
    console.log('req.body: ', req.body);
    db.Meals.create({
      name: req.body.name,
      meal: req.body.meal,
    })
    .then(({_id}) => db.User.findOneAndUpdate({}, {$push: {meals: _id}}, {new: true}))
    .then(addMeal => {
        res.send(addMeal);
    })
    .catch(err => {
        res.send(err);
    });
 });
  
// add a meal --- WORKING 
  router.put('/add/food/:name', (req, res) => {
    console.log('req: ', req.body);
    db.Meals.update({
      name: req.params.name
    },{
        $push: {meal: req.body.meal}
    }, 
    (error, data) => {
        if (error) {
            res.send(error); 
        } else {
            res.send(data); 
        }
    })
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
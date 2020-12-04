// requiring dependencies 
const db = require('../../models'); 
const mongojs = require("mongojs");
const path = require('path');
const { mongo } = require('mongoose');
// const router = require('express').Router(); 
// const router = require('/index.js');

module.exports = function (router) {

// get a meal
  // router.get('/api/meals/:id', (req, res) => {
  //   db.Meals.findOne(
  //     {
  //       _id: mongojs.ObjectID(req.params.id)
  //     }, 
  //     (error, data) => {
  //       if (error) {
  //         res.send(error); 
  //       } else {
  //         res.send(data);
  //       }
  //     }
  //   )
  // }); 


// get all meals 
  router.get('/api/meals/all', (req, res, error) => {
    console.log('hi'); 
    // db.Meals.find({}, (error, data) => {
    //   console.log("data", data); 
    //   if (error) {
    //     res.send(error);
    //   } else {
    //     res.send(data); 
    //   }
    // })
  }); 




  
// // add a meal 
//   router.post('/api/meals/add', (req, res) => {
//     db.Meals.create({
//         food: req.body.food, 
//         protein: req.body.protein, 
//         carbohydrates: req.body.carbohydrates, 
//         fats: req.body.fats, 
//         calories: req.body.calories
//     })
//     .then(addMeal => {
//         res.send(addMeal);
//     })
//     .catch(err => {
//         res.send(err);
//     });
//  });

// // update a meal 
//   router.put('/api/meals/update/:id', (req, res) => {
//     db.Meals.update(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         {
//             $set: {
//             food: req.body.food,
//             protein: req.body.protein,
//             carbohydrates: req.body.carbohydrates, 
//             fats: req.body.fats, 
//             calories: req.body.calories,
//             modified: Date.now()
//             }
//         },
//         (error, data) => {
//             if (error) {
//               res.send(error);
//             } else {
//               res.send(data);
//             }
//         }
//     );
//  });
// // delete a meal 
//   router.delete('/api/meals/delete/:id', (req, res) => {
//     db.Meals.remove(
//         {
//             _id: mongojs.ObjectID(req.params.id)
//         },
//           (error, data) => {
//             if (error) {
//               res.send(error);
//             } else {
//               res.send(data);
//             }
//         }
//     );
//   });
// // delete all meals 
//   router.delete('/api/meals/deleteall', (req, res) => {
//     db.Meals.remove({}, (error, response) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(response);
//         }
//       });
//     });
  };
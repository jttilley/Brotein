const { Mongoose } = require("mongoose");
const { Workouts } = require("../../models/workouts");
const { Meals } = require("../../models/meals");


module.exports = function (app) {


  // app.get('/meals', function (req, res) {
  //   Mongoose.model('meals').find(function(err, Meals){
  //     res.send(Meals); 
  //   })
  // })

  // app.get("/", (req, res) => {
  //   res.sendFile('../public/index.html');
  // });

  // app.get("/meals", (req, res) => {
  //   Meals.find({}, (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  // });

  // app.get("/workouts", (req, res) => {
  //   Workouts.find({}, (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  // });

  // app.get("/all/previousworkouts", (req, res) => {
  //   Workouts.find({}, (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  // });

  // app.post("/workouts/submit", ({ body }, res) => {
  //   Workouts.create(body)
  //     .then(user => {
  //       res.json(user);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // app.post("/nutrition/submit", ({ body }, res) => {
  //   Meals.create(body)
  //     .then(user => {
  //       res.json(user);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });



  app.get('/', function (req, res) {
    res.send("Hello World!");
  });

  app.get('/api/test', function (req, res) {
    console.log('Hello');
  });

  app.post('/api/test', function (req, res) {
    console.log('test');
  });

}
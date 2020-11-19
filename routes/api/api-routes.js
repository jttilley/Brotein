const { Mongoose } = require("mongoose");
const { Workouts } = require("../../models/workouts");
const { Meals } = require("../../models/meals");


module.exports = function (app) {

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
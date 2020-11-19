// Dependencies 
const express = require('express');
const passport = require('./config/passport');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const logger = require('morgan');
const mongoose = require('mongoose');

// const path = require("path");
// const fs = require("fs"); 


// Set up the express app 
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models folder for syncing 
const models = require("./models");

// fs.readdirSync(__dirname + '/models').forEach(function(filename){
//   if (~filename.indexOf('.js')) require(__dirname + '/models' +  filename); 
// })

// Define middleware that handles data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
require('./routes/api/api-routes')(app); 

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/react-auth-hooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});     

// test that we connect successfully or if a connection error occurs 
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function () {
  console.log('Successfully Connected!!'); 
}); 

// Start the server and sync Sequelize models 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

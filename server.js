// Dependencies 
const express = require('express');
const passport = require('./config/passport');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

// Set up the express app 
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models folder for syncing 
const db = require('./models');

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
<<<<<<< HEAD
require('./routes/api-routes')(app); 
=======
// app.use('/meals', require('./routes/api/mealRoutes')); 
// require('./routes/api/mealRoutes')(app); 
app.use(routes); 

>>>>>>> 129c5d18067519da641f44cd7f23f76cb93eeb74

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Brotein', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});     

// test that we connect successfully or if a connection error occurs 
const DB = mongoose.connection; 
DB.on('error', console.error.bind(console, 'connection error:')); 
DB.once('open', function () {
  console.log('Successfully Connected!!'); 
}); 

// Start the server and sync Sequelize models 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

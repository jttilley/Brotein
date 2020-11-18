// Dependencies 
const express = require("express");
const passport = require("./config/passport");
const session = require("express-session");

// const mongoose = require("mongoose");

// Set up the express app 
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models folder for syncing 
const db = require("./models");

// Define middleware that handles data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactNotes", { useNewUrlParser: true });

// Start the server and sync Sequelize models 
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
// });
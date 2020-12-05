const router = require('express').Router();
const passport = require('../../config/passport');
const db = require('../../models');
const authMiddleware = require('../../config/middleware/authMiddleware');

// const bcrypt = require('bcryptjs');


// user login route --- WORKING
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/api/users/unauthorized',
    failureFlash: true,
  }),
  (req, res, next) => {
    console.log('sign in successful');
    res.json({
      user: req.user,
      loggedIn: true,
    });
  },
);

// user sign-up ---- WORKING 
router.post('/signup', (req, res, next) => {
  db.User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (user) {
      console.log('user already exists');
      return res.json('user already exists');
    }
    if (!user) {
      db.User.findOne({ email: req.body.email }, (error, useremail) => {
        if (error) throw error;
        if (useremail) {
          return res.json('email is already in use');
        }
        if (!useremail) {
          const newUser = new db.User({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
          });
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save((error2) => {
            if (error2) throw error2;
            console.log('user saved!');
            res.redirect(307, '/api/users/login');
          });
        }
      });
    }
  }).catch((error) => {
    console.log('Issue searching db for user ', error);
  });
});


// user logout route ---- WORKING 
router.get('/logout', authMiddleware.logoutUser, (req, res, next) => {
  res.json('User logged out successfully');
});


// route unauthorized ---- CHECK ON THIS ONE 
router.get('/unauthorized', (req, res, next) => {
  res.json({
    error: req.flash('error'),
    message: 'user not authenticated',
  });
});

// user is logged-in --- CONFIRM ON THIS ONE 
router.get('/home', authMiddleware.isLoggedIn, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

// admin check route ---- CONFIRM ON THIS ONE 
router.get('/admin', authMiddleware.isAdmin, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

module.exports = router;

const router = require('express').Router();
const passport = require('../../config/passport');
const db = require('../../models');
const authMiddleware = require('../../config/middleware/authMiddleware');
// const bcrypt = require('bcryptjs');

// testing 
router.get('/test', (req, res) => {
  res.send('Hello, this test is working!')
})

// route to sign up user 
router.post('/api/users/signup', async (req, res) => {
  try {
    // let { email, fullname, username, password} = req.body; 
    let { fullname, username, password} = req.body; 


  // validation 
  if (!fullname || !username || !password) 
    return res.status(400).json({msg: "All fields need to be completed."}); 

  const existingUser = await db.User.findOne({username: username});
    if (existingUser)
      return res 
        .status(400)
        .json({msg: "An account with this username already exists."});

    // const salt = await bcrypt.genSalt(); 
    // const passwordHash = await bcrypt.hash(password, salt); 

    const newUser = new db.User({
      fullname, 
      username,
      password
      // password: passwordHash, 
    });
    const savedUser = await newUser.save(); 
    res.json(savedUser); 
  } catch (err) {
    res.status(500).json({ error: err.message}); 
  }   
});



// router.post('/api/users/login', passport.authenticate('local', {
//     failureRedirect: '/api/users/unauthorized',
//     failureFlash: true,
//   }),
//   (req, res, next) => {
//     console.log('sign in successful');
//     res.json({
//       username: req.username,
//       loggedIn: true,
//     });
//   },
// );

// router.post('/api/users/signup', (req, res, next) => {
//   db.User.findOne({ username: req.body.username }, (err, user) => {
//     if (err) throw err;
//     if (user) {
//       console.log('user already exists');
//       return res.json('user already exists');
//     }
//     if (!user) {
//       db.User.findOne({ user: req.body.username }, (error, userName) => {
//         if (error) throw error;
//         if (userName) {
//           return res.json('username is already in use');
//         }
//         if (!userName) {
//           const newUser = new db.User({
//             fullname: req.body.fullname,
//             username: req.body.username,
//             password: req.body.password,
//           });
//           newUser.password = newUser.generateHash(req.body.password);
//           newUser.save((error2) => {
//             if (error2) throw error2;
//             console.log('user saved!');
//             res.redirect(307, '/api/users/login');
//           });
//         }
//       });
//     }
//   }).catch((error) => {
//     console.log('Issue searching db for user ', error);
//   });
// });

// router.get('/api/users/home', authMiddleware.isLoggedIn, (req, res, next) => {
//   res.json({
//     user: req.user,
//     loggedIn: true,
//   });
// });

// router.get('/api/users/logout', authMiddleware.logoutUser, (req, res, next) => {
//   res.json('User logged out successfully');
// });

// router.get('/unauthorized', (req, res, next) => {
//   res.json({
//     error: req.flash('error'),
//     message: 'user not authenticated',
//   });
// });

// router.get('/admin', authMiddleware.isAdmin, (req, res, next) => {
//   res.json({
//     user: req.user,
//     loggedIn: true,
//   });
// });

module.exports = router;


// // Using passport.authenticate middleware with  local strategy, if user has valid login credentials, send them to the members page otherwise the user will be sent an error
  
// // If the user already has an account send them to the home page

// app.get("/", (req, res) => {
//     console.log("test")
  
//     if (req.username) {
//       res.redirect('/home');
//       } else {
//         console.log("test");
//     }
//   }); 
  
//   // route to sign in user 
//   app.post('/sign-in', passport.authenticate('local'), (req, res) => {
//     res.json({
//       username: req.user.username,
//       id: req.user.id
//     });
  
  
//   // route to sign up a user 
//     app.post('/sign-up', (req, res) => {
//       db.User.create({
//         fullname: req.body.fullname, 
//         username: req.body.username,
//         password: req.body.password 
//       })
//         .then(() => {
//           res.redirect(307, '/sign-in');
//         })
//         .catch(err => {
//           res.status(401).json(err);
//         });
//   });
  
  
   
  
//   // route for logging out the user 
//     app.get('/logout', (req, res) => {
//       req.logout();
//       res.redirect("/");
//     });
  
//   // route for getting data about our user to be used client side
//     app.get('/api/user_data', (req, res) => {
//       if (!req.user) {
//         // The user is not logged in, send back an empty object
//         res.json({});
//       } else {
//         // Otherwise send back the user's email and id
//         // Sending back a password, even a hashed password, isn't a good idea
//         res.json({
//           email: req.user.email,
//           id: req.user.id
//         });
//       }
//     });
// });
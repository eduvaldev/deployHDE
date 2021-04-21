const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const userController = require("../../controller/userController");
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

function jwt_regiser(userinfor, callback) {
    const payload = {
        id: userinfor._id,
        username: userinfor.username,
        email: userinfor.email,
        role: userinfor.role
    }
    jwt.sign(payload, 'secret', {
        expiresIn: 3600*24*30
    }, (err, token) => {
        if (err) {
            callback({
                status: false,
                msg: "Internal Server Error"
            })
        } else {
            callback({
                status: true,
                token: token
            });
        }
    });
}

// /api/users/login
// route to login the user
router.post("/login", function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err); 
    }
    if (!user) { return res.json({status:false, msg: info.message}); }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      jwt_regiser(user, function(token){
        return res.json(token);
      })
    });
  })(req, res, next)

  
});

// /api/users/signup
// route to logout the user
router.post("/signup", function(req, res, next) {
  db.User.findOne({email: req.body.email}, function(err, user) {
    if (err) throw err;
    if (user) {
      console.log("user already exists")
      return res.json({
        status: false,
        msg: 'Email already exists'
      });
    }
    if (!user) {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      userController.create(req, res);
    }
  })
});



// /api/users/unauthorized
// route that gets hit if user is not logged in
// send error message back to front end
router.get("/unauthorized", function(req, res, next) {

  let message = req.flash("error")[0]
  
  setTimeout(function() {
    res.json({
      message: message,
      loggedIn: false
    });
  }, 100);
});

// /api/users/profile
// if the user is logged in, this route sends the user information to the front end
router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

// /api/users/logout
// logs out the user
router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  res.json("User logged out successfully");
});

// /api/users/admin
// route to check if the logged in user is flagged as an administer
// router.get("/admin", authMiddleware.isAdmin, function(req, res, next) {
//   res.json({
//     user: req.user,
//     loggedIn: true
//   });
// });

router.get("/user", authMiddleware.isLoggedIn, function(req, res, next) {
  db.User.findByIdAndUpdate(req.user._id).then((user) => {
    res.json(user);
  }).catch((err) => {
    res.json(err);
  });
});

router.post("/all", authMiddleware.isLoggedIn, function(req, res, next){
  userController.findAll(req, res);
});

router.post("/delete", authMiddleware.isLoggedIn, function(req, res, next){
  userController.remove(req, res);
});

router.post("/update", authMiddleware.isLoggedIn, function(req, res, next){
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  userController.update(req, res);
});

router.post("/add", authMiddleware.isLoggedIn, function(req, res, next){
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  userController.create(req, res);
});


module.exports = router;

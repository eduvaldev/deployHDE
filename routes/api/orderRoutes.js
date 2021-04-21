const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const orderController = require("../../controller/orderController");
const multer = require("multer");

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

router.post("/all", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.findAll(req, res);
});

router.post("/client", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.findAll(req, res);
});

router.post("/replacements", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.findReplacements(req, res);
});

router.post("/delete", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.remove(req, res);
});

router.post("/update", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.update(req, res);
});

router.post("/add", authMiddleware.isLoggedIn, function(req, res, next){
  orderController.create(req, res);
});


module.exports = router;

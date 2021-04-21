const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const inventoryController = require("../../controller/inventoryController");
const multer = require("multer");
const csvParser = require('csv-parser');
const fs = require('fs');

var storageFile = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, 'upload')
    },
    filename: function (req, file, cb) {
      const temp = file.originalname.split('.');
      cb(null, Date.now()+"."+temp[temp.length - 1]);
    }
  })
   

var uploadFile = multer({ storage: storageFile })
var upload = uploadFile.fields([{ name: 'file', maxCount: 1 }])

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

router.post("/upload", upload, function(req, res, next){
  mongoose.connection.collections['inventories'].drop( function(err) {
    console.log('collection dropped');
  });
  mongoose.connection.collections['replacements'].drop( function(err) {
    console.log('collection dropped');
  });
  try{
    csvFile = req.files['file'][0].path;
    fs.createReadStream(csvFile)
    .on('error', (e) => {
        console.log("Error: ", e.toString())
    })
    .pipe(csvParser({separator:';'}))
    .on('data', (row) => {
        // use row data
        console.log("Row: ", row);
        db.Inventory.create(row)
        .then(dbModel=>{})
        .catch(err => console.log("ERR: ", err.toString()))
    })
    .on('end', async () => {
        fs.unlinkSync(csvFile);
        const inventories = await db.Inventory.find(req.query).sort({ createdAt: -1 })
        res.json({status: true, msg: 'Success', data: inventories});
    })
    try {
      console.log("-----------------Creating Replacements----------------")
      db.Replacement.deleteMany()
      fs.createReadStream('upload/replacements.csv')
      .on('error', (e) => {
          console.log("ERR Replacement: ", e.toString())
      })
      .pipe(csvParser())
      .on('data', (row) => {
          // use row data
          console.log("RRow: ", row);
          db.Replacement.create(row)
          .then(dbModel=>{})
          .catch(err => console.log("ERR Replacement: ", err.toString()))
      })
      .on('end', () => {
        console.log("Created Replacements")
      })
    } catch (e) {
      console.log("Creating Replacements Error: ", e.toString())
    }
  }
  catch(err){
      return res.json({status: false, msg: err.toString()});
  }
});

router.get("/all", authMiddleware.isLoggedIn, function(req, res, next){
  inventoryController.findAll(req, res);
});

router.post("/delete", authMiddleware.isLoggedIn, function(req, res, next){
  inventoryController.remove(req, res);
});

router.post("/update", authMiddleware.isLoggedIn, function(req, res, next){
  inventoryController.update(req, res);
});

router.post("/add", authMiddleware.isLoggedIn, function(req, res, next){
  inventoryController.create(req, res);
});


module.exports = router;

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    if(req.body.userId){
      db.User
        .find({manager: req.body.userId})
        .sort({ createdAt: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else{
      db.User
        .find(req.query)
        .sort({ createdAt: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function(req, res) {
    db.User
      .findById(req.body._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json({status: true, data: dbModel}))
      .catch(err => res.json({status:false, msg: err.toString()}));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json({data:dbModel,status: true}))
      .catch(err => res.json({status: true}));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.body._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
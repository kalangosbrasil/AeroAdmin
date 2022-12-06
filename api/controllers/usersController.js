'use strict';
var mongoose = require('mongoose'),
Users = mongoose.model('Users');


// Retrieve all the users saved in the database
exports.getAllUsers = function(res) {
  Users.find({}, function(err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

// Create a new user
exports.createUser = function(req, res) {
  var new_user = new Users(req.body);
  new_user.save(function(err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(user);
    }
  });
};

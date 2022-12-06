'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter the first name of the user'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the last name of the user'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the user'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Regular', 'Devedor', 'Pendência', 'Impedido']
    }],
    default: ['Regular']
  }
});

module.exports = mongoose.model('Users', UserSchema);
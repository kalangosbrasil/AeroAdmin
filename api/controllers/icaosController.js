'use strict';
var mongoose = require('mongoose'),
Icao = mongoose.model('Icao');


// Retrieve all the tasks saved in the database
// exports.getAllTasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.json(task);
//     }
//   });
// };

// Create a new task
exports.createIcao = function(req, res) {
  var new_icao = new Icao(JSON.stringify(req.body));
  new_icao.save(function(err, icao) {
    if (err) {
      console.log("### ERRO ###", res.body)
      res.status(400).send(err);
    } else {
      console.log("###  OK  ###", res.body)
      res.status(201).json(icao);
    }
  });
};

// Retrieve a task by taskId
// exports.getTaskById = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err) {
//       res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
//                             description: 'Couldn\'t find the requested taskId \'' + req.params.taskId + '\'' } ], err, code: 404 } })
//     } else {
//       res.json(task);
//     }
//   });
// };

// Edit a task by taskId
// exports.editTaskById = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.json(task);
//     }
//   });
// };

// Delete a task by taskId
// exports.deleteTaskById = function(req, res) {
// Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err) {
//       res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
//                             description: 'Couldn\'t find the requested taskId \'' + req.params.taskId + '\'' } ], code: 404, message: 'Not Found' } })
//     } else {
//       res.status(204).send();
//       //res.json({ message: 'Task successfully deleted' });
//     }
//   });
// };
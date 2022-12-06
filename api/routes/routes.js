'use strict';
var tasksList = require('../controllers/tasksController');
// var icaoList = require('../controllers/icaosController');
// var userList = require('../controllers/usersController');


module.exports = function(app) {
  // Tasks List Routes
  app.route('/tasks')
    .get(tasksList.getAllTasks)
    .post(tasksList.createTask);

  app.route('/tasks/:taskId')
    .get(tasksList.getTaskById)
    .put(tasksList.editTaskById)
    .delete(tasksList.deleteTaskById);
    // Tasks List Routes

  // app.route('/icao')
  //   //.get(tasksList.getAllTasks)
  //   .post(icaoList.createIcao);

  // app.route('/users')
  //   .get(userList.getAllUsers)
  //   .post(userList.createUser);
};
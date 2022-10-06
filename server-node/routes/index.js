var express = require('express');
var db = require('../db');

const { ensureAuthenticated, forwardAuthenticated } = require('./rotaPrivate');

// function fetchTodos(req, res, next) 
// {
//   db.all('SELECT * FROM todos WHERE owner_id = ?', [
//     req.user.id
//   ], function(err, rows) {
//     if (err) { return next(err); }
    
//     var todos = rows.map(function(row) {
//       return {
//         id: row.id,
//         title: row.title,
//         completed: row.completed == 1 ? true : false,
//         url: '/' + row.id
//       }
//     });

//     res.locals.todos = todos;
//     res.locals.activeCount = todos.filter(function(todo) { return !todo.completed; }).length;
//     res.locals.completedCount = todos.length - res.locals.activeCount;
    
//     next();
//   });
// }

var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   if (!req.user) {
//     return res.render('home'); 
//   }
//   next();
// }, fetchTodos, function(req, res, next) {
//   res.locals.filter = null;
//   const response = {
//      user: req.user 
//   }
//   return res.send({
//     response
//   });
// });



router.get('/dashboard', ensureAuthenticated, (req, res) =>
  // console.log(req.user)
  res.render('dashboard', {
    user: req.user
  })
);


router.get('/chef-personal', ensureAuthenticated, (req, res) =>
  res.render('chef-personal', {
    user: req.user
  })
);


module.exports = router;

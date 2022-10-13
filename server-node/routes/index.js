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

// Tour 360
router.get('/start', (req, res) =>
  res.render('start')
);

router.get('/tour', (req, res) =>
  res.render('tour')
);

router.get('/tour360/panorama_chine', (req, res) =>
  res.render('./tour360/panorama_chine')
);

router.get('/tour360/panorama_planet', (req, res) => {
  res.render('./tour360/panorama_planet')
});

router.get('/tour360/panorama_globe', (req, res) => {
  res.render('./tour360/panorama_globe')
});

router.get('/tour360/panorama_link', (req, res) => {
  res.render('./tour360/panorama_link')
});

router.get('/tour360/panorama_veropeso', (req, res) => {
  res.render('./tour360/panorama_veropeso')
});

router.get('/tour360/panorama_city', (req, res) => {
  res.render('./tour360/panorama_city')
});

router.get('/tour360/panorama_lakehouse', (req, res) => {
  res.render('./tour360/panorama_lakehouse')
});


module.exports = router;

var express = require('express');
var db = require('../db');
var passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('./rotaPrivate');

function fetchTodos(req, res, next) 
{
  db.all('SELECT * FROM todos WHERE owner_id = ?', [
    req.user.id
  ], function(err, rows) {
    if (err) { return next(err); }
    
    var todos = rows.map(function(row) {
      return {
        id: row.id,
        title: row.title,
        completed: row.completed == 1 ? true : false,
        url: '/' + row.id
      }
    });

    res.locals.todos = todos;
    res.locals.activeCount = todos.filter(function(todo) { return !todo.completed; }).length;
    res.locals.completedCount = todos.length - res.locals.activeCount;
    
    next();
  });
}

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    return res.render('home'); 
  }
  next();
}, fetchTodos, function(req, res, next) {
  res.locals.filter = null;
  const response = {
     user: req.user 
  }
  return res.send({
    response
  });
});

// teste rota user protegida
router.get('/user',  function(req, res, next) {
  if (req.user) {
    return res.render('user'); 
  }
    res.render('login');
  });


router.get('/dashboard', ensureAuthenticated, (req, res) =>
  // console.log(req.user)
  res.render('dashboard', {
    user: req.user
  })
);

router.post('/', function(req, res, next) {
  req.body.title = req.body.title.trim();
  next();
}, function(req, res, next) {
  if (req.body.title !== '') { return next(); }
  return res.redirect('/' + (req.body.filter || ''));
}, function(req, res, next) {
  db.run('INSERT INTO todos (owner_id, title, completed) VALUES (?, ?, ?)', [
    req.user.id,
    req.body.title,
    req.body.completed == true ? 1 : null
  ], function(err) {
    if (err) { return next(err); }
    return res.redirect('/' + (req.body.filter || ''));
  });
});


module.exports = router;

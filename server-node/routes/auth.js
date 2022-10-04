const exp = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var db = require('../db');

const router = exp.Router();


passport.use(new LocalStrategy(function verify(username, password, cb) {
     db.get('SELECT * FROM users WHERE username = ?', 
     
        [ username ], function(err, row) {
        if (err) { return cb(err); }
        if (!row) 
        { 
            return cb(null, false, { message: 'Incorrect username or password.' }); }
    
         crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword)
         {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
            return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
         });
        
    });
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { 
        id: user.id,
        username: user.username,
        name: user.name,
        email:user.email,
        hashed: user.hashed_password,
        salt: user.salt
    });
  });
});
  
passport.deserializeUser(function(user, cb) {
   process.nextTick(function() {
    return cb(null, user);
  });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login/password', function (req, res, next) { 
    passport.authenticate('local', {
        successRedirect: 'http://127.0.0.1:3000/index',
        failureRedirect: '/login'
    })(req, res, next)
});

//logout
router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('http://127.0.0.1:3000');
    });
});

//register
router.get('/signup', function(req, res, next) {
   res.render('signup');
});

router.post('/signup', function(req, res, next) 
{
    var salt = crypto.randomBytes(16);
    

    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) 
    {
      if (err) { return next(err); }
       db.run('INSERT INTO users (username, hashed_password, salt, name, email) VALUES (?, ?, ?, ?, ?)',
       
      [
        req.body.username,
        hashedPassword,
        salt,
        req.body.name,
        req.body.email
      ], function(err) {
        if (err) { return next(err); }
        var user = {
          id: this.lastID,
          username: req.body.username,
        };
        
        req.login(user, function(err) {
          if (err) { return next(err); }
          res.redirect('http://127.0.0.1:3000/index');
        });
        
      });
    });

});




module.exports = router;
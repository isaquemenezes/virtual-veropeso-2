var express = require('express');
var db = require('../db');

const { ensureAuthenticated, forwardAuthenticated } = require('./rotaPrivate');


var router = express.Router();


router.get('/user/dashboard', ensureAuthenticated, (req, res) =>
  res.render('./user/dashboard', {
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

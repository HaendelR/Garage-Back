var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projet' });
});

router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Projet' });
});

module.exports = router;

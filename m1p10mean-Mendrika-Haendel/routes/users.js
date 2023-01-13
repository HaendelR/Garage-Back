var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.get('/allusers', function(req, res) {
  users.getusers(req, res);
});

router.post('/adduser', async function(req, res) {
  users.inscription(req,res);
});

router.post('/login', async function(req, res) {
  users.login(req, res);
})

module.exports = router;

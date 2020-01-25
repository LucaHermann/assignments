const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const users = [];

router.get('/add-users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Add-Users',
    path: '/admin/add-users',
  });
});

router.post('/add-users', (req, res, next) => {
  users.push({ name: req.body.name });
  console.log(users);
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
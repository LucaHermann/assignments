const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminsData = require('./users');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = adminsData.users;
  res.render('home', {
    pageTitle: 'Home',
    path: '/',
    users: users,
  });
});

module.exports = router;

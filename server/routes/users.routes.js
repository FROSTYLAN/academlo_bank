const express = require('express');

// Controller
const {
  signupUsers,
  loginUsers,
  transfersUsers,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', signupUsers);

router.post('/login', loginUsers);

router.get('/:id/history', transfersUsers);

module.exports = { usersRouter: router };

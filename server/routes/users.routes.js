const express = require('express');

// Middlewares
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  signupUsers,
  loginUsers,
  transfersUsers,
  getAllUsers,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', createUserValidations, checkValidations, signupUsers);

router.post('/login', loginUsers);

router.get('/:id/history', transfersUsers);

router.get('/', getAllUsers);

module.exports = { usersRouter: router };

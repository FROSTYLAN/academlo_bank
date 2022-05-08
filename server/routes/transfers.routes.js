const express = require('express');

// Controller
const {
  createTransfer,
  getAllTransfer,
} = require('../controllers/transfer.controller');

// Middlewares
const { transferValidation } = require('../middlewares/transfer.middlewares');

const router = express.Router();

router.post('/', transferValidation, createTransfer);

router.get('/', getAllTransfer);

module.exports = { transfersRouter: router };

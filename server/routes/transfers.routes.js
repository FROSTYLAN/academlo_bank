const express = require('express');

// Controller
const { createTransfer } = require('../controllers/transfer.controller');

const router = express.Router();

router.post('/', createTransfer);

module.exports = { transfersRouter: router };

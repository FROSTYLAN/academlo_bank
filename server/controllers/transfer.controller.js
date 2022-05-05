const { Transfer } = require('../models/transfer.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createTransfer = catchAsync(async (req, res, next) => {
  const { amount, senderUserId, receiverUserId } = req.body;
  const newTransfer = await Transfer.create({
    amount,
    senderUserId,
    receiverUserId,
  });
  res.status(201).json({ newTransfer });
});

module.exports = { createTransfer };

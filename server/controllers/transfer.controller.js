const { Transfer } = require('../models/transfer.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createTransfer = catchAsync(async (req, res, next) => {
  const { amount, senderUser, receiverUser } = req;

  await senderUser.update({ amount: senderUser.amount - amount });
  await receiverUser.update({ amount: receiverUser.amount + amount });

  const newTransfer = await Transfer.create({
    amount,
    senderUserId: senderUser.id,
    receiverUserId: receiverUser.id,
  });
  res.status(201).json({ newTransfer });
});

const getAllTransfer = catchAsync(async (req, res, next) => {
  const transfers = await Transfer.findAll();
  res.status(200).json({ transfers });
});

module.exports = { createTransfer, getAllTransfer };

const { User } = require('../models/user.model');
const { Transfer } = require('../models/transfer.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const signupUsers = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;
  const accountNumber = Math.round(Math.random() * 999999);
  const newUser = await User.create({ name, password, accountNumber });
  res.status(201).json({ newUser });
});

const loginUsers = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;
  const users = await User.findOne({
    where: { accountNumber: accountNumber, password: password },
  });
  res.status(200).json({ users });
});

const transfersUsers = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const transfersUsers = await Transfer.findAll({
    where: { senderUserId: id },
  });
  res.status(200).json({ transfersUsers });
});

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ users });
});

module.exports = { signupUsers, loginUsers, transfersUsers, getAllUsers };

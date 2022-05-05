const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const signupUsers = catchAsync(async (req, res, next) => {
  const { name, accountNumber, password } = req.body;
  const newUser = await User.create({ name, accountNumber, password });
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
  const transfersUsers = await Transfer.findAll({
    where: { userId: id },
  });
  res.status(200).json({ transfersUsers });
});

module.exports = { signupUsers, loginUsers, transfersUsers };

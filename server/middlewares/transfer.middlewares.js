const { User } = require('../models/user.model');

const transferValidation = async (req, res, next) => {
  try {
    const { amount, senderUserId, receiverUserId } = req.body;

    const senderUser = await User.findOne({ where: { id: senderUserId } });
    const receiverUser = await User.findOne({ where: { id: receiverUserId } });

    if (!receiverUser) {
      return res.status(404).json({
        status: 'error',
        message: 'User not exist',
      });
    } else if (senderUser.amount < amount) {
      return res.status(404).json({
        status: 'error',
        message: 'does not have enough amount',
      });
    }

    req.senderUser = senderUser;
    req.receiverUser = receiverUser;
    req.amount = amount;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { transferValidation };

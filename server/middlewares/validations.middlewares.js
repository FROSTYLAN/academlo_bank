const { body } = require('express-validator');
const { validationResult } = require('express-validator');

const createUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);

    const errorMsg = messages.join('. '); // concatena string.

    return res.status(400).json({
      status: 'error',
      message: errorMsg,
    });
  }
  next();
};

module.exports = {
  createUserValidations,
  checkValidations,
};

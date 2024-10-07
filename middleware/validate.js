const createHttpError = require('http-errors');
const { CREATE_USER_VALIDATION_SCHEMA } = require('../utils/validationSchemas');

module.exports.validationOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUser = await CREATE_USER_VALIDATION_SCHEMA.validate(body);
    req.body = validatedUser;
    next();
  } catch (err) {
    next(createHttpError(402, err));
  }
};

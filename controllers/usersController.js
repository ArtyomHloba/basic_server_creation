const createHttpError = require('http-errors');
const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const createdUser = await User.create(body);
    res.status(201).send(createdUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};

module.exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const foundUser = await User.getById(userId);
    if (!foundUser) {
      return next(createHttpError(404, 'User Not Found'));
    }
    res.status(200).send(foundUser);
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserById = async (req, res, next) => {};

module.exports.deleteUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const foundUser = await User.deleteById(userId);
    if (!foundUser) {
      return next(createHttpError(404, 'User Not Found'));
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

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

module.exports.getUserById = async (req, res, next) => {};

module.exports.updateUserById = async (req, res, next) => {};

module.exports.deleteUserById = async (req, res, next) => {};

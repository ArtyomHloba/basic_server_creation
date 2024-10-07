const express = require('express');
const { usersControler } = require('./controllers');
const { errorHandlers, validate } = require('./middleware');

const app = express();

app.use(express.json());

app.post('/users', validate.validationOnCreate, usersControler.createUser);
app.get('/users', usersControler.getAllUsers);
app.get('/users/:userId', usersControler.getUserById);
app.patch('/users/:userId', usersControler.updateUserById);
app.delete('/users/:userId', usersControler.deleteUserById);

app.use(errorHandlers.errorHandler);
console.log('3');
module.exports = app;

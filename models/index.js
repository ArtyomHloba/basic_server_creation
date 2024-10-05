const { Pool } = require('pg');
const User = require('./user');

// TODO: move to configs.js / process.evv
const connectionOptions = {
  user: 'postgres',
  password: '2323',
  host: 'localhost',
  port: 5432,
  database: 'phones_sales',
};

const pool = new Pool(connectionOptions);

// Завершити з'єднання з БД при завершенні роботи застосунку
process.on('beforeExit', () => pool.end());

const db = {};
db.pool = pool;

db.User = User;
User.pool = pool;

module.exports = db;

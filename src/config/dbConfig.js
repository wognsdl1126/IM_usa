const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'ong',
  password: 'package.json',
  database: 'bookstore'
});

module.exports = pool;

const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Tu contraseña de MySQL
  database: 'restaurante', // Nombre de la base de datos
});

module.exports = db;
const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

async function validateUser(req, res) {
  const username = req.params.username;
  const password = req.header('Authorization').replace('Bearer ', '');

  try {
    // Ejecuta la consulta
    const [rows] = await db.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      // Si se encuentra el usuario, devuelve el resultado
      res.json(rows[0]);
    } else {
      // Si no se encuentra el usuario o la contraseña no coincide
      res.status(401).json({ error: 'Autenticación fallida' });
    }
  } catch (error) {
    // Maneja errores de la consulta SQL o la conexión a la base de datos
    console.error('Error al validar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  validateUser,
};


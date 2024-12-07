const db = require('../conexion/db'); 
const fs = require('fs').promises;
const path = require('path');

// Obtener todas las ventas
async function getAllSells(req, res) {
  try {
    const [sells] = await db.query('SELECT * FROM sells');
    res.json(sells);
  } catch (error) {
    console.error('Error al obtener la lista de ventas', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Crear una nueva venta
async function createSell(req, res) {
  const { nombreproducto, unidad } = req.body;

  try {
    // Consulta SQL para insertar una nueva venta
    const query = `
      INSERT INTO sells (nombreproducto, unidad)
      VALUES (?, ?)
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [nombreproducto, unidad]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear la venta', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  getAllSells,
  createSell,
};

  
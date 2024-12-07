const db = require('../conexion/db'); 

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  const { username, password, id, age, role } = req.body;

  try {
    // Consulta SQL para insertar un nuevo usuario
    const query = `
      INSERT INTO users (id, username, password, age, role)
      VALUES (?, ?, ?, ?, ?)
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [id, username, password, age, role]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Eliminar un usuario
async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    // Consulta SQL para eliminar un usuario por ID
    const query = `
      DELETE FROM users
      WHERE id = ?
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [id]);

    console.log('Usuario eliminado con éxito');
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Editar un usuario
async function editUser(req, res) {
  const { id, username, password, age, role } = req.body;

  try {
    // Consulta SQL para editar un usuario
    const query = `
      UPDATE users
      SET username = ?, password = ?, age = ?, role = ?
      WHERE id = ?
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [username, password, age, role, id]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al editar el usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  editUser,
};

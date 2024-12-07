const db = require('../conexion/db'); 

// Obtener todos los productos
async function getAllProduct(req, res) {
  try {
    const [products] = await db.query('SELECT * FROM product');
    res.json(products);
  } catch (error) {
    console.error('Error al obtener la lista de productos', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Crear un nuevo producto
async function createProducto(req, res) {
  const { productname, price } = req.body;

  try {
    // Consulta SQL para insertar un nuevo producto
    const query = `
      INSERT INTO product (productname, price)
      VALUES (?, ?)
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [productname, price]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al crear el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Eliminar un producto
async function deleteProduct(req, res) {
  const id = req.params.id;

  try {
    // Consulta SQL para eliminar un producto por ID
    const query = `
      DELETE FROM product
      WHERE id = ?
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [id]);

    console.log('Producto eliminado con éxito');
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Editar un producto
async function editProduct(req, res) {
  const { id, productname, price } = req.body;

  try {
    // Consulta SQL para editar un producto
    const query = `
      UPDATE product
      SET productname = ?, price = ?
      WHERE id = ?
    `;

    // Ejecutar la consulta SQL
    await db.query(query, [productname, price, id]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error al editar el producto', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  getAllProduct,
  createProducto,
  deleteProduct,
  editProduct,
};

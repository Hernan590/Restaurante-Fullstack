const express = require('express');
const router = express.Router();
const validate = require('../controllers/inicioSesion');
//prueba
router.post('/validar/:username', validate.validateUser);

module.exports = router;
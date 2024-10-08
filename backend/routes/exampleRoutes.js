const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Definir las rutas básicas del CRUD
router.get('/items', exampleController.getItems);    // Obtener todos los items
router.post('/items', exampleController.createItem); // Crear un nuevo item
router.put('/items/:id', exampleController.updateItem); // Actualizar un item
router.delete('/items/:id', exampleController.deleteItem); // Eliminar un item

module.exports = router;

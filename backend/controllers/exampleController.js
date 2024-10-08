const Example = require('../models/exampleModel');

// Obtener todos los items
exports.getItems = async (req, res) => {
    try {
        const items = await Example.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los items' });
    }
};

// Crear un nuevo item
exports.createItem = async (req, res) => {
    try {
        const newItem = new Example(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: 'Error al crear el item' });
    }
};

// Actualizar un item
exports.updateItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await Example.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: 'Error al actualizar el item' });
    }
};

// Eliminar un item
exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await Example.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item no encontrado' });
        }
        res.status(200).json({ message: 'Item eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el item' });
    }
};


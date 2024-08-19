
const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.post('/items', itemController.createItem.bind(itemController));
router.get('/items', itemController.getItems.bind(itemController));
router.get('/items/:id', itemController.getItem.bind(itemController));
router.put('/items/:id', itemController.updateItem.bind(itemController));
router.delete('/items/:id', itemController.deleteItem.bind(itemController));

module.exports = router;

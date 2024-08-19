const express = require('express');
const ItemController = require('../controller/itemController');

class ItemRoutes {
    constructor() {
        this.router = express.Router();
        this.itemController = new ItemController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/items', this.itemController.createItem.bind(this.itemController));
        this.router.get('/items', this.itemController.getItems.bind(this.itemController));
        this.router.get('/items/:id', this.itemController.getItem.bind(this.itemController));
        this.router.put('/items/:id', this.itemController.updateItem.bind(this.itemController));
        this.router.delete('/items/:id', this.itemController.deleteItem.bind(this.itemController));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ItemRoutes;
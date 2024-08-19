const mongoose = require('mongoose');

class ItemModel {
    constructor() {
        this.ItemSchema = new mongoose.Schema({
            name: { 
                type: String,
                required: true 
            },
            description: { 
                type: String 
            },
            price: { 
                type: Number 
            }
        });

        this.Item = mongoose.model('Item', this.ItemSchema);
    }
    getModel() {
        return this.Item;
    }
}

module.exports = new ItemModel();

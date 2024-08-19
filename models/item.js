
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true 
        },
    description: { 
        type: String 
    },
    price: { 
        type: Number
     },
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;

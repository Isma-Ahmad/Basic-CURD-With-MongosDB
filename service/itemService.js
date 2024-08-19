const Item = require('../models/item');

class ItemService {
    constructor() {
        this.Item = Item.getModel();
    }
    async createItem(data) {

            const item = new this.Item(data);
            return await item.save();
    }

    async getAllItems() {
       
            return await Item.find();
    }

    async getItemById(id) {
       
            const item = await Item.findById(id);
            if (!item) throw new Error('Item not found');
            return item;
    }

    async updateItemById(id, data) {
 
            const item = await Item.findByIdAndUpdate(id, data, { new: true });
            if (!item) throw new Error('Item not found');
            return item;
    }

    async deleteItemById(id) {
   
            const item = await Item.findByIdAndDelete(id);
            if (!item) throw new Error('Item not found');
            return item;
    }
}

module.exports = ItemService;

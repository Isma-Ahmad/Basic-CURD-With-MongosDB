
const ItemService = require('../service/itemService');



class ItemController {
    constructor() {
         this.itemService = new ItemService();
    }

    async createItem(req, res) {
     
            const item = await this.itemService.createItem(req.body);
            res.status(201).json(item); 
    }

    async getItems(req, res) {
 
            const items = await this.itemService.getAllItems();
            res.status(200).json(items);
    }

    async getItem(req, res) {
 
            const item = await this.itemService.getItemById(req.params.id);

    }

    async updateItem(req, res) {
   
            const item = await this.itemService.updateItemById(req.params.id, req.body);
            res.status(200).json(item);
        
    }

    async deleteItem(req, res) {

            await this.itemService.deleteItemById(req.params.id);
            res.status(200).json({ message: 'Item deleted successfully' });
       
    }
}


module.exports = ItemController;

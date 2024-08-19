const express = require('express');
const connectDB = require('./db');
const ItemRoutes = require('./routes/itemRoutes');
const app = express();
const itemRoutes = new ItemRoutes();
connectDB();

app.use(express.json());

app.use('/', itemRoutes.getRouter());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

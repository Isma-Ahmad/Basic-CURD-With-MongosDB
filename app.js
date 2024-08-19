// app.js
const express = require('express');
const connectDB = require('./db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/', itemRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

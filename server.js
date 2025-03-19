require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

app.use('/api', userRoutes); // Use the userRoutes

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    await db.sequelize.sync(); // Ensure DB is synced
});

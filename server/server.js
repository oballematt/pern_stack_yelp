const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');

const port = process.env.PORT || 5001;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/restaraunts'));

app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
    await sequelize.sync({force: true});
    console.log('Database connection established');
});
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.listen(5001, () => {
    console.log("server now running on port 5001")
})
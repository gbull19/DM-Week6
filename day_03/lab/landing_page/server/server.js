const express = require('express');
const cors = require('cors');
const {SERVER_PORT} = process.env;

const app = express();

// const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));




app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));
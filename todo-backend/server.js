const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


connectDB();

module.exports = app;
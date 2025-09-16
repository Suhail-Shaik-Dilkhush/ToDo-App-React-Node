const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
let port = 3000;


app.get('/', (req, res) => {

    res.status(200).json({ message: 'This is Suhail - from the server' });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
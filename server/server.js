const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const fs = require('fs');
const dataPath = 'data/dogs.json';

function readData() {

    const raw = fs.readFileSync(dataPath);

    const data = JSON.parse(raw);

    return data;

//     app.get('/api/dogs', (req, res)) => {
// }


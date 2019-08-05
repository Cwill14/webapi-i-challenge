// implement your API here
const express = require('express');

const Data = require('./data/db.js');

const server = express();

server.use(express.json());

const port = 5000
server.listen(port, () => console.log('server running at 5000'))

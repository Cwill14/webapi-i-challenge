// implement your API here
const express = require('express');

const Data = require('./data/db.js');

const server = express();
server.use(express.json());

server.get('/api/users', (req, res) => {
    Data.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({  error: "The users information could not be retrieved." })
        })
})

server.post('/api/users', (req, res) => {
    Data.insert()
        .then()
        .catch()
})

server.get('/api/users/:id', (req, res) => {
    Data.findById()
        .then()
        .catch()
})

server.delete('/api/users/:id', (req, res) => {
    Data.remove()
        .then()
        .catch()
})

server.put('/api/users/:id', (req, res) => {
    Data.update()
        .then()
        .catch()
})

const port = 5000
server.listen(port, () => console.log('server running at 5000'))

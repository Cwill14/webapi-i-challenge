// implement your API here
const express = require('express');
const cors = require('cors');

const Data = require('./data/db.js');

const server = express();

server.use(express.json());
server.use(cors());

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
    const userInfo = req.body
    if (userInfo.name && userInfo.bio) {
        Data.insert(userInfo)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ error: "There was an error while saving the user to the database" })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
})

server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    
    if (userId) {
        Data.findById(userId)
            .then(user => {
                res.status(200).json(user)
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be retrieved." })
            })
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    }
})

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    if (id) {
        Data.remove(id)
            .then(user => {
                res.status(200).json({ message: "User successfully deleted" })
            })
            .catch(error => {
                res.status(500).json({ error: "The user could not be removed" })
            })
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    }
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    if (id) {
        if (changes.name && changes.bio) {
            Data.update(id, changes)
                .then(updated => {
                    res.status(200).json(updated)
                })
                .catch(error => {
                    res.status(500).json({ error: "The user information could not be modified." })
                })
        } else {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
        }
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    }
})

const port = 5000
server.listen(port, () => console.log('server running at 5000'))

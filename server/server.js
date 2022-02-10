const express = require('express')
const path = require('path')

const noteList = require('./routes/notes')
const noteAdd = require('./routes/addnotes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/list', noteList)
server.use('/api/v1/add', noteAdd)

module.exports = server

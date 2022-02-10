const express = require('express')

const db = require('../db/notes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNotes()
    .then(results => {
      console.log(results)
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong lol' })
    })
})

module.exports = router

const express = require('express')
// addnotes uses the same table as (list) notes
const db = require('../db/notes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNotes()
    .then(notes => {
      res.json(notes)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong lol' })
    })
})
router.post('/', (req, res) => {
  const addNotes = req.body
  db.addNotes(addNotes)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router

const express = require('express')
// addnotes uses the same table as notes
const db = require('../db/notes')

const router = express.Router()
// this is just the route construction thing that grabs the note data from db/notes and reads json somehow.
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
// this is the same as above lol except it doesn't read json because the input is new so we sendStatus instead of accessing existing data.
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

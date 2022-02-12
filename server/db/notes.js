const connection = require('./connection')
// 'notes' is the data that is passed through using function getNotes and addNotes and imported to the routes files
function getNotes (db = connection) {
  return db('notes').select()
}
// select() because we are accessing the existing data and insert() is for adding stuff to the data
// newNotes is passed through as a parameter because we have new stuff that is represented as a placeholder here
function addNotes (newNotes, db = connection) {
  return db('notes').insert(newNotes)
}

function deleteNotes (db = connection) {
  return db('notes').select()
}
module.exports = {
  getNotes,
  addNotes,
  deleteNotes
}

import { fetchNotes } from '../apis/notes'
// this accesses the data from bridge and uses it as an object within an array and it triggers the action in reducer using GET_NOTES
export const GET_NOTES = 'GET_NOTES'

export function getNotes(notes) {
  console.log(notes)
  return {
    type: GET_NOTES,
    notes
  }
}
// this is updating the store with the new recieved data from fetchNotes
export function getNotesData() {
  return dispatch => {
    return fetchNotes()
      .then(notes => {
        dispatch(getNotes(notes))
        return null
      })
  }
}
// this is the complete backend data transformation to the front end. Dispatch (getNotes(notes)) is using the getNotes(notes) data in reducer/notes.js action.notes.

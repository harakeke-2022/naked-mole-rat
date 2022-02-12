import { fetchNotes, postNote } from '../apis/notes'

// this accesses the data from bridge and uses it as an object within an array and it triggers the action in reducer using GET_NOTES
export const GET_NOTES = 'GET_NOTES'
export const SET_FORM = 'SET_FORM'
export const PENDING_FORM = 'PENDING_FORM'
export const DELETE_NOTE = 'DELETE_NOTE'

export function setNoteSuccess(form) {
  return {
    type: SET_FORM,
    form: form
  }
}

export function setNotePending() {
  return {
    type: PENDING_FORM
  }
}

export function setNote(form) {
  console.log('hello this is getnotes from your action')
  return (dispatch) => {
    dispatch(setNotePending())
    return postNote(form)
      .then(() => {
        dispatch(setNoteSuccess(form))
        return null
      })
      .catch(err => {
        console.error('hey this is yur setNote action failing', err)
      })
  }
}

export function getNotes(notes) {
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
      .catch(err => {
        console.error('hey this is yur setNote action failing', err)
      })
  }
}
// this is the complete backend data transformation to the front end. Dispatch (getNotes(notes)) is using the getNotes(notes) data in reducer/notes.js action.notes.

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  }
}

export function deleteNoteData() {
  return dispatch => {
    return deleteNote()
      .then(note => {
        dispatch(deleteNote(note))
        return null
      })
      .catch(err => {
        console.error('this thing is not working lol fix it', err)
      })
  }
}

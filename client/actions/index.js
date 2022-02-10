import { postNote } from '../apis/notes'

export const SET_FORM = 'SET_FORM'
export const PENDING_FORM = 'PENDING_FORM'

export function setNoteSuccess (form) {
  return {
    type: SET_FORM,
    form: form
  }
}

export function setNotePending () {
  return {
    type: PENDING_FORM
  }
}

export function setNote (form) {
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

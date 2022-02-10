import { fetchNotes } from '../apis/notes'

export const GET_NOTES = 'GET_NOTES'

export function getNotes(notes) {
  return {
    type: GET_NOTES,
    notes
  }
}

export function getNotesData() {
  return dispatch => {
    return fetchNotes()
      .then(notes => {
        dispatch(getNotes(notes))
        return null
      })
  }
}

// export function fetchFruits() {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }

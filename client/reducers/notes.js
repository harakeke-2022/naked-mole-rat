import { GET_NOTES } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.notes
    default:
      return state
  }
}

export default reducer

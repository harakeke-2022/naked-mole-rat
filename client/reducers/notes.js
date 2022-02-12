import { GET_NOTES, DELETE_NOTE } from '../actions/index'

// this is where the action is called and state is updated from initialState to action
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.notes
    case DELETE_NOTE:
      return state.filter((item) => item.id !== action.id)
    default:
      return state
  }
}

export default reducer

import { GET_NOTES } from '../actions/index'
// this is where the action is called and state is updated from initialState to action
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

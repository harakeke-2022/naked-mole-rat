import { combineReducers } from 'redux'

import notes from './notes'

export default combineReducers({
  notes
})
// this is just combining the reducers from reducers/notes.js, the name is notes but the exported thing is called reducer but it doesn't matter because default export
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNotesData, deleteNote } from '../actions/index'

function ListItem() {
  const dispatch = useDispatch()

  function deleteItem(e, id) {
    e.preventDefault()
    const action = deleteNote(id)
    dispatch(action)
  }
  // this data now becomes an array and can be used in UI data, using the useSelector hook to hook the updated state from notes
  const notes = useSelector(state => state.notes)
  // this dispatch is calling the action from action/index.js
  useEffect(() => {
    dispatch(getNotesData())
  }, [])
  // [] this is to limit the cycle of loading the dispatch
  return (
    <>
      <div className='main'>
        <Link to='/add'><button className='newNote-button' >New</button></Link>
        <ul className='noteList'>

          {notes.map(note => {
            return (
              <>
                <li className='noteList-item'>
                  <span>{note.title}</span>
                  <p>{note.note}</p>
                </li>
                <button className='delete-button' onClick={(e) => deleteItem(e, note.id)}> Delete</button>
              </>
            )
          })}

        </ul>
      </div>
    </>

  )
}
export default ListItem

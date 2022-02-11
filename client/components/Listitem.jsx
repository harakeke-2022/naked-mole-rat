import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNotesData } from '../actions/index'

function ListItem () {
  const dispatch = useDispatch()

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
        <div className='new-container'>
          <Link to='/add'><button className="button-55"name='np'><b>Add a note...</b></button></Link>
        </div>
        <ul className='noteList'>

          {notes.map(note => {
            return (
              <>
                <li className='noteList-item'>
                  <div>
                    <h3>{note.title}</h3>
                  </div>

                  <div>
                    <p className='note-content'>{note.note}</p>
                  </div>
                </li>
              </>
            )
          })}

        </ul>
      </div>
    </>

  )
}

export default ListItem

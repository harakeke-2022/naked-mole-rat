import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNotesData } from '../actions/index'

function ListItem() {
  const dispatch = useDispatch()

  function handleClick(event) {

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
      <div>
        <button className='new-note-button' onClick={handleClick}>New</button>
        <ul>

          {notes.map(note => {
            return (
              <>
                <li>
                  <span>{note.title}</span>
                  <p>{note.note}</p>
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

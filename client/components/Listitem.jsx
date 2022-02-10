import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNotesData } from '../actions/index'

function ListItem() {
  // const notes = []
  const dispatch = useDispatch()

  function handleClick(event) {

  }

  const notes = useSelector(state => state.notes)
  useEffect(() => {
    dispatch(getNotesData())
  }, [])

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

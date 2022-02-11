import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNotesData } from '../actions/index'

function ListItem() {
  const dispatch = useDispatch()

  // this data now becomes an array and can be used in UI data, using the useSelector hook to hook the updated state from notes
  const notes = useSelector(state => state.notes)
  // this dispatch is calling the action from action/index.js
  useEffect(() => {
    dispatch(getNotesData())
  }, [])
  // [] this is to limit the cycle of loading the dispatch

  const [filterTxt, setfilterTxt] = useState('')


  function searchBar(text) {
    setfilterTxt(text)

  }

  return (
    <>
      <div className='main'>

        <div className="searchContainer">
          <Link to='/add'><button className="button-54" name='np' >New</button></Link>
          <input id='searchValue' type="search" className="searchbar" placeholder='Search data...' name='searchValue' onChange={(e) => searchBar(e.target.value)} />

        </div>




        <ul className='noteList'>

          {filterTxt?.length === 0
            ? notes.map((note) => {
              return <li className='noteList-item' key={notes.id}>
                <span>{note.title}</span>
                <p>{note.note}</p>
              </li>
            })
            : notes
              .filter(note => note.title.toLowerCase().includes(filterTxt.toLowerCase()))
              .map((note) => {
                return <li className='noteList-item' key={notes.id}>
                  <span>{note.title}</span>
                  <p>{note.note}</p>
                </li>
              })
          }

        </ul>
      </div>
    </>

  )
}

export default ListItem

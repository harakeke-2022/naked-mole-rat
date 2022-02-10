import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddItem from './AddItem'
import ListItem from './Listitem'

import { Route, Routes } from 'react-router-dom'

// import { fetchFruits } from '../actions'

function App () {
  // const fruits = useSelector(state => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className='app'>
        <header>Hello this is your header</header>
        <Routes>
          <Route path='/' element={<AddItem />} />
          <Route path='/' element={<ListItem />} />

        </Routes>
        <footer>Goodbye this is your footer</footer>

      </div>
    </>

  )
}

export default App

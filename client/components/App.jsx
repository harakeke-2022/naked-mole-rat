import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import AddItem from './AddItem'
import ListItem from './Listitem'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='app'>
        <header>Hello this is your header</header>
        <Routes>
          <Route path='/' element={<AddItem />} />
          <Route path='/' element={<ListItem />} />
          <Route path='/bah' element={<AddItem />} />
          {/* path need to change */}

        </Routes>
        <footer>Goodbye this is your footer</footer>

      </div>
    </>

  )
}

export default App

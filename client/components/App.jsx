import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import AddItem from './AddItem'
import ListItem from './Listitem'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <div className='container-main'>
        <header>Naked Notes ✍🏽</header>
        <Routes>
          <Route path='/' element={<ListItem />} />
          <Route path='/add' element={<AddItem />} />
        </Routes>
        <footer>Made with 💖 by the Naked Mole Rats</footer>

      </div>
    </>

  )
}

export default App

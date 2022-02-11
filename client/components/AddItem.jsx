import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setNote } from '../actions/index'

function AddItem () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialState = {
    title: '',
    note: ''
  }

  const [form, setForm] = useState(initialState)

  //   const { title, note } = props.item

  function handleChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

    // setForm
  }

  function onSubmit (event) {
    event.preventDefault()
    console.log('this if your event coming from additem comp', event)
    console.log('this is your from from additemitem comp', form)
    dispatch(setNote(form))
    setForm(initialState)
    navigate('/')
  }

  return (
    <>
      <form className='new-container'>
        <div className='box'>
          <label><strong>Whats your note called...</strong></label>
          <input onChange={handleChange} value={form.name} type="text" name="title" placeholder="Milk"></input>
        </div>

        <div>
          <label><strong>Write your note here...</strong></label>
          <textarea onChange={handleChange} value={form.note} rows='10' cols='50' type="text" name="note" placeholder="Dont forget to buy the milk"></textarea>
        </div>

      </form>
      <div className='new-container'>
        <button onClick={onSubmit} className="button-55"> Submit</button>
      </div>

    </>
  )
}

export default AddItem

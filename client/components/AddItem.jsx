import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setNote } from '../actions/index'

function AddItem() {
  const dispatch = useDispatch()

  const initialState = {
    title: '',
    note: ''
  }

  const [form, setForm] = useState(initialState)

  //   const { title, note } = props.item

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

    // setForm
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log(event)
    console.log(form)
    dispatch(setNote(form))
    setForm(initialState)
  }

  return (
    <>
      <form className='container'>
        <div>
          <label>Whats your note called:</label>
          <input onChange={handleChange} value={form.name} type="text" name="title" placeholder="Milk"></input>
        </div>
        <div>
          <label>Write your note here:</label>
          <textarea onChange={handleChange} value={form.note} rows='2' cols='50' type="text" name="note" placeholder="Dont forget to buy the milk"></textarea>
        </div>
        <button onClick={onSubmit} className="button-54"> Submit</button>
      </form>

    </>
  )
}

export default AddItem

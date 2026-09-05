import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")

  const formSubmit = (elem) => {
    elem.preventDefault();  // <- it prevents automatically reload web after submitting
    console.log("form is submitted by", title);
    setTitle("")
  }

  return (
    <div>
      <form onSubmit={(elem) => {
        formSubmit(elem)
      }}>
        <input type="text"
        placeholder='Enter your name' 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App

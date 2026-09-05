import React from 'react'

const App = () => {

  const formSubmit = (elem) => {
    elem.preventDefault();  // <- it prevents automatically reload web after submitting
    console.log("form is submitted");
  }

  return (
    <div>
      <form onSubmit={(elem) => {
        formSubmit(elem)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App

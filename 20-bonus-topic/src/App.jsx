import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  //We always sent data parent to child by using props we can not send data child to parent mtlb uper ki or data nhi bhej sakte
  //So here is a trick to send data child to parent means uper ki or data bhej sakte h


  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme = {setTheme} />
    </div>
  )
}

export default App

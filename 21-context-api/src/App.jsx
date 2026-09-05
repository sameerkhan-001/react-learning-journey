import React from 'react'
import Navbar from './componentes/Navbar'
import { useState } from 'react'
import { useContext } from 'react'

const App = () => {


  const [theme, setTheme] = useState('Light')
    
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App

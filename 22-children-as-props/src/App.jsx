import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  //Its a Children as props drilling chapter not context api

  const [theme, setTheme] = useState('Light')
    
  return (
    <div>

      {/*children as props */}
      <Navbar theme = {theme}> 
        <h2>I am Navbar</h2>        {/*Share children as props */}
        <h2>Bhot acha nevbar</h2>   {/*Share children as props */}
      </Navbar>           {/*this time navbar has a clossing tag instead itself closing tag */}
    </div>
  )
}

export default App

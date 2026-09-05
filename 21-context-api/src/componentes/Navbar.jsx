import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  

  //we are using the context
  const [theme, setTheme] = useContext(themeDataContext)


  return (
    <div className={theme}>
      <h1>Sheriyansh</h1> 
      <Nav2 />
    </div>
  )
}

export default Navbar

import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Nav2 = () => {

  const [theme, setTheme]= useContext(themeDataContext);

  const themeChange = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  }

  return (
    <div>
      <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contect</h4>
        <h4>Help</h4>
        <button onClick={themeChange}>{theme}</button>
      </div>
    </div>
  )
}

export default Nav2

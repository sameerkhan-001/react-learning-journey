import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const themeDataContext = createContext()    //create context and store in themeDataContext variable

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
        <themeDataContext.Provider value={[theme, setTheme]}>    {/*We provide context for using */}
        {props.children}
      </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext

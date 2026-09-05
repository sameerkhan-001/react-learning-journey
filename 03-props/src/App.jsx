import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = "Aman" age = {19} marks = {100} img = "https://images.unsplash.com/photo-1783154955296-3afcd019da24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user = "Legend" age = {22} marks = {100} img="https://images.unsplash.com/photo-1768479397383-49806c934167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxMnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user = "Ashutosh" age = {22} marks = {100} img="https://images.unsplash.com/photo-1742712608977-4f47f57c6093?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2OHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App

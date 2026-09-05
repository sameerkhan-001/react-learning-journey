import React from 'react'
import { Link } from 'react-router-dom'
const Nevbar = () => {
  return (
    <div className='Navbar'>
        <h2>Sheriyansh</h2>
        <div> 
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product Page</Link>
      </div>
      </div>
  )
}

export default Nevbar

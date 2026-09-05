import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 items-center bg-cyan-900'>
      <h2 className='text-xl font-bold'>Legend</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        <Link className='text-lg font-medium' to='/product'>Product Page</Link>

      </div>
    </div>
  )
}

export default Navbar

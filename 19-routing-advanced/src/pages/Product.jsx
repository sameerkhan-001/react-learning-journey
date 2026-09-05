import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-4 gap-10'>
        
        <Link className='text-lg font-medium' to='men'>Men</Link>
        <Link className='text-lg font-medium' to='women'>Women</Link>
        <Link className='text-lg font-medium' to='kids'>Kids</Link>
        
      </div>
      <Outlet/>
    </div>
  )
}

export default Product

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
  const navigate  = useNavigate();  //useNavigate is a react routing dom hook it basicly direct u to a perticular page 

  return (
    <div className='bg-cyan-800'>
      <button onClick={()=> {
        navigate('/') //redirect to home page
      }}
      className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Return To Home page
        </button>

      <button onClick={()=> {
        navigate(-1)
      }}
       className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Back
      </button>

      <button onClick={()=> {
        navigate(+1)
      }}
       className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Next
      </button>
    </div>
  )
}

export default Nav2

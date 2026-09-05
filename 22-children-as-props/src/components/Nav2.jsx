import React from 'react'

const Nav2 = (props) => {
  return (
    <div>
      <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contect</h4>
        <h4>Help</h4>
        <h4>{props.theme}</h4>
      </div>
    </div>
  )
}

export default Nav2

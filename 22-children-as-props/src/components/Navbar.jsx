import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
    console.log(props);
  return (
    <div className='Navbar'>
      <h1>Sheriyansh</h1>
      <h2>{props.children[0]}</h2>  {/*children as props*/}
      <h2>{props.children[1]}</h2>  {/*children as props*/}
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar

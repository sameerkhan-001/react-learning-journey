import React from 'react'

const Navbar = (props) => {

    //by using this function after click on the button we update parent side data mtlb hm 
    //uper ki or child se parent ki or data send kar rhe h
    function changeTheme() {
        props.setTheme('Dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar

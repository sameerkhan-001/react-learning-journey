import React from 'react'

const App = () => {

  // function click() {
  //   console.log("Button is clicked");
  // }

  // function mouseEnter() {
  //   console.log("Mouse is Entered");
  // }

  function inputChanging(val) {
      console.log(val);
  }
  return (
    <div>
      {/* /* <button onClick={click}>Clicked</button>  (onClick event)
      <button onMouseEnter={mouseEnter}>Explore More</button>  //mouse Enter Event */} 

      {/* <button onClick={()=> { //we can right like this as well
        console.log("button is Clicked");
      }}>Clickeeed</button>
       */}
      
      <input onChange={function(elem) {
        inputChanging(elem.target.value);
      }} type="text" placeholder='Write Here' />

    </div>
  )
}

export default App

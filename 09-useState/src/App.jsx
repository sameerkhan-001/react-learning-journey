import React, { useState } from 'react'

const App = () => {

  //practice newly learn
  // const [num, setNum] = useState(10)
  // const [username, setUserName] = useState("Sameer")
  // const [users, setUsers] = useState([10,20,30])

  // function changeNum() {
  //   setNum(66);
  //   setUserName("Sam")
  //   setUsers([40,50,60])

  // }

  // Counter Mini Project :->

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function increaseBy5Num() {
    setNum(num+5)
  }

  return (
    <div>
      {/* <h1>My num is : {num}, and name is : {username} and Users are  : {users}</h1>
      <button onClick={changeNum}>Click Here</button> */}

      {/* //Counter mini project Start Here :->   */} 

      <h1>{num}</h1>
      <button onClick={increaseNum}> Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={increaseBy5Num}>Increase by 5</button>
    </div>
  )
}

export default App

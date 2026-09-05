import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  //USE EFFECT
  // useEffect runs side-effect logic after rendering, based on its dependency array.

// const [num, setNum] = useState(0)

//   // useEffect(function() {
//   //   console.log("useEffect is running...")     //<--- it called mounting
//   // })

//   useEffect(function() {
//     console.log("useEffect is running...")
//   }, [])  //<-- the empty array is a dependencies now ab har state pe useEffect run nhi hoga sirf ek baar hoga


  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(function() {
    console.log('use effect is running...')
  }, [a, b])

  return (
    <div>
      {/* <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1);
      }}>Click</button> */}

  

      <h1>A ki value {a}</h1>
      <h1>B ki value {b}</h1>
      <button onClick={() => {
        setA(a+1);
      }}>ClickA
      </button>

      <button onClick={() => {
        setB(b-1);
      }}>ClickB
      </button>

    </div>
  )
}

export default App
App
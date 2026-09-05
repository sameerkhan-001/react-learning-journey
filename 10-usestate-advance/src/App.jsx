import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({name : "Sameer", age : 21})
  
  const [num, setnum] = useState([10,20,30])

  const btnClicked = () => {
    // const newUser = {...user}
    // newUser.name = "sher"
    // newUser.age = 22
    // setUser(newUser);

    const newNum = [...num];
    newNum.push(99);
    setnum(newNum);

  }
  
  const [nom, setnom] = useState(10);

  const btnClick = () => {
    setnom(prev => (prev+1)); //we can update like this as well instead of making new var and updatew val
    setnom(prev => (prev+1));
    setnom(prev => (prev+1));
  }

  
  return (
    <div>
      <h1>{num} {user.name} {user.age} <br /> {nom}</h1>
      <button onClick={btnClick} >click here</button>
    </div>
  )
}

export default App

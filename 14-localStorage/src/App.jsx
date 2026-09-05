import React from 'react'

const App = () => {

  // localStorage.clear(); //it cleares the local storage

  // //We store data in localStorage in the form of [key value] pairs

  // localStorage.setItem('User', 'Sameer'); //we are storing data in localStorage in [key val] pairs
  // localStorage.setItem('age', '18')

  // const user = localStorage.getItem('User');  //it gives us value of the key here User is key and sameer is value
  // console.log(user);  //we can print val on console as well

  // const age = localStorage.getItem('age');
  // console.log(age);

  // localStorage.removeItem('User');  //it removes(delete) a perticular [key value] pair from the localStorage

  //we can store Objects in localStorage as well

  const users = {       //< -- Object
    name : 'Sammy',
    age : '20',
    city : 'New Delhi'
  }

  //we have to convert object in string if we want to store Object in the localstorage
  localStorage.setItem('User', JSON.stringify(users));  

  const details = JSON.parse(localStorage.getItem('User')); //now we convert string to JSON form 

  console.log(details); //now if we print so we get data in object form 
  console.log(details.city) //we can print object's key val pairs as well


  return (
    <div>
      App
    </div>
  )
}

export default App

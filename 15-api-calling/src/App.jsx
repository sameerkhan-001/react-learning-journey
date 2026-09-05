import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  // we can get data by api by using 2 method 
  //  -> using --> fetch()
  // -> using -- axios

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }


  // //fetch api by using Arrow function
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')  //fetch api

  //   const data = await response.json(); //get json data and store it in data var

  //   console.log(data);  //print data
  // }


  const [data, setData] = useState([])

  //Get Data by using AXIOS
  const getData = async() => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos')  //call api and get data by using axios
    // console.log(response.data)


    //call another api by using axios
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx) {
            return <div>
              <h3 key={idx}>Hello {elem.author}{idx+1}</h3>
              <img src={elem.download_url} alt="" />
            </div>
        })}
      </div>
    </div>
  )
}

export default App

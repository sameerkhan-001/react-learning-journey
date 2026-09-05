import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`);
    setUserData(response.data);
    console.log(response.data)
  }

  useEffect(function() {
    getData();
  }, [index])

    let printUserData = <h2 className='text-xs text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h2>

    if(userData.length>0) {
      printUserData = userData.map(function(elem, idx) {

        return <div key={idx} target='_blank'>
         <Card elem={elem}/>
        </div>
      })
    }

  return (
    <div className='h-screen overflow-auto bg-black p-4 text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      
      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
        style={{opacity: index == 1? 0.5:1}}
        onClick={() => {
          if(index > 1) {
            setIndex(index-1)
            setUserData([]);
          }
        }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 text-black rounded'>
        Prev
        </button>
        <h3>Page {index}</h3>
        <button 
        onClick={() => {
          setIndex(index+1);
          setUserData([]);
        }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 text-black rounded'>
        Next
        </button>
      </div>

    </div>
  )
}

export default App

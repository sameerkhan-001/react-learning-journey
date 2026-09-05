import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)
    console.log(task)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=> {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask)

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form 
      className='flex gap-4 lg:w-1/2 flex-col items-start p-10'
      onSubmit={(e) => {
        submitHandler(e)
      }}> 
      
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* FIRST INPUT FOR HEADING  */}
        <input type="text"
        placeholder='Enter Notes Heading'
        className='px-5 py-2 font-medium w-full border-2 rounded outline-none'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}/>

        {/* DETAIL'S INPUT  */}
        <textarea type="text"
        placeholder='Write Details'
        className='px-5 py-2 h-32 font-medium items-start flex-row w-full border-2 rounded outline-none' 
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}/>
        
        <button className='px-5 py-2 font-medium w-full cursor-pointer active:scale-95 border-2 rounded outline-none bg-white text-black'>Add Note</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl mb-2 font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {task.map(function(elem, idx) {
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-7 px-4 pb-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10)] '>
              <div>
                <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
                <p className='mt-4 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx);
              }} className='w-full cursor-pointer active:scale-95 bg-red-400 text-white py-1 rounded text-xs'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

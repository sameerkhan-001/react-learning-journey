import React from 'react'

const RightCardContent = (props) => {
    console.log(props)
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10 text-xl font-semibold flex justify-center items-center rounded-full'>{props.id}</h2>
            <div>
                <p className=' text-shadow-2xs text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum totam ex expedita maxime nesciunt quae?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor: props.color}} className=' text-white px-8 py-2 rounded-full font-medium'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className='bg-blue-600 text-white px-4 py-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent

import React from 'react'
import LeftContent from './LeftContent'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full w-2/3 rounde-4xl p-5 flex flex-nowrap gap-10 overflow-auto'>
      {props.users.map(function(elem, idx) {
        return <RightCard key = {idx} id = {idx+1} img = {elem.img} color = {elem.color} tag = {elem.tag}/>
      })}
    </div>
  )
}

export default RightContent

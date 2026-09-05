import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-70 overflow-hidden relative rounded-4xl'>
        
        <img className='h-full w-full object-cover ' src={props.img} alt="" />
        <RightCardContent id = {props.id} color = {props.color} tag = {props.tag}/>
        
    </div>
  )
}

export default RightCard

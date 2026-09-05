import React from 'react'

const Card = (props) => {
    // console.log(props)   //it returns an object

  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dignissimos.</p>
        <button>view profile</button>
    </div>
  )
}

export default Card

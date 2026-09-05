import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
 
    //useParams is a hook to give us perameters 
    const params = useParams();
    console.log(params.id); 

  return (
    
    <div>
      <h1>{params.id} Course Detail's Page</h1>
    </div>
  )
}

export default CourseDetail

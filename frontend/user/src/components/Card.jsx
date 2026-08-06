import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Card = (props) => {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => { navigate(`/courses/${props.id}`) }}
      className='h-auto w-110 bg-(--color-bg) border-2 text-(--color-primary) rounded-2xl cursor-pointer' >
      <img src={props.image} className={"rounded-t-2xl"} />

      <div className='flex flex-col items-center'>
        <p className='text-2xl pb-8'>{props.title}</p>

        <div className='flex gap-8 pb-8'>
          <div>
            <p>Category: {props.category}</p>
            <p>Level: {props.level}</p>
          </div>
          <div>
            <p>Duration: {props.duration}</p>
            <p>Price: {props.price}</p>
          </div>
        </div>

        <div className='flex flex-col gap-6 text-justify p-5'>
          <p>Description: {props.description}</p>
          <p>Instructor: {props.instructor}</p>
        </div>
      </div>
    </div >
  )
}

export default Card
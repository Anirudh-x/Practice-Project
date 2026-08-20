import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card'

function Courses() {

  const image = "https://img.magnific.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_test_b&w=740&q=80"
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/admin/courses")
    // const response = await axios.get("https://elearning-backend-git-deployment-anirudh-xs-projects.vercel.app/admin/courses")

    setData(response.data)
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
      <div className='bg-(--color-bg) p-8 grid grid-cols-3  justify-center items-center gap-8'>
        {data.map((course) => (
          <Card
            id={course.id}
            title={course.title}
            image={image}
            category={course.category}
            level={course.level}
            duration={course.duration}
            price={course.price}
          />
        ))}

      </div>
    </>
  )
}



// D6275



export default Courses
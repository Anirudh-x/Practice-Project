import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoursePage = () => {

  const { id } = useParams()

  const [data, setData] = useState([])

  const image = "https://img.magnific.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_test_b&w=740&q=80"

  const getCourseData = async () => {
    const response = await axios.get("http://localhost:3000/admin/courses")
    const courseData = response.data.data
    const courseFound = courseData.find((course) => course.id == id)

    setData(courseFound)
  }

  useEffect(() => {
    getCourseData()
  }, [id])

  return (
    <div>
      <img src={image} className='h-6 w-8' />
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>


  )
}

export default CoursePage





























// B0900
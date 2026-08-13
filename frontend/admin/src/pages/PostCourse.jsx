import React, { useState } from 'react'
import axios from 'axios'

const PostCourse = () => {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [level, setLevel] = useState("")
  const [price, setPrice] = useState("")
  const [duration, setDuration] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    let course = {
      title,
      category,
      level,
      price,
      duration
    }

    await axios.post("http://localhost:3000/admin/courses", course)
    alert("Data is submitted")

    setTitle("")
    setDuration("")
    setLevel("")
    setCategory("")
    setPrice("")

  }


  return (
    <div className="border-2 border-orange-500 flex flex-col justify-center items-center rounded-xl p-4">
      {/* <h2 className="text-orange-500 pb-5">Post Course</h2> */}

      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4"> */}
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button type="submit" className=' ' onClick={handleSubmit}>Submit</button>
      </form>
    </div >
  )
}

export default PostCourse
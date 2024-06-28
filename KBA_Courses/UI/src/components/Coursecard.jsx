import React from "react"
import { useState } from "react"
const Coursecard = ({course}) => {

  const [viewFullDescription, setviewFullDescription] = useState(false)
  let description = course.description;
  if(!viewFullDescription){
    description = description.substring(0,100)+ "...."
  }

  const toggleText= ()=>{
    setviewFullDescription(!viewFullDescription)
  }

  return (
    <>
    <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
    <h2 className=' font-bold text-lg text-purple-900 '>{course.title}</h2>
    <img src="src/assets/images/rp.png" alt="course thumbnail" className='w-80 h-40 ' />

    <p className='text-black group-hover:text-white my-2 mx-5'>{description}. </p>
    <button onClick={toggleText} className=' h-8 text-black font-medium hover:underline' >View More</button>
    <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">Learn More</a>
    </div>
    </>
  )
}

export default Coursecard
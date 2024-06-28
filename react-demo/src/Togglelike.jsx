import React from 'react'
import { useState } from 'react'

const Togglelike = () => {

    const[likestatus, setLikestatus] = useState('Not Liked')

    const togglelikes = ()=>{
        setLikestatus(!likestatus)
    }

  return (
    <>
    <h1>Like Status: {likestatus?'Not Liked':'Liked'}</h1>
    <button onClick={togglelikes}>Like</button>
    </>
  )
}

export default Togglelike
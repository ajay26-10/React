import React from 'react'
import { useState } from 'react'

const Like = () => {

const [likes, setLikes] = useState(0);

const incrementLikes = () => {
    setLikes(likes+1);
}
  return (
    <>
    <h1>No of Likes : {likes}</h1>
    <button onClick={incrementLikes}>Like</button>
    </>
  )
}

export default Like
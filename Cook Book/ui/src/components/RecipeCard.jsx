import React, { useState } from 'react'
const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
        <h2 className=' font-bold text-lg text-purple-900 '>{recipe.title}</h2>
        <p className='text-black group-hover:text-white my-2 mx-5'>{recipe.ingredients} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{recipe.description} </p>
      </div>
    </>
  )
}
export default RecipeCard
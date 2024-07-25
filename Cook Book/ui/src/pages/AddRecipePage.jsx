import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddRecipePage = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('')
  const [description, setDescription] = useState('');

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newRecipe = {
      title,
      ingredients,
      description,
     
    }
    const res = addRecipeSubmit(newRecipe)
    toast.success('Recipe added successfully')
    navigate('/home')
  }

  const addRecipeSubmit = async (newRecipe) => {
    const res = await fetch('http://localhost:5000/add-recipe', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
    return res;
  }

  return (
    <>

      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Recipe
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Recipe Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Recipe Name"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ingredients"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Ingredients
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"  
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Ingredients Required"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Description of cooking process"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>


              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddRecipePage
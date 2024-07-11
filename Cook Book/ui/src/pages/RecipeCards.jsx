import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'



const RecipeCards = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
  
        const fetchRecipes = async () => {
            try {
                const res = await fetch('/api/recipes');
                const data = await res.json()
                setRecipe(data)
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchRecipes()
    },[])
    
    return (
        <>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {recipe.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default RecipeCards
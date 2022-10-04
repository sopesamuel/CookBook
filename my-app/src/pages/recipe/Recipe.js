import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Recipe.css'

export default function Recipe() {
    const {id} = useParams()
    const url = 'http://localhost:7000/recipes/' + id
    const {data: recipe, isPending, error} = useFetch(url)
  return (
    <div className='recipe'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {recipe && (
        <div>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to prepare.</p>
        <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
     
        </ul>
        
        <p className='method'>{recipe.method}</p>
        </div>
        )}
    </div>
  )
}


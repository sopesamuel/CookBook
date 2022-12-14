import React from 'react'
import ListRecipe from '../../components/ListRecipe'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'

export default function Home() {
    const {data, isPending, error} = useFetch('http://localhost:7000/recipes')
  return (
    <div className='home'>
    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}
    {data && <ListRecipe recipes={data}/>}
    </div>
  )
}

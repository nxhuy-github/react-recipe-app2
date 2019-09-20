import React, {useState, useEffect} from 'react'
import API_KEY from '../API_KEY'
import {Link} from 'react-router-dom'
import './App.css';

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({
    recipe: {}
  })

  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => {
    const api_call = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${props.match.params.id}`)
    const data = await api_call.json()
    setRecipe(data.recipe)
    console.log(data)
  }

  return (
    <div className="container">
      <div className="active-recipe">
        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
        <h3 className="active-recipe__title">{ recipe.title }</h3>
        <h4 className="active-recipe__publisher">
          Publisher: <span>{ recipe.publisher }</span>
        </h4>
        <p className="active-recipe__website">Website: 
          <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
        </p>
        <button className="active-recipe__button">
          <Link to="/">Go Home</Link>
        </button>
      </div>
  </div>
  )
}

export default Recipe
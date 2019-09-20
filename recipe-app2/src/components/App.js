import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import Recipes from './Recipes'
import API_KEY from '../API_KEY'

function App() {
  const [recipes, setRecipes] = useState([])
  const getRecipe = async (event) => {
    event.preventDefault()
    const recipeName = event.target.elements.recipeName.value
    const url = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    const api_call = await fetch(url)
    const data = await api_call.json()
    setRecipes(data.recipes)
    console.log(recipes)
  }

  /**
   * use localStorage
   * save data in localStorage only when we have data in there
   * At the very beginning, we have nothing
   */
  useEffect(() => {
    const data = localStorage.getItem("recipes")
    if (data !== null) {
      setRecipes(JSON.parse(data))
    }
  }, [])

  /**
   * Every time "recipes" has changed, we store it in localStorage
   */
  useEffect(() => {
    if (recipes.length !== 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes))
    }
  }, [recipes])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe}/>
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;

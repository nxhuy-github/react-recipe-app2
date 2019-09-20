import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes'

function App() {

  const API_KEY = '86176d2d21b6bf0e0e7b46420c6c2615'

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

import React from 'react'
import ReactDOM from 'react-dom'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'
import './stylesheets/global.css'

import recipeListJson from './recipeList.json'

const container = document.getElementById('ROOT')

ReactDOM.render(
    <div id="container">
        <div className="row">
            <h1 className="page-headding">Recipator App</h1>
            <h2> Choose your recipies, cook your recipies, profit !</h2>
        </div>
        <div className="row">
            <RecipeList>
                {buildRecipeComponentsFromList(recipeListJson)}
            </RecipeList>
        </div>
    </div>,
    container
)

function buildRecipeComponentsFromList(recipeList) {
    return recipeList.map((recipe, index) =>
        <Recipe title={recipe.title}
            description={recipe.description}
            imgUrl={recipe.imgUrl}
            incredients={recipe.incredients}
            key={index}
        />
    )
}
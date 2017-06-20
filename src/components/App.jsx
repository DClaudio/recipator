import React from 'react'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import Aggregator from './Aggregator'
import './../stylesheets/global.css'

import recipeListJson from './../recipeList.json'

export default function(){
    return <div id="container">
        <div className="row">
            <h1 className="page-headding">Recipator App</h1>
            <h2> Choose your recipies, cook your recipies, profit !</h2>
        </div>
        <div className="row">
            <Aggregator incredients={[]} />
        </div>
        <div className="row">
            <RecipeList>
                {buildRecipeComponentsFromList(recipeListJson)}
            </RecipeList>
        </div>
    </div>
}

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
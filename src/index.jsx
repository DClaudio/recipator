import React from 'react'
import ReactDOM from 'react-dom'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'
import './stylesheets/global.css'

const container = document.getElementById('ROOT')
ReactDOM.render(
    <div id="container">
        <h1 className="page-headding">Recipator App</h1>
        <RecipeList>
            <Recipe title="First recipe" description="this is the best one" imgUrl="http://placehold.it/300x200" />
            <Recipe title="Second recipe" description="this is the second best one" imgUrl="http://placehold.it/300x200" />
        </RecipeList>
    </div>,
    container
)
import React, { Component } from 'react'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import Aggregator from './Aggregator'
import { computeNewState } from './AggregationLogic'
import './../stylesheets/global.css'

import recipeListJson from './../recipeList.json'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIncredients: []
        }
        this.handleSelectRecipe = this.handleSelectRecipe.bind(this)
    }

    handleSelectRecipe(newIncredients, isAppend) {
        this.setState(prevState => ({
            selectedIncredients: computeNewState(prevState.selectedIncredients, newIncredients, isAppend)
        }))
    }

    render() {
        return <div id="container">
            <div className="row">
                <h1 className="page-headding">Recipator App</h1>
                <h2> Choose your recipies, cook your recipies, profit !</h2>
            </div>
            <div className="row">
                <Aggregator incredients={this.state.selectedIncredients} />
            </div>
            <div className="row">
                <RecipeList>
                    {buildRecipeComponentsFromList(recipeListJson, this.handleSelectRecipe)}
                </RecipeList>
            </div>
        </div>
    }
}

function buildRecipeComponentsFromList(recipeList, clickHandler) {
    return recipeList.map((recipe, index) =>
        <Recipe
            selectHandler={clickHandler}
            title={recipe.title}
            description={recipe.description}
            imgUrl={recipe.imgUrl}
            incredients={recipe.incredients}
            key={index}
        />
    )
}

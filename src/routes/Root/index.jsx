import React, { Component } from 'react'
import RecipeList from '~/components/RecipeList'
import Recipe from '~/components/Recipe'
import Aggregator from '~/components/Aggregator'
import { computeNewState } from '~/components/AggregationLogic'
import '~/stylesheets/global.css'

export default class Root extends Component {

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
        const { recipeList } = this.props
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
                    {buildRecipeComponentsFromList(recipeList, this.handleSelectRecipe)}
                </RecipeList>
            </div>
        </div>
    }
}

function buildRecipeComponentsFromList(recipeList, clickHandler) {
    return recipeList.map((recipe, index) =>
        <Recipe
            selectHandler={clickHandler}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            imgUrl={recipe.imgUrl}
            incredients={recipe.incredients}
            key={index}
        />
    )
}

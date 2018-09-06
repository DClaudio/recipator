import React, { Component } from 'react'
import RecipeList from '~/components/recipeList'
import Recipe from '~/components/recipe'
import IncredientsList from '~/components/incredientsList'
import { computeNewState } from '~/components/AggregationLogic'
import '~/stylesheets/root.css'

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
        return <div className="mainPage">
            <section className="recipes-section">
                <div className="container">
                    <h2> Choose your recipies, cook your recipies, profit !</h2>
                    <RecipeList>
                        {buildRecipeComponentsFromList(recipeList, this.handleSelectRecipe)}
                    </RecipeList>
                </div>
            </section>
            <section className="incredients-section">
                <div className="container">
                    <IncredientsList className="agregated__incredientsList" incredients={this.state.selectedIncredients} />
                </div>
            </section>
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

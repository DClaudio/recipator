import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import _find from 'lodash/find'
import Root from '~/routes/Root'
import RecipePage from '~/routes/RecipePage'
import '~/stylesheets/global.css'

import recipeListJson from '~/recipeList.json'

const RecipePageRoute = ({ match }) => {
    let currentRecipe = _find(recipeListJson, { id: match.params.recipeId })
    return <RecipePage recipe={currentRecipe} />
}

export default class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <Router>
            <div>
                <Route exact path="/" render={() => (<Root recipeList={recipeListJson} />)} />
                <Route path="/recipes/:recipeId" component={RecipePageRoute} />
            </div>
        </Router>
    }
}


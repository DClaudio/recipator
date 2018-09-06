import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { find, propEq } from 'ramda'
import Root from '~/routes/root'
import Layout from '~/components/layout'
import RecipePage from '~/routes/recipePage'
import '~/stylesheets/global.css'

import recipeListJson from '~/recipeList.json'

export default function () {
    const findRecipe = (recipeId) => find(propEq("id", recipeId))(recipeListJson);
    const RecipeDescPage = ({ match }) => <RecipePage recipe={findRecipe(match.params.recipeId)} />;
    const RootPage = () => <Root recipeList={recipeListJson} />

    return <Layout>
        <Router>
            <main>
                <Route exact path="/" component={RootPage} />
                <Route path="/index.html" component={RootPage} />
                <Route path="/recipes/:recipeId" component={RecipeDescPage} />
            </main>
        </Router>
    </Layout>
}
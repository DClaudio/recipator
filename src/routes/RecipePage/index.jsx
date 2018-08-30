import React, { Component } from 'react'
import Elm from 'react-elm-components'
import  {First} from '~/first'
import IncredientsList from '~/components/IncredientsList'

export default function ({ recipe }) {
    console.log("is: ", First)
    return <div className="fullRecipe">
        This is the recipe page:
        <IncredientsList className="fullRecipe__incredientsList" incredients={recipe.incredients} />
        <div>
            <p>This is where the elm test is rendered: </p>
            <Elm src={First} />
        </div>
    </div>
}
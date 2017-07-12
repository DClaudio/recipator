import React, { Component } from 'react'
import IncredientsList from '~/components/IncredientsList'

export default function ({ recipe }) {
    return <div className="fullRecipe">
        This is the recipe page:
        <IncredientsList className="fullRecipe__incredientsList" incredients={recipe.incredients} />
    </div>
}
import React, { Component } from 'react'
import IncredientsList from '~/components/IncredientsList'

export default function ({ recipe }) {
    return <div>
        This is the recipe page:
        <IncredientsList incredients={recipe.incredients} />
    </div>
}
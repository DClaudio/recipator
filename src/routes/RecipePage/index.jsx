import React, { Component } from 'react'

export default function () {
    return <div>
        This is a recipe page
        </div>
}

function renderIncredientsList(incredients) {
    return incredients.map((incredient, index) =>
        <li key={index}>{incredient.name}: {incredient.quantity}</li>
    )
}
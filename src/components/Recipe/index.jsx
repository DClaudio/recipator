import React from 'react'
import './styles.css'

function renderIncredientsList(incredients) {
    return incredients.map((incredient, index) =>
        <li key={index}>{incredient.name}: {incredient.quantity}</li>
    )
}

export default function ({ title, description, imgUrl, incredients = [] }) {
    return <div className="recipeItem">
        <img className="full-width" src={imgUrl} />
        <h4>{title}</h4>
        <p>{description}</p>
        <ul className="recipeItem__incredients">
            {renderIncredientsList(incredients)}
        </ul>
    </div>
}
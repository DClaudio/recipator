import React from 'react'
import './recipeList.css'

export default function ({ children }) {
    let wrappedChildren = React.Children.map(children, function (child, index) {
        return <div className="column-third" data-col={index}> {child}</div>
    })
    return <div className="recipe-list">
        {wrappedChildren}
    </div>
}
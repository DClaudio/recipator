import React from 'react'
import './styles.css'

export default function ({ children }) {
    var wrappedChildren = React.Children.map(children, function (child, index) {
        return <div className="column-third column" data-col={index}> {child}</div>
    })
    return <div className="recipe-list">
        {wrappedChildren}
    </div>
}
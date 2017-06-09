import React from 'react'

export default function ({ title, description, imgUrl }) {
    return <div className="recipe-item">
        <img className="full-width" src={imgUrl} />      
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
}
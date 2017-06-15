import React from 'react'
import './styles.css'

export default function ({ title, description, imgUrl }) {
    return <div className="recipe-item">
        <img className="full-width" src={imgUrl} />      
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
}
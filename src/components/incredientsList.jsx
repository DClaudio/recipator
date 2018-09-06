import React, { Component } from 'react'
import classnames from 'classnames'
import './incredientsList.css'

export default function ({ incredients, className }) {
    const list = incredients.map(
        (elem, index) => <li key={index}>{elem.name} {elem.quantity} {elem.unit}</li>
    )
    let cssClass = classnames('incredientsList', className)
    return <div className={cssClass}>
        <h3>Incredients required: </h3>
        { list.length == 0 ? <p> You haven't selected any recipies. </p> :  null }
        <ul>
            {list}
        </ul>
    </div>
}
import React, { Component } from 'react'
import classnames from 'classnames'
import './styles.css'

export default function ({ incredients, className }) {
    const list = incredients.map(
        (elem, index) => <li key={index}>{elem.name} {elem.quantity} {elem.unit}</li>
    )
    let cssClass = classnames('incredientsList', className)
    return <div className={cssClass}>
        {list.length == 0 ? null : <h3>Incredients required: </h3>}
        <ul>
            {list}
        </ul>
    </div>
}
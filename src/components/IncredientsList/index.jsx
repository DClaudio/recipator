import React, { Component } from 'react'
import './styles.css'

export default function ({ incredients, className }) {
    const list = incredients.map(
        (elem, index) => <li key={index}>{elem.name} {elem.quantity} {elem.unit}</li>
    )
    return <div className={className}>
        {list.length == 0 ? null : <h3>Incredients required: </h3>}
        <ul>
            {list}
        </ul>
    </div>
}
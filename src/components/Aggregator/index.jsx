import React, { Component } from 'react'
import './styles.css'

export default function ({ incredients }) {
    const list = incredients.map(
        (elem, index) => <li key={index}>{elem.name} {elem.quantity}</li>
    )
    return <div>
        {list.length == 0 ? null : <h3>Incredients required: </h3>}
        <ul>
            {list}
        </ul>
    </div>
}
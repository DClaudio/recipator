import React, { Component } from 'react'
import './styles.css'

export default function ({ incredients }) {
    const list = aggregateIncredients(incredients)
        .map((elem, index) =>
            <li key={index}>{elem.name} {elem.quantity}</li>
        )
    return <div>
        <ul>
            {list}
        </ul>
    </div>
}

export function aggregateIncredients(incredientList = []) {
    const groupedByName = groupBy("name", incredientList)
    return Object.keys(groupedByName).map(key => {
        let quantity = groupedByName[key].reduce((acc, item) => acc + item.quantity, 0)
        return { name: key, quantity }
    })
}

function groupBy(prop, array) {
    return array.reduce((groups, item) => {
        var val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
}
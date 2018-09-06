import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/routes/app'
import '~/stylesheets/global.css'

const container = document.getElementById('ROOT')

ReactDOM.render(
    <App />,
    container
)
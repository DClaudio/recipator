import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/routes/App'
import '~/stylesheets/global.css'

const container = document.getElementById('ROOT')

ReactDOM.render(
    <App />,
    container
)
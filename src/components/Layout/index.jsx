import React, { Component } from 'react'
import './styles.css'

export default class Layout extends Component {
    render() {
        return <div className="layout">
            <Header />
            {this.props.children}
            <Footer />
        </div>
    }
}

const Header = () => <header className="top">
    <h1 className="container">Recipator App</h1>
</header>

const Footer = () => <footer className="bottom">
    <div className="container">
        &#169; 2018 Recipator
    </div>
</footer>
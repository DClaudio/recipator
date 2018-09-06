import React, { Component } from 'react'
import  '~/stylesheets/layout.css'

export default function ({ children }) {
    const Header = () => <header className="top">
        <h1 className="container">Recipator App</h1>
    </header>
    const Footer = () => <footer className="bottom">
        <div className="container">&#169; 2018 Recipator</div>
    </footer>

    return <div className="layout">
        <Header />
        {children}
        <Footer />
    </div>
}
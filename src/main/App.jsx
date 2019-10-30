import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../templates/header/Header'
import Footer from '../templates/footer/Footer'

import Routes from './Routes'

export default props => (
    <div className="container">
        <Router>
            <Header />
            <Routes />
            <Footer /> 
        </Router>
    </div>
)
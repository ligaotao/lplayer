
import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './views/AppHeader'
import routes from 'routes'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppHeader msg='hello' />
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}

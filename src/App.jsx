
import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from 'routes'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {
  state = {
    open: false
  }
  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </MuiThemeProvider>
      </div>
    )
  }
}


import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './views/AppHeader'
import AppMenu from './views/AppMenu'
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
        <AppHeader msg='知乎专栏'
          onClick={() => this.setState({open: true})}
        />
        <MuiThemeProvider>
          <AppMenu open={this.state.open}
            onClick={() => this.setState({open: false})}
          />
        </MuiThemeProvider>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}

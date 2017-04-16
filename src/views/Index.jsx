import React, { Component, PropTypes } from 'react'
import AppHeader from '../components/AppHeader'
import AppMenu from '../components/AppMenu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {renderRoutes} from 'react-router-config'
import '../App.css'

export default class App extends Component {
  state = {
    open: false
  }
  static propTypes = {
    route: PropTypes.object
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
        <div className='list'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
      </div>
    )
  }
}

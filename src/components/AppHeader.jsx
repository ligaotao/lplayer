import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {AppBar} from 'material-ui'

export default class AppHeader extends React.Component {
  handelTab = () => {
    console.log(1)
  }
  static propTypes = {
    onClick: React.PropTypes.func,
    msg: React.PropTypes.string
  }
  render () {
    return (
      <div id='Hello'>
        <MuiThemeProvider>
          <AppBar
            title={this.props.msg}
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onTouchTap={this.props.onClick}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

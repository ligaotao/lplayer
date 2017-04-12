import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {AppBar} from 'material-ui'

const Hello = () => (
  <div id='Hello'>
    <MuiThemeProvider>
      <AppBar
        title='Title'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
      />
    </MuiThemeProvider>
  </div>
)

export default Hello

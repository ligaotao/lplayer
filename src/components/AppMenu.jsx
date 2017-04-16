import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class DrawerSimpleExample extends React.Component {

  static propTypes = {
    open: React.PropTypes.bool,
    onClick: React.PropTypes.func
  }
  render () {
    return (
      <Drawer open={this.props.open}>
        <MenuItem
          onTouchTap={this.props.onClick}
        >关闭</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    )
  }
}

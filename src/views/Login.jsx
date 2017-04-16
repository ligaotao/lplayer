import React, { Component, PropTypes } from 'react'
import {RaisedButton} from 'material-ui'
import axios from 'axios'
import './Login.css'

export default class MainView extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      loginImg: '',
      imgWidth: 375,
      imgHeight: 676
    }
    this.goIndex = this.goIndex.bind(this)
  }
  componentDidMount () {
    let width = window.innerWidth
    let height = window.innerHeight
    this.setState({imgHeight: height, imgWidth: width})
    axios.get(`/api/7/prefetch-launch-images/${width}*${height}`)
      .then((res) => {
        console.log(res.data)
        this.setState({loginImg: res.data.creatives[0].url})
      })
      .catch(err => {
        console.log(err)
      })
  }
  goIndex () {
    console.log(this.props)
    this.props.history.push('/index')
    // browserHistory.push('/index')
  }
  render () {
    const style = {
      color: '#fff'
    }
    return (
      <div className='login-box'>
        <img
          src={this.state.loginImg}
          height={this.state.imgHeight}
          width={this.state.imgWidth}
        />
        <div className='login-button'>
          <RaisedButton label='跳过' style={style} onTouchTap={this.goIndex} />
        </div>
      </div>
    )
  }
}

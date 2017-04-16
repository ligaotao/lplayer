import React, {Component} from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'
import axios from 'axios'
export default class NewList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: []
    }
  }
  componentDidMount () {
    axios.get('/api/4/news/latest')
      .then((res) => {
        console.log(res.data)
        this.setState({lists: res.data.stories})
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    console.log(this.state.lists)
    return (
      <div>
        {this.state.lists.map(function (list) {
          return (
            <Card>
              <CardMedia
                overlay={<CardTitle title='' subtitle={list.title} />}
              >
                <img src={list.images[0]} />
              </CardMedia>
            </Card>
          )
        })}
      </div>
    )
  }
}

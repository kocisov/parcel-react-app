import React, { Component, Fragment } from 'react'
import Title from './Title'

export default class App extends Component {
  static defaultProps = {
    cool: true,
  }

  render() {
    return (
      <Fragment>
        <Title>Lol</Title>
      </Fragment>
    )
  }
}

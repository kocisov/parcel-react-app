import React, { Component, Fragment } from 'react'
import Text from './Text'
import Title from './Title'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>Welcome</Title>
        <Text>Lorem impsum...</Text>
      </Fragment>
    )
  }
}

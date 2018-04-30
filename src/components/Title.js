import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  render() {
    return <h2 className="title">{this.props.children}</h2>
  }
}

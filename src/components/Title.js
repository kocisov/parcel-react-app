import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Title extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  render() {
    const { children, ...props } = this.props
    const className = classNames('title', {})

    return (
      <h2 className={className} {...props}>
        {children}
      </h2>
    )
  }
}

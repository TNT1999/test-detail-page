import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string
  };

  render() {
    const { href,children } = this.props
    return (
      <div className="tag">
        <a href={href}>
          {children}
        </a>
      </div>
    );
  }
}

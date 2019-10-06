import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string
  };

  render() {
    const { href } = this.props
    return (
      <div className="tag">
        <a href={href}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@blueprintjs/core";

export default class TextIcon extends Component {
  static propTypes = {
    children: PropTypes.any,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    src: PropTypes.string,
    tick: PropTypes.bool,
  };

  render() {
    const { children, icon, iconSize, src, tick } = this.props
    return (
      <div className="text-icon">
        {icon && (<Icon icon={icon} iconSize={iconSize} color='rgb(9, 132, 227)' />)}
        <div className='img-text'>
          {src && (<img src={src} className='imgAvt' />)}
          <span>{children}</span>
        </div>
        {tick && (<Icon icon='endorsed' color='rgb(46, 204, 113)' iconSize='14' className='check' />)}
      </div>
    );
  }
}

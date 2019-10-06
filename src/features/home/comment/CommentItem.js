import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

export default class CommentItem extends Component {
  static propTypes = {
    srcAvatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    children: PropTypes.string,
    timeago: PropTypes.string,
  };

  render() {
    const { srcAvatar, nickname, children, timeago } = this.props
    return (
      <div className="comment-item">
        <div className='wrap-item'>
          <div className='wrap-info'>
            <img src={srcAvatar} />
            <div className='wrap-info-name'>
              <div className='info-name'>
                <a href='#'>
                  <span className='nickname'>{nickname}</span>
                </a>
                <div className='div-rating'>
                  <StarRatings
                    rating={4.5}
                    starRatedColor="rgb(241, 196, 15)"
                    numberOfStars={5}
                    name='rating'
                    starDimension='16px'
                    starSpacing='0'
                  />
                </div>
                <span className='time-ago'>{timeago}</span>
              </div>
              {children && (<div className='comment'>
                <p>{children}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

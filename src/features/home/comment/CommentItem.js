import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import moment from 'moment'

export default class CommentItem extends Component {
  static propTypes = {
    srcAvatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    children: PropTypes.string,
    timeago: PropTypes.string,
    avgRating: PropTypes.number
  };

  render() {
    const { srcAvatar, nickname, children, timeago, avgRating } = this.props
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
                    rating={avgRating}
                    starRatedColor="rgb(241, 196, 15)"
                    numberOfStars={5}
                    name='rating'
                    starDimension='16px'
                    starSpacing='0'
                  />
                </div>
                <span className='time-ago'>{moment(timeago).fromNow()}</span>
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

import React, { Component } from 'react';
import CommentItem from './CommentItem';

export class ComponentList extends Component {

  render() {
    return (
      <div className='rating'>
        <div className='wrap-rating'>
          {<label className='title'>Ratings ({this.props.comments.length})</label>}
          <div className='rating-content'>
            {
              this.props.comments.map((comment, index) => {
                return (
                  <CommentItem srcAvatar={comment.player.avatar} nickname={comment.player.username} key={index}>
                    {comment.comment}
                  </CommentItem>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default ComponentList

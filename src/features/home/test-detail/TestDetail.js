import React, { Component } from 'react';
import { Icon, Button } from "@blueprintjs/core";
import TextIcon from '../component/icon-text/TextIcon';
import Tag from '../component/tag/Tag';
import StarRatings from 'react-star-ratings';

export class TestDetail extends Component {

  render() {
    if (!this.props.test.id) return null;
    return (
      <div className='box-content'>
        <div className='wrap-title'>
          <div className='title-box'>
            <a href='#' className='title'>{this.props.test.name}</a>
          </div>
          <div className='list-icon'>
            <div className='icon'>
              <a href='#'>
                <Icon icon='add' color='#5c7080' />
              </a>
              <a href='#'>
                <Icon icon='bookmark' color='#5c7080' />
              </a>
              <a href='#'>
                <Icon icon='timeline-area-chart' color='#5c7080' />
              </a>
              <a href='#'>
                <Icon icon='share' color='#5c7080' />
              </a>
              <a href='#'>
                <Icon icon='more' color='#5c7080' />
              </a>
            </div>
          </div>
        </div>

        <div className='info'>
          <div className='info-qtwor'>
            <TextIcon icon='help'>{this.props.test.totalQuestions} câu</TextIcon>
            <TextIcon icon='time'>{this.props.test.time} phút</TextIcon >
            <TextIcon icon='timeline-bar-chart'>{this.props.test.viewAccess} lượt làm</TextIcon >
            <TextIcon src={this.props.test.owner.avatar} tick>{this.props.test.owner.username}</TextIcon>
            <div className='wrap-rating'>
              <StarRatings
                rating={this.props.test.avgRating}
                starRatedColor="rgb(241, 196, 15)"
                numberOfStars={5}
                starDimension='16px'
                starSpacing='0'
              />
              <span className='total-rating'>({this.props.test.totalViewRating})</span>
            </div>
          </div>
          <div className='info-tag-createdAt'>
            <div className='list-tag'>
              <Tag>{this.props.test.tag}</Tag>
            </div>
            <div className='createdAt'>
              <TextIcon icon='calendar'>{this.props.test.createdAt}</TextIcon>
            </div>
          </div>
          <div className='info-description'>
            <p>{this.props.test.description}</p>
          </div>
        </div>

        <div className='wrap-play-btn'>
          <Button className='play-btn'>
            <Icon icon='play' color='white' />
            <span>Play test</span>
          </Button>
        </div>
      </div>
    );
  }
}
export default TestDetail

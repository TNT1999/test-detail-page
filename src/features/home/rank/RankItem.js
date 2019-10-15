import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RankItem extends Component {
  static propTypes = {
    srcIcon: PropTypes.string,
    iconText: PropTypes.number,
    srcAvatar: PropTypes.string.isRequired,
    children: PropTypes.string,
    fullname: PropTypes.string,
    totalCorrect: PropTypes.number.isRequired,
    totalQuestion: PropTypes.number.isRequired,
    srcInfoUser: PropTypes.string
  };

  render() {
    const { srcIcon, iconText, srcAvatar, username, totalCorrect, totalQuestion, srcInfoUser, fullname } = this.props
    return (
      <div className="rank-item">
        <div className='wrap-item'>
          <div className='icon-rank'>
            {srcIcon ? (<img src={srcIcon} alt='Lỗi không tải được' />) : (<span className='index'>{iconText}</span>)}
          </div>
          <div className='info-user'>
            <a href={srcInfoUser ? srcInfoUser : '#'}>
              <div className='wrap-info'>
                <img src={srcAvatar} alt='lỗi không tải được' />
                <div className='info-name'>
                  <span className='nickname'>{username}</span>
                  {fullname && <div className='pd'></div>}
                  <span className='fullname'>{fullname}</span>
                </div>
              </div>
            </a>
          </div>
          <div className='result'>
            <span className='total-correct'>{totalCorrect}</span>
            <span>/</span>
            <span className='total-question'>{totalQuestion}</span>
          </div>
        </div>
      </div>
    );
  }
}

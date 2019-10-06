import React, { Component } from 'react';
import RankItem from './RankItem';

export class RankList extends Component {
  myswitchRender = ((rank, index) => {
    switch (index) {
      case 0: {
        return (<RankItem
          key={index} iconText={10}
          srcAvatar={rank.player.avatar}
          totalCorrect={rank.totalCorrect}
          totalQuestion={this.props.test.totalQuestions}
          username={rank.player.username}
          fullname={rank.player.fullname}
          srcIcon='https://tungtung.vn/static/images/scores/first-place.png' />)
      }
      case 1: {
        return (<RankItem
          key={index} iconText={10}
          srcAvatar={rank.player.avatar}
          totalCorrect={rank.totalCorrect}
          totalQuestion={this.props.test.totalQuestions}
          username={rank.player.username}
          fullname={rank.player.fullname}
          srcIcon='https://tungtung.vn/static/images/scores/second-place.png' />)
      }
      case 2: {
        return (<RankItem
          key={index} iconText={10}
          srcAvatar={rank.player.avatar}
          totalCorrect={rank.totalCorrect}
          totalQuestion={this.props.test.totalQuestions}
          username={rank.player.username}
          fullname={rank.player.fullname}
          srcIcon='https://tungtung.vn/static/images/scores/third-place.png' />)
      }

      default:
        {
          return (<RankItem
            key={index} iconText={10}
            srcAvatar={rank.player.avatar}
            totalCorrect={rank.totalCorrect}
            totalQuestion={this.props.test.totalQuestions}
            username={rank.player.username}
            fullname={rank.player.fullname}
            iconText={index + 1} />
          )
        }
    }
  })
  render() {
    if (!this.props.ranks.length) return null;
    return (
      <div className='content-right'>
        <div className='box-content'>
          <div className='wrap-title'>
            <label>Rank({this.props.ranks.length})</label>
            <div className='wrap-rank'>
              {
                this.props.ranks.map((rank, index) =>
                  this.myswitchRender(rank, index)
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RankList

import React, { Component } from 'react';
import RankItem from './RankItem';
import axios from 'axios';

export class RankList extends Component {
  
  render() {
    if (!this.props.test.id) return null;
    return (
      <div className='content-right'>
        <div className='box-content'>
          <div className='wrap-title'>
            <label>Rank({this.props.test.Rank.length})</label>
            <div className='wrap-rank'>
              {
                this.props.test.Rank.map((rank, index) => {
                  if (index === 0)
                    return (<RankItem
                      key={index} iconText={10}
                      srcAvatar={rank.avatar}
                      totalCorrect={rank.totalCorrect}
                      totalQuestion={this.props.test.totalQuestions}
                      username={rank.username}
                      fullname={rank.fullname}
                      srcIcon='https://tungtung.vn/static/images/scores/first-place.png' />)
                  else if (index === 1)
                    return (<RankItem
                      key={index} iconText={10}
                      srcAvatar={rank.avatar}
                      totalCorrect={rank.totalCorrect}
                      totalQuestion={this.props.test.totalQuestions}
                      username={rank.username}
                      fullname={rank.fullname}
                      srcIcon='https://tungtung.vn/static/images/scores/second-place.png' />)

                  else if (index === 2)
                    return (<RankItem
                      key={index} iconText={10}
                      srcAvatar={rank.avatar}
                      totalCorrect={rank.totalCorrect}
                      totalQuestion={this.props.test.totalQuestions}
                      username={rank.username}
                      fullname={rank.fullname}
                      srcIcon='https://tungtung.vn/static/images/scores/third-place.png' />)

                  else
                    return (<RankItem
                      key={index} iconText={10}
                      srcAvatar={rank.avatar}
                      totalCorrect={rank.totalCorrect}
                      totalQuestion={this.props.test.totalQuestions}
                      username={rank.username}
                      fullname={rank.fullname}
                      iconText={index + 1} />)
                })
              }
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default RankList

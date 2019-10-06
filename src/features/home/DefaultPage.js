import React, { Component } from 'react';
import axios from 'axios';
import TestDetail from './test-detail/TestDetail'
import RankList from './rank/RankList'
import CommentList from './comment/CommentList'

export class DefaultPage extends Component {
  constructor() {
    super();
    this.state = {
      test: {},
      comments: [],
      ranks: []
    };
  }

  componentDidMount() {
    this.getTest()
    this.getComonents()
    this.getRanks()
  }

  getTest = async () => {
    try {
      let res = await axios.get("http://5d997652564143001405186b.mockapi.io/api/test/1");
      let test = res.data;
      this.setState({ test });
    } catch (e) {
      console.log(e)
    }
  };


  getComonents = async () => {
    try {
      let res = await axios.get("http://5d997652564143001405186b.mockapi.io/api/test/1/comments")
      let comments = res.data;
      this.setState({ comments })
    } catch (e) {
      console.log(e)
    }
  }

  getRanks = async () => {
    try {
      let res = await axios.get("http://5d997652564143001405186b.mockapi.io/api/test/1/rank?orderBy=totalCorrect&&order=desc")
      let ranks = res.data;
      this.setState({ ranks })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    if (!this.state.test.id) return null;
    return (
      <div className="wrapper">
        <div className='container'>
          <div className='content-left'>
            <TestDetail test={this.state.test} />
            <CommentList comments={this.state.comments} />
          </div>
          <RankList ranks={this.state.ranks} test={this.state.test} />
        </div>
      </div>
    );
  }
}
export default DefaultPage

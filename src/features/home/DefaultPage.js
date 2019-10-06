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
      comments: []
    };
  }

  componentDidMount() {
    this.getTest()
    this.getComonents()
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
  render() {
    if (!this.state.test.id) return null;
    return (
      <div className="wrapper">
        <div className='container'>
          <div className='content-left'>
            <TestDetail test={this.state.test} />
            <CommentList comments={this.state.comments} />
          </div>
          <RankList test={this.state.test} />
        </div>
      </div>
    );
  }
}
export default DefaultPage

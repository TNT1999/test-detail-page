import React, { Component } from 'react';
import TestDetail from './test-detail/TestDetail';
import RankList from './rank/RankList';
import CommentList from './comment/CommentList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { ProgressBar} from '@blueprintjs/core';

export class DefaultPage extends Component {
  componentDidMount() {
    this.props.actions.getTest();
    this.props.actions.getRanks();
    this.props.actions.getComments();
  }
  render() {
    if (!this.props.home.getTestPending) {
      //const { test, comments, ranks } = this.props.home;
      return (
        <div className="wrapper">
          <div className="container">
            <div className="content-left">
              <TestDetail test={this.props.home.test} />
              {this.props.home.getCommentsPending ? (
                <ProgressBar animate stripes intent="Success" />
              ) : (
                <CommentList comments={this.props.home.comments} />
              )}
            </div>
            {this.props.home.getRanksPending ? (
              <ProgressBar animate stripes intent="Success" />
            ) : (
              <RankList ranks={this.props.home.ranks} test={this.props.home.test} />
            )}
          </div>
        </div>
      );
    } else return <ProgressBar animate stripes intent="Success" />;
  }
}
/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);

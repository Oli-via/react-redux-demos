import React, { Component } from 'react';
import CommentArea from '../containers/comment_area'
import CommentList from '../containers/comment_list'

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <CommentArea/>
        <CommentList/>
      </div>
    );
  }
}

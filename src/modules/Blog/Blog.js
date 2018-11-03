import React, { Component } from 'react';
import Landing from './Landing';
import Message from './Message';

class Blog extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Message />
      </div>
    )
  }
}
export default Blog;

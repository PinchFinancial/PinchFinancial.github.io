import React, { Component } from 'react';
import Landing from './Landing';
import Medium from './Medium';
import { Nav } from './../Nav';
import { Footer } from './../Footer';
import Colors from './../../colors';

class Blog extends Component {
  handleShow = () => {
    var elmnt = document.getElementById("blog");
    elmnt.scrollIntoView({inline: 'nearest', block: 'start', behavior: 'smooth'});
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Landing handleShow={this.handleShow} />
        <Medium/>
        <Footer background={Colors.purple} fontColor={Colors.white} />
      </div>
    )
  }
}
export default Blog;

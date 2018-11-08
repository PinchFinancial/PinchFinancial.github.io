import React, { Component } from 'react';
import Rent from './Rent';
import Buy from './Buy';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import { Nav } from './../Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <Rent />
        <Buy />
        <About />
        <Contact />
      </div>
    )
  }
}
export default Home;

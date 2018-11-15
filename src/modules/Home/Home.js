import React, { Component } from 'react';
import Rent from './Rent';
import Buy from './Buy';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import { Nav } from './../Nav';
import { QuoteModal } from './../QuoteModal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <Rent toggle={this.toggle}/>
        <Buy />
        <About />
        <Contact />
        <QuoteModal modal={this.state.modal} toggle={this.toggle} />
      </div>
    )
  }
}
export default Home;

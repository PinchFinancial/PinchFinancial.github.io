import React, { Component } from 'react';
import Landing from './Landing';
import TenantInsurance from './TenantInsurance';
import Quote from './Quote';
import { QuoteModal } from '../QuoteModal';
import { Nav } from './../Nav';
import { Footer } from './../Footer';
import Colors from './../../colors';

class Rent extends Component {
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
        <Landing toggle={this.toggle} />
        <TenantInsurance toggle={this.toggle} />
        <Quote toggle={this.toggle} />
        <QuoteModal modal={this.state.modal} toggle={this.toggle} />
        <Footer background={Colors.red} fontColor={Colors.white} />
      </div>
    )
  }
}
export default Rent;

import React, { Component } from 'react';
import Landing from './Landing';
import TenantInsurance from './TenantInsurance'
import Quote from './Quote'
import { Nav } from './../Nav';

class Rent extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <TenantInsurance />
        <Quote />
      </div>
    )
  }
}
export default Rent;

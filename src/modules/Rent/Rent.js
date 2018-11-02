import React, { Component } from 'react';
import Landing from './Landing';
import TenantInsurance from './TenantInsurance'
import Quote from './Quote'

class Rent extends Component {
  render() {
    return (
      <div>
        <Landing />
        <TenantInsurance />
        <Quote />
      </div>
    )
  }
}
export default Rent;

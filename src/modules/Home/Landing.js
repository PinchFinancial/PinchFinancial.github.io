import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Colors from '../../colors'

const styles = {
  Top: {
    minHeight: '70vh'
  },
  TopMargin: {
    marginTop: 200,
    marginBottom: 50,
    padding: 50,
    background: Colors.red
  },
  TopHeader: {
    color: Colors.white,
    fontSize: 72
  },
  TopSubheader: {
    color: Colors.white
  }
}

class Landing extends Component {
  render() {
    return (
    <Container fluid style={styles.Top}>
      <div style={styles.TopMargin}>
        <h1 className="text-center" style={styles.TopHeader}>Renting to Buying</h1>
        <h3 className="text-center" style={styles.TopSubheader}>We've got everything you need to write your Homestory</h3>
      </div>
    </Container>
    )
  }
}
export default Landing;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors'

const styles = {
  Top: {
    minHeight: '70vh'
  },
  TopMargin: {
    marginTop: 200
  },
  TopHeader: {
    color: Colors.purple,
    fontSize: 60
  },
  TopSubheader: {
    color: Colors.gray
  },
  PurpleButton: {
    color: Colors.white,
    background: Colors.purple,
    border: '1px solid ' + Colors.white
  },
  CenterDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%'
  },
  RedContainer: {
    background: Colors.red,
    color: Colors.white,
    paddingTop: '5%',
    paddingBottom: '5%' 
  },
  TextStyle: {
    fontSize: 24
  }
}

class Landing extends Component {
  render() {
    return (
        <div>
            <Container fluid style={styles.Top}>
                <div style={styles.TopMargin}>
                    <h1 className="text-center" style={styles.TopHeader}>Renting a New Place?</h1>
                    <h3 className="text-center" style={styles.TopSubheader}>Make sure you and your stuff are protected, as low as $20/month</h3>
                </div>
                <div style={styles.CenterDiv}>
                    <Button size="lg" style={styles.PurpleButton}>BUY INSURANCE</Button>
                </div>
            </Container>
            <Container fluid style={styles.RedContainer}>
                <Row>
                    <Col xs={{ size: 12 }} md={{ size: 10, offset: 1}}>
                        <p className="text-center" style={styles.TextStyle}>As a renter you’re legally responsible for any damage you cause to your building, and any harm that comes to someone visiting your home. To protect yourself from those costs make sure you have tenant insurance.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
export default Landing;

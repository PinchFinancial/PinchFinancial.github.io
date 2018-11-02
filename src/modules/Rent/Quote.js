import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors';

const styles = {
  Header: {
    color: Colors.purple,
    fontSize: 40,
    marginTop: '5%'
  },
  Subheader: {
    color: Colors.purple,
    fontSize: 24,
    fontWeight: 'bold'
  },
  Text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'normal'
  },
  smText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'normal'     
  },
  CenterDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  ContainerPadding: {
      paddingTop: '2%'
  },
  RedContainer: {
    background: Colors.red,
    color: Colors.white,
    paddingTop: '5%',
    paddingBottom: '5%' 
  },
  RedButton: {
    color: Colors.red,
    background: Colors.white,
    border: '1px solid ' + Colors.red,
    marginTop: '2%',
    marginBottom: '2%'
  }
}

class Quote extends Component {
  render() {
    return (
        <Container fluid style={styles.RedContainer}>
            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Text}>We’ve partnered with Gore Mutual, a Canadian insurance company founded in 1839, and St. Clair Insurance, to provide tenant insurance all online in less than 5 minutes.</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Text}>We chose to work with these companies because they’re Canadian, have over a century of experience in insurance, and share our passion for helping our customers.</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Text}>We’re coming to British Columbia in November!</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <p className="text-center" style={styles.smText}>Insurance offered on this site is underwritten by Gore Mutual Insurance and arranged for by St. Clair Insurance Brokerage Limited.</p>
                </Col>
            </Row>
            <div style={styles.CenterDiv}>
                <Button size="lg" style={styles.RedButton}>GET A FREE QUOTE</Button>
            </div>
        </Container>
    )
  }
}
export default Quote;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors'
import RentImage from './img/rent.png'

const styles = {
  Rent: {
    minHeight: 500,
    background: Colors.purple,
    color: Colors.white
  },
  SectionHeader: {
    fontSize: 80
  },
  SectionMargin: {
    marginTop: 75
  },
  PurpleButton: {
    color: Colors.purple,
    background: Colors.white,
    border: '1px solid ' + Colors.purple
  }
}

class Rent extends Component {
  render() {
    return (
    <Container fluid style={styles.Rent}>
        <Row>
          <Col md={{ size: 4, offset: 1 }}>
            <div style={styles.SectionMargin}>
                <h1 style={styles.SectionHeader}>Rent</h1>
                <p>Whether it’s finding a place, or insuring your rental, we’ve got you covered. We’ve brought together real estate firms and insurance companies to make renting simple. With Pinch you can purchase tenant insurance in less than 5 minutes, no phone calls necessary.</p>
                <Button size="lg" style={styles.PurpleButton} onClick={this.props.toggle}>Buy Insurance</Button>
            </div>
          </Col>
          <Col md={{ size: 6}}>
            <img src={RentImage} width={'100%'} height={'100%'} alt="Rent"></img>
          </Col>
        </Row>
    </Container>
    )
  }
}
export default Rent;

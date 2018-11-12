import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors'
import BuyImage from './img/buy.png'

const styles = {
  Buy: {
    minHeight: 500,
    background: Colors.red,
    color: Colors.white
  },
  SectionHeader: {
    fontSize: 80
  },
  SectionMargin: {
    marginTop: 75
  },
  RedButton: {
    color: Colors.red,
    background: Colors.white,
    border: '1px solid ' + Colors.red
  }
}

class Buy extends Component {
  render() {
    return (
    <Container fluid style={styles.Buy}>
        <Row>
            <Col xs={{ size: 12, order: 2}} md={{ size: 6, offset: 1, order: 1}}>
                <img src={BuyImage} width={'100%'} height={'100%'} alt="Buy"></img>
            </Col>
            <Col xs={{ size: 12, order: 1}} md={{ size: 4, order: 2 }}>
                <div style={styles.SectionMargin}>
                    <h1 style={styles.SectionHeader}>Buying</h1>
                    <p>We want to make buying a home simple, so you can focus on finding and loving the right one. We’re developing software that provides full mortgage pre-approvals in less than 8 minutes in partnership with major banks. Coming early 2019.</p>
                    <Button size="lg" style={styles.RedButton}>Coming Soon</Button>
                </div>
            </Col>
        </Row>
    </Container>
    )
  }
}
export default Buy;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors';
import Watch from './img/watch.png';
import Computer from './img/computer.png';
import Bike from './img/bike.png';
import Coverage from './img/coverage.png';
import Motel from './img/motel.png';

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
    color: Colors.purple,
    fontSize: 20,
    fontWeight: 'normal'
  },
  CenterDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  ContainerPadding: {
      paddingTop: '5%'
  },
  PurpleButton: {
    color: Colors.white,
    background: Colors.purple,
    border: '1px solid ' + Colors.white,
    marginTop: '5%',
    marginBottom: '5%'
  }
}

class TenantInsurance extends Component {
  render() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center" style={styles.Header}>Tenant Insurance covers three areas:</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Subheader}>Contents</h1>
                    <h1 className="text-center" style={styles.Text}>Contents coverage repairs or replaces covered goods that get damaged</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{size: 8, offset: 2}} md={{size: 6, offset: 3}}>
                    <Row>
                        <Col xs={{size: 4}}>
                            <img src={Watch} width="100%" height="100%" alt="Watch"></img>
                        </Col>
                        <Col xs={{size: 4}}>
                            <img src={Computer} width="100%" height="100%" alt="Computer"></img>
                        </Col>
                        <Col xs={{size: 4}}>
                            <img src={Bike} width="100%" height="100%" alt="Bike"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Subheader}>Liability</h1>
                    <h1 className="text-center" style={styles.Text}>Liability protects you if someone gets injured while in your home.</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{size: 8, offset: 2}} md={{size: 4, offset: 4}}>
                    <img src={Coverage} width="100%" height="100%" alt="Coverage"></img>
                </Col>
            </Row>

            <Row>
                <Col md={{size: 4, offset: 4}} style={styles.ContainerPadding}>
                    <h1 className="text-center" style={styles.Subheader}>Additional Living Expenses</h1>
                    <h1 className="text-center" style={styles.Text}>If you have a fire or flood and need to relocate, living expense coverage can help with those costs.</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{size: 8, offset: 2}} md={{size: 4, offset: 4}}>
                    <img src={Motel} width="100%" height="100%" alt="Motel"></img>
                </Col>
            </Row>
            <div style={styles.CenterDiv}>
                <Button size="lg" style={styles.PurpleButton} onClick={this.props.toggle}>GET PROTECTION</Button>
            </div>
        </Container>
    )
  }
}
export default TenantInsurance;

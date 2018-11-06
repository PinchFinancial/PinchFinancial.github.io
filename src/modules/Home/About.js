import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Colors from '../../colors'
import AboutImage from './img/about.png'

const styles = {
    AboutHeader: {
        color: Colors.purple,
        fontSize: 80
    },
    SectionHeader: {
        fontSize: 70
    },
    SectionMargin: {
        marginTop: 75
    },
    AboutBody: {
        color: Colors.white,
        background: Colors.purple
    }
}

class About extends Component {
  render() {
    return (
        <Container fluid>
            <Row style={styles.AboutHeader}>
                <Col md={{ size: 6, offset: 1 }}>
                    <div style={styles.SectionMargin}>
                        <h1 style={styles.SectionHeader}>About Us</h1>
                    </div>
                </Col>
            </Row>
            <Row style={styles.AboutBody}>
                <Col md={{ size: 4, offset: 1 }}>
                    <div style={styles.SectionMargin}>
                        <p>We’re about making the journey to homeownership simple, so you can retell it to friends and family proudly. We also believe that your time is valuable and should be respected, everything we do is online.</p>
                        <p>Based in Toronto, we’re proud to be a Canadian company and hope you’ll let us be part of your Homestory.</p>
                    </div>
                </Col>
                <Col md={{ size: 6}}>
                    <div style={styles.SectionMargin}>
                        <img src={AboutImage} width={'100%'} height={'100%'}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
  }
}
export default About;

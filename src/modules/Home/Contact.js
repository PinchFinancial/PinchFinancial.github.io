import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Colors from '../../colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const styles = {
    ContactHeader: {
        color: Colors.red,
        fontSize: 80
    },
    SectionHeader: {
        fontSize: 80
    },
    SectionMargin: {
        marginTop: 75
    },
    SectionBottom: {
        marginTop: 75,
        marginBottom: 75
    },
    ContactBody: {
        color: Colors.white,
        background: Colors.red
    },
    link: {
        color: Colors.white,
        marginLeft: '15%'
    }
}

class Contact extends Component {
  render() {
    return (
        <Container fluid>
            <Row style={styles.ContactHeader}>
                <Col md={{ size: 'auto', offset: 7 }}>
                    <div style={styles.SectionMargin}>
                        <h1 style={styles.SectionHeader}>Contact Us</h1>
                    </div>
                </Col>
            </Row>
            <Row style={styles.ContactBody}>
                <Col md={{ size: 12 }}>
                    <div style={styles.SectionMargin}>
                        <p className="text-center">10 Dundas Street E. Toronto, ON M5B 0A1</p>
                        <p className="text-center">info@pinchfinancial.com</p>
                    </div>
                </Col>
                <Col md={{ size: 4, offset: 4 }}>
                    <div style={styles.SectionBottom}>
                        <a href="https://www.facebook.com/PinchFinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'facebook']} size="4x" /></a>
                        <a href="https://www.instagram.com/pinchfinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'instagram']} size="4x" /></a>
                        <a href="https://twitter.com/pinchfinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
  }
}
export default Contact;

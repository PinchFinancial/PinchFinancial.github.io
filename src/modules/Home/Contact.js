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
        fontSize: 70,
        textAlign: 'right'
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
        marginLeft: '5%',
        marginRight: '5%'
    },
    CenterDiv: {
        display: 'flex',
        justifyContent: 'center',
        background: Colors.red,
        padding: '5%'
    }
}

class Contact extends Component {
  render() {
    return (
        <div>
            <Container fluid>
                <Row style={styles.ContactHeader}>
                    <Col md={{ size: 6, offset: 5}}>
                        <div style={styles.SectionMargin}>
                            <h1 style={styles.SectionHeader}>Contact Us</h1>
                        </div>
                    </Col>
                </Row>
                <Row style={styles.ContactBody}>
                    <Col md={{ size: 12 }}>
                        <div style={styles.SectionMargin}>
                            <p className="text-center">10 Dundas Street E. Toronto, ON M5B 0A1</p>
                            <a href='mailto:info@pinchfinancial.com'>
                                <p className="text-center" style={styles.link}>info@pinchfinancial.com</p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={styles.CenterDiv}>
                <a href="https://www.facebook.com/PinchFinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'facebook']} size="4x" /></a>
                <a href="https://www.instagram.com/pinchfinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'instagram']} size="4x" /></a>
                <a href="https://twitter.com/pinchfinancial/" style={styles.link}><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" /></a>
            </div>
        </div>


    )
  }
}
export default Contact;

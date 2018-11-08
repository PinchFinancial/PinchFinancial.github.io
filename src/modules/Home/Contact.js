import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Colors from '../../colors';
import { Footer } from '../Footer';

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
            </Container>
            <Footer background={Colors.red} fontColor={Colors.white} />
        </div>
    )
  }
}
export default Contact;

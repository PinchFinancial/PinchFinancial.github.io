import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Colors from '../../colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const styles = {
  Margin: {
    marginTop: 180
  },
  Header: {
    color: Colors.red,
    fontSize: 60
  },
  Subheader: {
    color: Colors.gray
  },
  GrayContainer: {
    background: Colors.gray,
    color: Colors.white,
    paddingTop: '5%',
    paddingBottom: '5%' 
  },
  CenterDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 18
  },
  link: {
    color: Colors.white,
    background: Colors.gray
  }
}

class Message extends Component {
  render() {
    return (
        <Container fluid style={styles.GrayContainer}>
            <Row>
                <Col xs={{ size: 12 }} md={{ size: 10, offset: 1}}>
                    <p className="text-center" style={styles.TextStyle}>Writing your first Homestory can be tough, we try to make it simpler with our weekly blog series. Each week we touch on topics related to becoming a homeowner, such as building credit, calculating your ability to service debt, and how to build your down payment. If there’s a topic you’d like to learn more about let us know on Messenger.</p>
                </Col>
            </Row>
            <div style={styles.CenterDiv}>
                <a href="https://www.facebook.com/PinchFinancial/" style={styles.link}>
                  <FontAwesomeIcon icon={['fab', 'facebook-messenger']} size="4x" />
                </a>
            </div>
        </Container>
    )
  }
}
export default Message;

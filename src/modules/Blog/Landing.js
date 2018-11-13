import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import Colors from '../../colors'

const styles = {
  Container: {
    minHeight: '70vh'
  },
  Margin: {
    marginTop: 200
  },
  Header: {
    color: Colors.red,
    fontSize: 60
  },
  Subheader: {
    color: Colors.gray
  },
  RedButton: {
    color: Colors.white,
    background: Colors.red,
    border: '1px solid ' + Colors.white,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 24
  },
  CenterDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8%',
    marginBottom: 20
  }
}

class Landing extends Component {
  render() {
    return (
        <Container fluid style={styles.Container}>
            <div style={styles.Margin}>
                <h1 className="text-center" style={styles.Header}>Having Trouble Writing Your Homestory?</h1>
                <h3 className="text-center" style={styles.Subheader}>Subscribe to our weekly blog for advice and helpful tips!</h3>
            </div>
            <div style={styles.CenterDiv}>
                <Button size="lg" style={styles.RedButton} onClick={this.props.handleShow}>Read Now</Button>
            </div>
        </Container>
    )
  }
}
export default Landing;

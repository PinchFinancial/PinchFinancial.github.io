import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            background: null,
            fontColor: null,
            styles: {
                Footer: {
                    background: this.props.background,
                    color: this.props.fontColor
                },
                SectionMargin: {
                    paddingTop: 75
                },
                link: {
                    marginLeft: '5%',
                    marginRight: '5%',
                    color: this.props.fontColor
                },
                CenterDiv: {
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '5%'
                },
                FooterText: {
                    fontSize: 24,
                    color: this.props.fontColor
                }
            }
        }
    }
    
    render() {
        let { styles } = this.state;

        return (
            <div style={styles.Footer}>
                <Container fluid>
                    <div style={styles.SectionMargin}>
                        <p className="text-center" style={styles.FooterText}>10 Dundas Street E. Toronto, ON M5B 0A1</p>
                        <a href='mailto:info@pinchfinancial.com'>
                            <p className="text-center" style={styles.FooterText}>info@pinchfinancial.com</p>
                        </a>
                    </div>
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

export default Footer;
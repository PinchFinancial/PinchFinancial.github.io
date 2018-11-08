import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardLink, CardImg, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import RSSParser from 'rss-parser';
import Colors from '../../colors'

const styles = {
  Card: {
    marginBottom: 15,
    border: '1px solid ' + Colors.purple
  },
  Title: {
    color: Colors.black    
  },
  Subtitle: {
    color: Colors.black
  },
  Footer: {
    background: Colors.purple,
    color: Colors.white
  },
  Blog: {
    background: Colors.red,
    color: Colors.white
  },
  SectionHeader: {
    fontSize: 70,
  },
  SectionMargin: {
    marginTop: 50,
    marginBottom: 50
  }
}

class Medium extends Component {
  constructor(props) {
    super(props);

    this.state = {
        feeds: []
    };
  }

  parseImage = (feed) => {
    let content = ReactHtmlParser(feed['content:encoded']);
    return content[0].props.children[0].props.src;
  }

  setFeeds = (err, res) => {
    this.setState({
        feeds: res.items
    })
    
    res.items.forEach(function(entry) {
        console.log(entry);
    })
  }

  async componentDidMount() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser();
    await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/pinch-financial', this.setFeeds);
  }

  render() {
    let { feeds } = this.state;

    return (
        <Container fluid style={styles.Container}>
            <Row style={styles.Blog}>
                <Col>
                    <div style={styles.SectionMargin}>
                        <h1 className="text-center" style={styles.SectionHeader}>Blogs</h1>
                    </div>
                </Col>
            </Row>
            <Row style={styles.SectionMargin}>
                {
                    feeds.map(feed => 
                        <Col md={{ size: 4}}>
                            <Card style={styles.Card}>
                                <CardLink href={feed.guid}>
                                    <CardImg top src={this.parseImage(feed)} width='318'></CardImg>
                                    <CardBody>
                                        <CardTitle style={styles.Title}>{feed.title}</CardTitle>
                                        <CardSubtitle style={styles.Subtitle}>{'Author: ' + feed.creator}</CardSubtitle>
                                    </CardBody>
                                    <CardFooter style={styles.Footer}>{'Posted on ' + feed.isoDate.substring(0, 10)}</CardFooter>
                                </CardLink>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
  }
}
export default Medium;

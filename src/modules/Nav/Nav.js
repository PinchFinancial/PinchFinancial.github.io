import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavLink } from 'reactstrap';
import colors from './../../colors';
import Logo from './img/ShortLogo.png';
import HomeIcon from './img/home.png';
import RentIcon from './img/rent.png';
import BlogIcon from './img/blog.png';

const styles = {
  NavbarText: {
    fontSize: 24,
    color: colors.red,
    fontWeight: 'bold'
  },
  Cloud: {
    marginLeft: 10,
    marginRight: 10
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isExited: true,
      position: 0
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onExited = () => {
    this.setState({
      isExited: true
    });
  }

  onEntering = () => {
    this.setState({
      isExited: false
    });
  }

  onScroll = () => {
    this.setState({
      position: window.pageYOffset
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  render () {
    let content = null;
    let logo = null;
    let { position, isExited } = this.state;

    if(!isExited) {
      content = (<Nav className="ml-auto" navbar>
          <NavLink tag={Link} to='/home'>
            <p className="text-center" style={styles.NavbarText}>HOME</p>
          </NavLink>
          <NavLink tag={Link} to='/rent'>
            <p className="text-center" style={styles.NavbarText}>RENT</p>
          </NavLink>
          <NavLink tag={Link} to='/blog'>
            <p className="text-center" style={styles.NavbarText}>BLOG</p>
          </NavLink>
        </Nav>)
    }
    else {
      content = (<Nav className="ml-auto" navbar>
          <NavLink tag={Link} to='/home'>
            <img style={styles.Cloud} src={HomeIcon} width="80" height="50"></img>
          </NavLink>
          <NavLink tag={Link} to='/rent'>
            <img style={styles.Cloud} src={RentIcon} width="80" height="50"></img>
          </NavLink>
          <NavLink tag={Link} to='/blog'>
            <img style={styles.Cloud} src={BlogIcon} width="80" height="50"></img>
          </NavLink>
        </Nav>)
    }

    if(position > 0) {
      logo = <img src={Logo} width="50" height="50"></img>
    }
    else {
      logo = <img src={Logo} width="100" height="100"></img>
    }

    return(
      <div>
        <Navbar fixed="top" color="white" light expand="md">
          <NavbarBrand href="/">
            {logo}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} onExited={this.onExited} onEntering={this.onEntering} navbar>
            {content}
          </Collapse>
        </Navbar>
      </div>
  );
  }
}
export default NavBar;

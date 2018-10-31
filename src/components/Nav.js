import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavLink } from 'reactstrap';
import Logo from './img/ShortLogo.png';
import RentIcon from './img/rent.png';
import BlogIcon from './img/blog.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return(
      <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} width="50" height="50"></img>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink tag={Link} to='/rent'>
              <img src={RentIcon} width="80" height="50"></img>
            </NavLink>
            <NavLink tag={Link} to='/blog'>
              <img src={BlogIcon} width="80" height="50"></img>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  }
}
export default NavBar;

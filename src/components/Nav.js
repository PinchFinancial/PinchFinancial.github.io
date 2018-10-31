import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavLink, NavItem } from 'reactstrap';

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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Pinch</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink tag={Link} to='/'>Home</NavLink>
            <NavLink tag={Link} to='/rent'>Rent</NavLink>
            <NavLink tag={Link} to='/blog'>Blog</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

      // <Navbar toggleable>
      //     <NavbarToggler onClick={this.toggle} />
      //     <NavbarBrand href="/">Home</NavbarBrand>
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavLink tag={Link} to='/'>Home</NavLink>
      //         <NavLink tag={Link} to='/about'>About</NavLink>
      //         <NavLink tag={Link} to='/rent'>Rent</NavLink>
      //         <NavLink tag={Link} to='/blog'>Blog</NavLink>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
  );
  }
}
export default NavBar;

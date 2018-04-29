import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import moment from 'moment'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const LogoText = styled(NavbarBrand)`  
  font-family: "hermesregular";
  font-size: 1.75rem !important;
  color: #fff !important;
`;
export default class HomeNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div className="sticky-top">
        <Navbar color="dark" dark expand="md">
          <LogoText>CE Smart Camp 11</LogoText>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className="ml-auto" navbar>
              
              
              <NavItem>
                {' '}<Link href="/register/login"><Button color="info">สมัครเลยยยยย</Button></Link>
              </NavItem>
            </Nav> */}
          </Collapse>
        </Navbar>

      </div>
    )
  }
}
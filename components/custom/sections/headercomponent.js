/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import logo2 from "../../../assets/images/logos/white-logo.png";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative bg-primary">
        <Container>
          <Navbar className="navbar-expand-lg h6-nav">
            <NavbarBrand href="#" style={{width:160,paddingTop:10}} className="lg:ml-20">
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1" >
              <Nav navbar className="ml-auto mt-2 mt-lg-0 mr-20">
                <NavItem className="active pl-2">
                  <NavLink href="/" style={{color:'white'}}>Home</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav style={{color:'white'}}>
                    Services <i className="fa fa-angle-down m-l-5" style={{color:'white'}}></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem href="/services">Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                <NavItem className="pl-2">
                  <NavLink href="/services" style={{color:'white'}}>Services</NavLink>
                </NavItem>
                <NavItem className="pl-2">
                  <NavLink href="/pricing" style={{color:'white'}}>Pricing</NavLink>
                </NavItem>
                <NavItem className="pl-2">
                  <NavLink href="/about" style={{color:'white'}}>About Us</NavLink>
                </NavItem>
                <NavItem className="pl-2">
                  <NavLink href="/contact" style={{color:'white'}}>Contact</NavLink>
                </NavItem>
                <NavItem className="pr-1 pl-2 pt-1">
                  <a className="btn bg-gray-700 pl-2 pr-2 uppercase font-bold text-sm" href="https://app.lazarus.network/#/auth" style={{color:'white',paddingBottom:8,paddingTop:8}}>
                    Dashboard
                  </a>
                </NavItem >
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;

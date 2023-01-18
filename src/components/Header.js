import React, { useState, useEffect } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Header = (props) => {

  const changedLanguages = (lang) => {
    props.selectedAcceptedLanguage(lang);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Bongkyu Kim's Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={(e) => changedLanguages("ko")}>
                한국어
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changedLanguages("en")}>
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
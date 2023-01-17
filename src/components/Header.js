import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Bongkyu Kim's Resume</Navbar.Brand>
        {/*
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/projects">More deets</Nav.Link>
            <Nav.Link href="/contact">Dank memes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        */}
      </Container>
    </Navbar>
  );
}

export default Header;
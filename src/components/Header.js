import React from 'react';
import {
  Container,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from 'react-bootstrap';

const Header = (props) => {
  const changedLanguages = (lang) => {
    props.selectedAcceptedLanguage(lang);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><h1>Bongkyu's Resume</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={(e) => changedLanguages('ko')}>
                <Col>
                  <Image
                    src={`https://image.tmpbnine.store/resume-japan/png/ko.png`}
                    style={{
                      width: '22px',
                      marginTop: '-3px',
                      marginRight: '2px',
                    }}
                  />
                  한국어
                </Col>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changedLanguages('jp')}>
                <Col>
                  <Image
                    src={`https://image.tmpbnine.store/resume-japan/png/jp.png`}
                    style={{
                      width: '22px',
                      marginTop: '-3px',
                      marginRight: '2px',
                    }}
                  />
                  日本語
                </Col>
              </NavDropdown.Item>
              {/*
              <NavDropdown.Item onClick={() => changedLanguages('en')}>
                <Col>
                  <Image
                    src={`https://image.tmpbnine.store/resume-japan/png/us.png`}
                    style={{
                      width: '22px',
                      marginTop: '-3px',
                      marginRight: '2px',
                    }}
                  />
                  English
                </Col>
              </NavDropdown.Item>
              */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

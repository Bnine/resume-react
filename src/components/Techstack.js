import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ScrollToTop from "react-scroll-to-top";

const Techstack = () => {
  const techShareUrl = 'https://embed.stackshare.io/stacks/embed/d01b251ff300cf5fb7d870c6fc5974';

  return (
    <>
      <Container className={'mt-2'}></Container>
      <Container>
        <Row>
          <iframe
            src={techShareUrl}
            title={`bongkyu's techShare`}
            height={`1830px`}
          />
        </Row>
      </Container>
      <ScrollToTop style={{display: "flex", justifyContent: "center", alignItems:"center"}} smooth/>
    </>
  );
};

export default Techstack;

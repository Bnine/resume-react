import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ScrollToTop from "react-scroll-to-top";

const Techstack = () => {
  const techShareUrl =
    'https://embed.stackshare.io/stacks/embed/244d0db4c3a4a23d46a7d07a973dc9';

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
      <ScrollToTop smooth/>
    </>
  );
};

export default Techstack;

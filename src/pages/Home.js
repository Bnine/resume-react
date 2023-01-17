import React, { useState, useEffect } from 'react';
import {Container, Tab, Tabs} from 'react-bootstrap';
import Header from '../components/Header';
import Profileinfo from '../components/Profileinfo';
import Techstack from '../components/Techstack';
import Project from '../components/Project';

const Home = () => {
  const [accecptedLanguage, setAccecptedLanguage] = useState('ko');

  const selectedAcceptedLanguage = (settedlanguage) => {
    setAccecptedLanguage(settedlanguage);
  }

  useEffect(() => {
    console.log(`accecptedLanguage state is -> ${accecptedLanguage}`);
  }, [accecptedLanguage]);

  return (
    <>
      <Header/>
      <Profileinfo accecptedLanguage={accecptedLanguage}/>
      <Container>
        <Tabs
            defaultActiveKey="projects"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="tech" title="Tech stacks">
                <Techstack />
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <Project accecptedLanguage={accecptedLanguage}/>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <Techstack />
            </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Home;

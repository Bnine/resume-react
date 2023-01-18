import React, { useState, useEffect } from 'react';
import {Container, Tab, Tabs} from 'react-bootstrap';
import i18n from "i18next";
import Header from '../components/Header';
import Profileinfo from '../components/Profileinfo';
import Techstack from '../components/Techstack';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {
  const [accecptedLanguage, setAccecptedLanguage] = useState('ko');
  const [defaultTab, setDefaultTab] = useState('contact');

  const selectedAcceptedLanguage = (settedlanguage) => {
    setAccecptedLanguage(settedlanguage);
  }

  useEffect(() => {
    console.log(`accecptedLanguage state is -> ${accecptedLanguage}`);
    i18n.changeLanguage(accecptedLanguage)
  }, [accecptedLanguage]);

  return (
    <>
      <Header selectedAcceptedLanguage={selectedAcceptedLanguage}/>
      <Profileinfo accecptedLanguage={accecptedLanguage}/>
      <Container>
        <Tabs
            defaultActiveKey={defaultTab}
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="tech" title="TechStacks">
                <Techstack />
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <Project accecptedLanguage={accecptedLanguage}/>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <Contact accecptedLanguage={accecptedLanguage}/>
            </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Home;

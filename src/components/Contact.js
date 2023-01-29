import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ScrollToTop from "react-scroll-to-top";
import axios from 'axios';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const Contact = (props) => {
  const { t } = useTranslation(['page']);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState('');
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);

  const checkValidation = () => {
    if (!email) {
      alert(t('page:inputEmail'));
      return false;
    }

    if (email.length < 2 || email.length > 255) {
      alert(t('page:errorInvalidEmail'));
      return false;
    }

    if (!name) {
      alert(t('page:inputName'));
      return false;
    }

    if (name.length < 2 || name.length > 100) {
      alert(t('page:errorInvalidName'));
      return false;
    }

    if (!subject) {
      alert(t('page:inputSubject'));
      return false;
    }

    if (subject.length < 2 || subject.length > 255) {
      alert(t('page:errorInvalidSubject'));
      return false;
    }

    if (!contents) {
      alert(t('page:inputContents'));
      return false;
    }

    if (contents.length < 5) {
      alert(t('page:errorInvalidContent'));
      return false;
    }

    if (window.confirm(t('page:confirmSend'))) {
      setIsReadyToSend(true);
    } else {
      return false;
    }
  };

  const sendEmail = async () => {
    try {
      if (!isReadyToSend) {
        return false;
      }
      setIsBlocking(true);
      setIsReadyToSend(false);

      const response = await axios.post(
        '/v1/contact/sending-email',
        {
          emailAddress: email,
          name: name,
          subject: subject,
          content: contents,
        },
        {
          headers: {
            'Accept-Language': props.accecptedLanguage,
          },
        }
      );
      console.log(response);
      setIsBlocking(false);
      if (response.status === 200) {
        alert(t('page:sendCompleted'));
        return false;
      }
    } catch (e) {
      setIsReadyToSend(false);
      setIsBlocking(false);
      console.log(e);
      console.log(e.response);
      if (e.response.status === 400 && !e.response.data.data) {
        alert(e.response.data.message);
        return false;
      } else {
        alert(t('page:apiResponse503'));
        return false;
      }
    }
  };

  const resetEmail = () => {
    if (window.confirm(t('page:confirmReset'))) {
      setEmail('');
      setName('');
      setSubject('');
      setContents('');
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(`isReadyToSend state is -> ${isReadyToSend}`);
    if (isReadyToSend) {
      sendEmail();
    }
  }, [isReadyToSend]);

  return (
    <>
      <BlockUi tag="div" blocking={isBlocking}>
        <Container className={'mt-2'} />
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>{t('page:emailAddress')}</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{t('page:name')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('page:inputName')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>{t('page:subject')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('page:inputSubject')}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contents">
              <Form.Label>{t('page:contents')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Container>
        <Container className={'mt-2 mb-3'}>
          <div className={'text-center'}>
            <Button
              variant="primary"
              size="lg"
              onClick={(e) => checkValidation()}
            >
              {t('page:send')}
            </Button>{' '}
            <Button variant="secondary" size="lg" onClick={(e) => resetEmail()}>
              {t('page:reset')}
            </Button>
          </div>
        </Container>
        <ScrollToTop style={{display: "flex", justifyContent: "center", alignItems:"center"}} smooth/>
      </BlockUi>
    </>
  );
};

export default Contact;

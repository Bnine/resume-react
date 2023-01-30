import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';
import axios from 'axios';

const Profileinfo = (props) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const gitImageUrl = "https://image.tmpbnine.store/resume-japan/png/github-logo.png";

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/v1/profile', {
        headers: {
          'Accept-Language': props.accecptedLanguage,
        },
      });
      console.log(response);
      setProfileData(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [props.accecptedLanguage]);

  return (
    <>
      <Container className={'mt-5'}></Container>
      <Container>
        {!loading && profileData && (
          <Row>
            <Col md={4}>
              <Image src={profileData.profilePhoto} roundedCircle thumbnail />
            </Col>
            <Col md={8}>
              <Row>
              <Stack direction="horizontal" gap={1}>
                <a href='https://github.com/Bnine' target={'_blank'} rel="noopener noreferrer"><Image src={gitImageUrl} style={{marginTop: '-10px'}} /></a>
                <h1>{profileData.name}</h1>
              </Stack>
              </Row>
              <hr />
              <Row>
                <h4>{profileData.email}</h4>
              </Row>
              <hr />
              <Row>
                <h4>{profileData.university}</h4>
              </Row>
              <hr />
              <Row>
              <Stack direction="horizontal" gap={1}>
                <a href='https://github.com/Bnine/resume-2nd' target={'_blank'} rel="noopener noreferrer"><Image src={gitImageUrl} /></a>
                <p style={{margin: 'auto', marginLeft: '0px'}}><b>[For Portfolio API]</b></p>
              </Stack>
              </Row>
              <hr />
              <Row>
                <p
                  className={'css-fix'}
                  style={{
                    fontSize: '30px',
                  }}
                >
                  <b>{profileData.comment}</b>
                </p>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
      <Container className={'mt-5'}>
        <hr />
      </Container>
    </>
  );
};

export default Profileinfo;

import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import axios from "axios";

const Profileinfo = (props) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        '/v1/profile',
        {
            headers: {
                'Accept-Language': props.accecptedLanguage
            }
        }
      );
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
    console.log(`loading state is -> ${loading}`);
  }, [loading]);


  return (
    <>
        <Container className={'mt-5'}></Container>
        <Container>
        {

            !loading 
            && profileData
            &&
            <Row>
                <Col md={4}>
                    <Image src={profileData.profilePhoto} roundedCircle thumbnail/>
                </Col>
                <Col md={8}>
                    <Row>
                        <h1>{profileData.name}</h1>
                    </Row>
                    <hr/>
                    <Row>
                        <h4>{profileData.email}</h4>
                    </Row>
                    <hr/>
                    <Row>
                        <h4>{profileData.university}</h4>
                    </Row>
                    <hr/>
                    <Row>
                        <h4>{profileData.birth}</h4>
                    </Row>
                    <hr/>
                    <Row>
                        <p 
                          className={'css-fix'}
                          style={{
                            fontSize: '30px'
                        }}>
                        <b>{profileData.comment}</b></p>
                    </Row>
                </Col>
            </Row>
        }
        </Container>
        <Container className={'mt-5'}>
            <hr/>
        </Container>
    </>
  );
};

export default Profileinfo;

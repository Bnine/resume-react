import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import axios from "axios";

const Project = (props) => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        '/v1/profile/projects',
        {
            headers: {
                'Accept-Language': props.accecptedLanguage
            }
        }
      );
      console.log(response);
      setProjectData(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(`loading state is -> ${loading}`);
  }, [loading]);


  return (
    <>
        <Container className={'mt-2'}></Container>
        <Container>
          <Row>
            <h1>Projects</h1>
          </Row>
        {

            !loading 
            && projectData
            &&
            projectData.map((data, index) => (
              <Row className={'mt-5'} key={`${index}_handle`}>
                <Row>
                  <Col xs={1}>
                    <Image src={data.projectInfo.country} 
                      style={{
                        width: '70px'
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{
                      fontSize: '25px',
                      marginBottom: '0px'
                    }}>
                      <b>{data.projectInfo.company} {data.projectInfo.rank}</b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{
                      fontSize: '20px'
                    }}>
                      {data.projectInfo.location} {data.projectInfo.periodStart} ~ {data.projectInfo.periodEnd}
                    </p>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col md={4}>
                    <p style={{
                      fontSize: '18px'
                    }}>
                      <b>Position</b>
                    </p>
                  </Col>
                  <Col md={8}>
                    <p style={{
                      fontSize: '18px'
                    }}>
                      <b>{data.projectInfo.position}</b>
                    </p>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col md={4}>
                    <p style={{
                      fontSize: '18px'
                    }}>
                      <b>Tech stacks</b>
                    </p>
                  </Col>
                  <Col md={8}>
                      {
                        data.skills && data.skills.map((skilldata, index) => (
                          <div key={`${index}_images_${skilldata.imageId}`}>
                            <Image 
                              src={skilldata.imagePath} 
                              style={{
                                width: '70px'
                              }}
                            />
                            &nbsp;
                          </div>
                        ))
                      }
                  </Col>
                </Row>
                <hr style={{
                  marginTop: '15px'
                }}/>
                <Row className={'mt-4 mb-1'}>
                  <Col>
                    <p style={{
                      fontSize: '25px'
                    }}>
                      <b>Project Detail</b>
                    </p>
                  </Col>
                </Row>
                {
                  data.details && data.details.map((detailData, index) => (
                    <div key={`${index}_details_${detailData.projectId}`}>
                    <hr className={'mt-3'}/>
                    <Row>
                      <Col>
                        <p style={{
                          fontSize: '20px'
                        }}>
                          <b>{detailData.projectName}</b>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className={'mt-1 mb-1 css-fix'}>{detailData.projectDetail}</p>
                      </Col>
                    </Row>
                    </div>
                  ))
                }
              </Row>
            ))
        }
        </Container>
    </>
  );
};

export default Project;

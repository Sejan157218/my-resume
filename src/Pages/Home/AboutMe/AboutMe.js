import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className="banner-container">
        <Container>
        <Row>
        <Col sm={12} md={6} className="my-img-div"><img className="my-img" src='' alt="myImage" /></Col>
        <Col  sm={12} md={6} className="d-flex align-items-center banner-content pt-5"> 
          
          </Col>
        </Row>
        </Container>
    </div>
    );
};

export default AboutMe;
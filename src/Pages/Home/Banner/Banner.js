import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';
import "./Banner.css";
import image from "../../../Images/sejan2.png";

const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
            <Row>
            <Col className="my-img-div"><img className="my-img" src={image} alt="myImage" /></Col>
            <Col> <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, This is a type writer animation package',
          'it consist of two types...',
          'Single text display and multi text display',
          'Fonts can be customized.',
          'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      /></Col>
           
            </Row>
            </Container>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import "./Banner.css";
import image from "../../../Images/sejan2.png";
import resume from './sejan-web-resume_2.pdf';


const Banner = () => {

    return (
        <div className="banner-container">
            <Container>
            <Row>
            <Col sm={12} md={6} className="my-img-div"><img className="my-img" src={image} alt="myImage" /></Col>
            <Col  sm={12} md={6} className="d-flex align-items-center banner-content pt-5"> 
            <div>
              <h5>WELCOME TO MY WORLD</h5>
            <h1>Hi, I’m Sejan Mahmud</h1>
            <h1 style={{ color: '#fe4066',fontSize : "45px" }}>
              <Typewriter
                options={{
                  strings: ['web Developer','Front End Developer', 'React Developer','Javascript Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <button className="banner-button">Hire Me</button> <Link to={resume} target="_blank"><button className="banner-button"  download>Download Resume</button></Link>
              </div>
              
              </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from "../../../Images/sejan2.png";
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className="about-container">
        <Container>
        <Row>
        <Col  sm={12} md={6} className="d-flex justify-content-center" >
           <div className="about-text">
             <h1>About Me</h1>
             <p>Hello, I’m Sejan, .My core skill is based on javaScript and I love to do most of the things with javaScript. I am Skilled At MERN Stack with knowing some framework for the frontend and the backend.</p>
             <h4>My Skills</h4>
             <h6><span>Comfortable -</span> JavaScript (ES6), React JS, React Router, HTML5, CSS3, Bootstrap 5, Tailwind Css, React Bootstrap, Material UI.</h6>
             <h6><span>Familiar -</span> Node.js, Express.js, MongoDB.</h6>
             <h6><span>Tools -</span> Git, Github, VS Code , Chrome Dev Tools, Heroku, Netlify, Firebase.</h6>
           </div>
           </Col>
        <Col sm={12} md={6} className=""><img className="about-img" src={image} alt="myImage" /></Col>
        
        </Row>
        </Container>
    </div>
    );
};

export default AboutMe;
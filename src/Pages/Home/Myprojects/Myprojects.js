import React from 'react';
import {Carousel} from '3d-react-carousal';
import image from "../../../Images/banner.jpg";
import image2 from "../../../Images/ash-moment.png";
import "./Myprojects.css"
import { Col, Container, Row } from 'react-bootstrap';

// style={{height:"50%"}}
const Myprojects = () => {
    let slidesd = [
       
        <Row>
       <div className="div-scroll">
       <img className="project-img" src={image2} alt="myImage" />
       </div>
        <Col className="d-flex justify-content-center" >
           <div className="project-text">
             <h1>project Medddd</h1>
             <p>Hello, I’m Sejan, .My core skill is based on javaScript and I love to do most of the things with javaScript. I am Skilled At MERN Stack with knowing some framework for the frontend and the backend.</p>
             <h4>My Skills</h4>
             <h6><span>Comfortable -</span> JavaScript (ES6), React JS, React Router, HTML5, CSS3, Bootstrap 5, Tailwind Css, React Bootstrap, Material UI.</h6>
             <h6><span>Familiar -</span> Node.js, Express.js, MongoDB.</h6>
             <h6><span>Tools -</span> Git, Github, VS Code , Chrome Dev Tools, Heroku, Netlify, Firebase.</h6>
           </div>
           </Col>
        </Row>
        
    ,
      
       <Row>
       <img className="project-img" src="https://picsum.photos/800/302/?random" alt="myImage" />
       <Col className="d-flex justify-content-center" >
      
          <div className="project-text">
            <h1>project Me</h1>
            <p>Hello, I’m Sejan, .My core skill is based on javaScript and I love to do most of the things with javaScript. I am Skilled At MERN Stack with knowing some framework for the frontend and the backend.</p>
            <h4>My Skills</h4>
            <h6><span>Comfortable -</span> JavaScript (ES6), React JS, React Router, HTML5, CSS3, Bootstrap 5, Tailwind Css, React Bootstrap, Material UI.</h6>
            <h6><span>Familiar -</span> Node.js, Express.js, MongoDB.</h6>
            <h6><span>Tools -</span> Git, Github, VS Code , Chrome Dev Tools, Heroku, Netlify, Firebase.</h6>
          </div>
          </Col>
       </Row>
     
   ,
  
   <Row>
   <img className="project-img" src="https://picsum.photos/800/302/?random" alt="myImage" />
   <Col className="d-flex justify-content-center" >
  
      <div className="project-text">
        <h1>project Me</h1>
        <p>Hello, I’m Sejan, .My core skill is based on javaScript and I love to do most of the things with javaScript. I am Skilled At MERN Stack with knowing some framework for the frontend and the backend.</p>
        <h4>My Skills</h4>
        <h6><span>Comfortable -</span> JavaScript (ES6), React JS, React Router, HTML5, CSS3, Bootstrap 5, Tailwind Css, React Bootstrap, Material UI.</h6>
        <h6><span>Familiar -</span> Node.js, Express.js, MongoDB.</h6>
        <h6><span>Tools -</span> Git, Github, VS Code , Chrome Dev Tools, Heroku, Netlify, Firebase.</h6>
      </div>
      </Col>

   
   </Row>
  ,
        ];
    return (
        <div className="project-container py-5">
            <Carousel slides={slidesd} />
            {/* autoplay={true} interval={10000}   */}
        </div>
    );
};

export default Myprojects;
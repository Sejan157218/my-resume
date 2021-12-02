import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import "./Details.css";

const Details = () => {
    const {id} = useParams();
    const projects = [
        { 
          id:"jjjkjljla",
          title : 'Ash Moment Count -Watch Shop',
          des: 'Responsive website with firebase authentication and different type dashboard functionality for admin and users. Admin can manage all orders, make admin, add new products and manage any products.Authorized customers can leave feedback, buy any product, and manage their ordered products.',
          tech : 'HTML5, CSS3, React Bootstrap, React.js, Node.js, Express.js, MongoDB, Firebase.',
          img : "https://i.ibb.co/M6spYNk/ash-moment.png",
          live: "https://ash-moment-count.web.app/",
          gitclient:"https://github.com/Sejan157218/Ash_Moment_count_client",
          gitserver:"https://github.com/Sejan157218/Ash_Moment_count_server",
      },
        { 
          id:"jjjkjldfjla",
          title : 'Ash Trevelar Paradise-Travel Agency',
          des: 'Developed a tout booking website with some tour packages at the best price.An authorized user can be booked a tour package and also cancel a package.There is a dashboard where the admin can cancel a booking and change a booking status.',
          tech : 'React.js, Node.js, Express.js, MongoDB, Firebase, HTML5, CSS3, React Bootstrap.',
          img : "https://i.ibb.co/CM7dbF5/ash-travel.png",
          live: "https://ash-tourism.web.app/",
          gitclient:"https://github.com/Sejan157218/Ash-Traveler-Paradise-client-site",
          gitserver:"https://github.com/Sejan157218/Ash-Traveler-Paradise-server-site",
      },
        { 
          id:"jjjkjljlda",
          title : 'Ash Health Care -Hospital Website',
          des: 'From this website, users can get many types of treatment for their health issues.Authorized users can see service details.Users can Login or Sign up with email and password or google.',
          tech : 'Firebase, React.js, React Bootstrap, HTML5, CSS3.',
          img : "https://i.ibb.co/vv0XCBc/ash-health-care.png",
          live: "https://ash-health-care.web.app/",
          gitclient:"https://github.com/Sejan157218/Ash-health-care",
         
      },
        { 
          id:"jjjkjffgljla",
          title : 'Ash Learning',
          des: 'From this website, users can buy a product',
          tech : 'React.js, React Bootstrap, HTML5, CSS3.',
          img : "https://i.ibb.co/dr7tvGq/ash-learning.png",
          live: "https://ash-learning-sejan157218.netlify.app/",
          gitclient:"https://github.com/Sejan157218/review-website-ash-learnig",
        }
      ]

      const filter = projects.filter(project=>project.id==id);
      const pro=(filter[0]);
    return (
        <div className="details-container">
        <Header></Header>
        <Container className="details-con">
  <Row className="py-5">
    <Col xs={12} md={7}>
        <div className="details">
            <img src={pro?.img} alt="" />
        </div>
    </Col>
    <Col xs={12} md={5}>
        <h1>
        {pro?.title}
        </h1>
        <h6> Technology Used : {pro?.tech}</h6>
        <p style={{color:"#d1d1d1"}}>{pro?.des}</p>
        <a href={pro?.live} target="_blank"><button className="banner-button m-2">Website Link</button></a>
        <a href={pro?.gitclient} target="_blank"><button className="banner-button m-2">Github Client</button></a>
        <a href={pro?.gitserver} target="_blank"><button className="banner-button m-2">Github Server</button></a>
    </Col>
  </Row>
</Container>
<Footer></Footer>
        </div>
    );
};

export default Details;
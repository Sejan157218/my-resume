import React from 'react';
import "./Myprojects.css"
import {  Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// style={{height:"50%"}}
const Myprojects = () => {
const projects = [
  { 
    id:"jjjkjljla",
    title : 'Ash Moment Count -Watch Shop',
    des: 'Responsive website with firebase authentication and different type dashboard functionality for admin and users. Admin can manage all orders, make admin, add new products and manage any products.Authorized customers can leave feedback, buy any product, and manage their ordered products.',
    tech : 'HTML5, CSS3, React Bootstrap, React.js, Node.js, Express.js, MongoDB, Firebase.',
    img : "https://i.ibb.co/M6spYNk/ash-moment.png",
    live: "https://ash-moment-count.web.app/"
},
  { 
    id:"jjjkjldfjla",
    title : 'Ash Trevelar Paradise-Travel Agency',
    des: 'Developed a tout booking website with some tour packages at the best price.An authorized user can be booked a tour package and also cancel a package.There is a dashboard where the admin can cancel a booking and change a booking status.',
    tech : 'React.js, Node.js, Express.js, MongoDB, Firebase, HTML5, CSS3, React Bootstrap.',
    img : "https://i.ibb.co/CM7dbF5/ash-travel.png",
    live: "https://ash-tourism.web.app/"
},
  { 
    id:"jjjkjljlda",
    title : 'Ash Health Care -Hospital Website',
    des: 'From this website, users can get many types of treatment for their health issues.Authorized users can see service details.Users can Login or Sign up with email and password or google.',
    tech : 'Firebase, React.js, React Bootstrap, HTML5, CSS3.',
    img : "https://i.ibb.co/vv0XCBc/ash-health-care.png",
    live: "https://ash-health-care.web.app/"
},
  { 
    id:"jjjkjffgljla",
    title : 'Ash Learning',
    des: 'From this website, users can buy a product',
    tech : 'React.js, React Bootstrap, HTML5, CSS3.',
    img : "https://i.ibb.co/dr7tvGq/ash-learning.png",
    live: "https://ash-learning-sejan157218.netlify.app/"
},
]
    return (
<div id="my-project" className="project-container">
<Container>
  <h1 className="py-5 text-center">My Recent Projects</h1>
<Row xs={1} md={2} className="g-4">
  {projects.map(project => (
   <div className="">
   <ul>
     <li className="booking-card h-100" style={{ backgroundImage: `url(${project?.img})` ,height:"100%"}}>
       <div className="book-container">
         <div className="content">
         </div>
       </div>
       <div className="informations-container">
         <h2 className="title">{project?.title}</h2>
         <p className="sub-title">{project?.tech}</p>
         
         <div className="more-information">
           <div className="info-and-date-container">
           </div>
           <a href={project.live} target="_blank"><button className="banner-button m-2" >Website Link</button></a>
           <Link to={`/home/details/${project.id}`}><button className="banner-button" >Details</button></Link>
           </div>
           
       </div>
     </li>
   </ul>
   </div>
   
  ))}
</Row>
</Container>
</div>




    );
};

export default Myprojects;
import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
    const [sucess, setSuccess] = useState('')

    const onsubmit = e => {
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_6pxc24k', 'template_aipscnc', e.target, 'user_icBz0f3xeREsD7tvKpmba')
          .then((result) => {
           e.target.reset();
              setSuccess('Your Message has been successfully sent. I will contact you soon.')
          
          }, (error) => {
            setSuccess(error.text);
          });
      };
  


    return (
        <div id="contact" className="contact-container py-5">
        <Container>    
  <Row>
    <Col xs={12} md={6}>
    <h1 style={{color:"#fff"}}>Hire Me.</h1>
    <h4>
    I am available for work. Connect with me via <span style={{color:"#fff"}}>Phone: 01970901365</span> or 
    </h4>
    <h4 style={{color:"#fff"}}>
    Email: sejan157218@gmail.com
    </h4>
    <h4 style={{color:"#fff"}}>
    Address: Dhaka, Bangladesh.
    </h4>
    </Col>
    <Col xs={12} md={6}>
    <form  onSubmit={onsubmit}>
      <input className="contact-form-input" type="text" placeholder="Your Name *" name="name" />
      <input className="contact-form-input" type="text" placeholder="Your Email" name="email" />
      <input className="contact-form-input" type="number" placeholder="Your Phone Number" name="phone" />
      <textarea className="contact-form-input" type="text" placeholder="Your Message" style={{height:'8rem'}} name="message" />
      <input className="banner-button" style={{width:'100%'}} type="submit" value="Send" />
      {
          sucess && <h4>{sucess}</h4>
      }
    </form>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Contact;
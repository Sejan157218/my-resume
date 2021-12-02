import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
           <Container className="footer-content">
           <div>
           <h1>Copyright © 2021 by Sejan Mahmud</h1>
           </div>
           <div>
                <a href="https://www.facebook.com/sejanmahmud.sajal.7" target="_blank"><button className="icon-btn m-2"><i class="fab fa-facebook-f icon-class"></i></button></a>
                <a href="https://www.linkedin.com/in/sejan157218/" target="_blank"><button className="icon-btn m-2"><i class="fab fa-linkedin-in icon-class"></i></button></a>
                <a href="https://github.com/Sejan157218" target="_blank"><button className="icon-btn m-2"><i class="fab fa-github icon-class"></i></button></a>
                <a href="" target="_blank"><button className="icon-btn m-2"><i class="fab fa-twitter"></i></button></a>
           </div>
           </Container>
        </div>
    );
};

export default Footer;
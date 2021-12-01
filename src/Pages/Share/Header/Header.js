import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const scrollOnChange = () => {
        if (window.scrollY < 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', scrollOnChange)
    return (
        
        <Navbar collapseOnSelect expand="md" className={scroll ? "nav-container" : "nav-container-scroll"}>
            <Container>
                <Navbar.Brand as={Link} to="/" className='header-h1 px-2'>SM</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav className=" header-nav">
                            <Nav.Link className="nav-color" as={HashLink } to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav-color" as={HashLink } to="/home#about-me">About</Nav.Link>
                            <Nav.Link className="nav-color" as={HashLink } to="/home#my-project">Portfolio  </Nav.Link>
                            <Nav.Link className="nav-color" as={HashLink } to="/home#home">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;
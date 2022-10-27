import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Card.Img style={{ height: '30px', width: '30px', marginRight: '10px' }} variant="top" src="./logo.jfif" />
                         <Navbar.Brand className=' me-5' href="/">Skillbd</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link href="/courses">Courses</Nav.Link>
                                   <Nav.Link href="/blog">Blog</Nav.Link>
                                   <Nav.Link href="/faq">FAQ</Nav.Link>
                                   <Nav.Link href="/about">About</Nav.Link>
                                   <Nav.Link href="contact">Contact</Nav.Link>
                              </Nav>
                              <Nav>
                                   <Nav.Link title='Create Account' href="/register">Register</Nav.Link>
                                   <Nav.Link title='Login' href="/login">Login</Nav.Link>
                                   <Nav.Link title='Make Dark' href="#deets">Switch Dark</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default NavBar;
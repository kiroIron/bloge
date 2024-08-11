import React, { useState } from 'react';
import { Navbar, Nav, NavLink, Form, FormControl, Button, Container } from 'react-bootstrap';
import Imges from '../pages/Imges/logo.png'
import './AppNavbar.css';
const AppNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('color_bg', darkMode);
    document.body.classList.toggle('text-light', darkMode);
  };

  return (
    <Navbar bg={darkMode ? "light" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src= {Imges} 
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav_color">
            <NavLink  href="/"           >Home        </NavLink>
            <NavLink  href="/content"    >Content     </NavLink>
            <NavLink  href="/about"      >About       </NavLink>
            <NavLink  href="/single-page">Single-page </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" /> </Form>
            <Button variant="outline-success">Search</Button>
            <Button variant={darkMode ? "light" : "dark"} onClick={toggleDarkMode} className="ml-2">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;



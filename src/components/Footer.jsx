import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <footer className=" py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>Information about your company.</p>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <p>
              <a href="/" className="text-dark">Facebook</a>
            </p>
            <p>
              <a href="/" className="text-dark">Twitter</a>
            </p>
            <p>
              <a href="/" className="text-dark">Instagram</a>
            </p>
          </Col>
          <Col md={3}>
          
         <form action="" className='form_dis d-flex justify-content-center flex-column'>
         <h5 className='ml-5'>Form login</h5>
          <div className='p-1'><input type="text" placeholder='Name' name='Name' id='1'/></div>
          <div className='p-1'><input type="email" placeholder='Email' name="email" id="2" /></div>
          <div className='p-1'><input type="password" placeholder='Password' name="Password" id="3" /></div>
          <div className='p-1 d-flex justify-content-center'><input type="button" value="SAVE-FORM" id="4" className='btn_color'/></div>
         </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <hr className='color_hr' />

          </Col>
          
          

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

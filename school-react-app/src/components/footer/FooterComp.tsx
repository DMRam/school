import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer_styles.css'; // Custom CSS file for styling (create this file)

export const FooterComp = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer-column">
            <h5>About Us</h5>
            <p>Your Company Description Here</p>
          </Col>
          <Col md={6} className="footer-column">
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </div>
    </footer>
  );
};

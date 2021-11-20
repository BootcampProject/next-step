import React from 'react';
import { Nav,Container,Row,Col } from 'react-bootstrap';
import ContactForm from '../ContactUs/contact';
import './assets/footer.css';
import { Link } from "react-router-dom";

function Footer () {

    return (
      <div className="footerNavbarBackground">
        <Container>
          <Row>
            <Col sm={4}>
              {" "}
              <ContactForm />{" "}
            </Col>
            <Col className="footerLinks">
              <Nav className="flex-column text-center">
                <Nav.Link>
                <Link
                  href="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About Us
                  </Link>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );

}

export default Footer;
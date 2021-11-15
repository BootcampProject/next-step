import React from 'react';
import { Nav,Container,Row,Col } from 'react-bootstrap';
import ContactForm from '../ContactUs/contact';
import './assets/footer.css';

function Footer () {

    return (
        <div class="footerNavbarBackground">
            <Container>
                <Row>
                    <Col sm={4}> <ContactForm /> </Col>
                    <Col class="footerLinks">
                        <Nav className="flex-column text-center">
                            <Nav.Link href="/home">About Us</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>    
        </div>
    )

}

export default Footer;
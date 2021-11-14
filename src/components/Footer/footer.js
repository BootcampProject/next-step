import React from 'react';
import { Navbar,Nav,Container,Row,Col } from 'react-bootstrap';
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
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            {/* <Navbar expand="lg" fixed="bottom" >
                <Container>
                    <Nav className="flex-column" >
                        
                    </Nav>
                </Container>
                <Container>
                    
                </Container>
            </Navbar> */}
            
        </div>
    )

}

export default Footer;
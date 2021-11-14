import React from 'react';
import logoImage from './assets/images/Logo.png';
import { Navbar,Nav,Container,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import logoGif from '../Header/assets/images/Ed-El-Ex-V2.gif';
import './assets/css/nav.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function NavBar() {

        return (
            <Router>
                <div class="navBarContainer">
                    <Navbar expand="lg">
                        <Container fluid>
                            <div class="navBarLogo">
                                <Navbar.Brand as={ Link } to={"/"}><img src={logoImage} className="d-inline-block align-top" width="60" height="60" alt="Home" /></Navbar.Brand>
                            </div>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                                    <Nav.Link as={ Link } to={"/about"}>Item 1</Nav.Link>
                                    <Nav.Link as={ Link } to={"/about"}>Item 2</Nav.Link>

                                    <NavDropdown title="Item 3" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Action</NavDropdown.Item>
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-secondary"><BsSearch/></Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div class="sloganContainer">
                    <img src={logoGif} style={{ maxHeight: '30px' }}/>
                </div>
                {/* <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div> */}
            </Router>
        );
}
export default NavBar;
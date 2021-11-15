import React from 'react';
import logoImage from './assets/images/Logo.png';
import { Navbar,Nav,Container,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { BsPersonPlusFill,BsPersonCheckFill } from 'react-icons/bs'; 
import logoGif from '../Header/assets/images/Ed-El-Ex-V2.gif';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import './assets/css/nav.css';
import Auth from "../../utils/auth";

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
                                    <Nav.Link as={ Link } to={"/about"}>Item 2</Nav.Link>

                                    <NavDropdown title="Courses" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Grade 8 History</NavDropdown.Item>
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Grade 8 Math</NavDropdown.Item>
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Grade 8 Science</NavDropdown.Item>
                                        <NavDropdown.Item as={ Link } to={"/resume"}>Grade 8 Geography</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={ Link } to={"/login"}> <BsPersonCheckFill /> Login</Nav.Link>
                                    <Nav.Link as={ Link } to={"/signup"}> <BsPersonPlusFill /> Sign Up</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div class="sloganContainer">
                    <img src={logoGif} style={{ maxHeight: '30px' }}/>
                </div>
                <div>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}
export default NavBar;
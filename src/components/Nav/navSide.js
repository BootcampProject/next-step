import React from 'react';
import logoImage from './assets/images/Logo.png';
import { BsArrowLeftCircle, BsSearch, BsFillXDiamondFill } from 'react-icons/bs';
import { Dropdown, Form, FormControl, Nav, NavLink, NavDropdown } from 'react-bootstrap';

import './assets/css/nav.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useState, setInactive } from 'react';


const NavBarTwo = (props) => {

    const [inactive, setInactive] = useState(false);

        return (
            <Router>
                <div class={`navBarContainerTwo ${inactive ? "inactive" : ""}`}>
                    <div class="topSection">
                        <div class="logo">
                            <img src={logoImage} width="60" height="60" alt="Home" />
                        </div>
                        <div onClick={() => setInactive(!inactive)} class="backArrow">
                            <BsArrowLeftCircle />
                        </div>
                    </div>
                    <Dropdown.Divider />
                    <div class="searchController">
                        <Form className="d-flex">
                            <button class="search-btn">
                                <BsSearch/>
                            </button>
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ paddingLeft: 30 }}
                            />
                        </Form>
                    </div>
                    <div>
                        <Nav.Link as={ Link } to={"/about"}><BsFillXDiamondFill/>Item 1</Nav.Link>
                        <Nav.Link as={ Link } to={"/portfolio"}><BsFillXDiamondFill/>Item 2</Nav.Link>
                        <Nav.Link as={ Link } to={"/resume"}><BsFillXDiamondFill/>Item 3</Nav.Link>
                        <Nav.Link as={ Link } to={"/contact"}><BsFillXDiamondFill/>Item 4</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={ Link } to={"/resume"}>Action</NavDropdown.Item>
                            <NavDropdown.Item as={ Link } to={"/resume"}>Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={ Link } to={"/resume"}>Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </div>

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
export default NavBarTwo;
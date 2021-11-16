import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useQuestionContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import logoImage from './assets/images/Logo.png';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BsPersonPlusFill,BsPersonCheckFill } from 'react-icons/bs'; 
import logoGif from '../Header/assets/images/Ed-El-Ex-V2.gif';
import './assets/css/nav.css';
import Auth from "../../utils/auth";

import { Link } from "react-router-dom";

function NavBar() {
    const [state, dispatch] = useQuestionContext();

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
        dispatch({
            type: UPDATE_CATEGORIES,
            categories: categoryData.categories
        });
        categoryData.categories.forEach(category => {
            idbPromise('categories', 'put', category);
        });
        } else if (!loading) {
        idbPromise('categories', 'get').then(categories => {
            dispatch({
            type: UPDATE_CATEGORIES,
            categories: categories
            });
        });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: id
        });
    };


    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
              <div>
                    <div class="navBarContainer">
                        <Navbar expand="lg">
                            <Container fluid>
                                <div class="navBarLogo">
                                    <Navbar.Brand as={ Link } to={"/"}><img src={logoImage} className="d-inline-block align-top" width="60" height="60" alt="Home" /></Navbar.Brand>
                                </div>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                                        {categories.map(item => (
                                            <Nav.Link 
                                            key={item._id}
                                            onClick={() => {
                                              handleClick(item._id);
                                            }}>
                                                {item.name}
                                            </Nav.Link>
                                        ))}
                                    </Nav>
                                    <Nav>
                                        <Nav.Link>
                                            <a href="/" onClick={() => Auth.logout()}>
                                                Logout
                                            </a>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div class="sloganContainer">
                        <img src={logoGif} alt='' style={{ maxHeight: '30px' }}/>
                    </div>
              </div>
          );
        } else {
          return (
            <div>
                <div class="navBarContainer">
                    <Navbar expand="lg">
                        <Container fluid>
                            <div class="navBarLogo">
                                <Navbar.Brand as={ Link } to={"/"}><img src={logoImage} className="d-inline-block align-top" width="60" height="60" alt="Home" /></Navbar.Brand>
                            </div>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                                    {categories.map(item => (
                                        <Nav.Link 
                                        key={item._id}
                                        onClick={() => {
                                            handleClick(item._id);
                                        }}>
                                            {item.name}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                                <Nav>
                                    <Nav.Link><Link to="/signup"> <BsPersonPlusFill /> Signup</Link></Nav.Link>
                                    <Nav.Link><Link to="/login"> <BsPersonCheckFill /> Login</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div class="sloganContainer">
                    <img src={logoGif} alt='' style={{ maxHeight: '30px' }}/>
                </div>
            </div>
          );
        }
      }

    return (
        <div>
            {showNavigation()}
        </div>
    );
}
export default NavBar;
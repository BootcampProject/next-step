import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useQuestionContext } from "../../utils/GlobalState";
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

import logoImage from "./assets/images/Logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsPersonPlusFill, BsPersonCheckFill, BsFillPencilFill } from "react-icons/bs";
import "./assets/css/nav.css";
import Auth from "../../utils/auth";

import { Link } from "react-router-dom";

function NavBar() {
    const [state, dispatch] = useQuestionContext();

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            console.log(categoryData);
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise("categories", "put", category);
            });
        } else if (!loading) {
            idbPromise("categories", "get").then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <div className="navBarContainer">
                        <Navbar expand="lg">
                            <Container fluid>
                                <div className="navBarLogo">
                                    <Navbar.Brand as={Link} to={"/"}>
                                        <img
                                            src={logoImage}
                                            className="d-inline-block align-top"
                                            width="60"
                                            height="60"
                                            alt="Home"
                                        />
                                    </Navbar.Brand>
                                </div>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: "200px" }}
                                        navbarScroll
                                    >
                                        <Nav.Link>
                                            <Link to="/geography8">Grade 8 Geography</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/math8">Grade 8 Math</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/history8">Grade 8 History</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/science8">Grade 8 Science</Link>
                                        </Nav.Link>
                                        {/* {categories.map(item => (
                                            <a
                                            key={item._id}
                                            href="/categories"  onClick={() => {
                                                handleClick(item._id);
                                              }}
                                           >
                                                {item.name}
                                                
                                            </a>
                                        ))} */}

                                        {/* href={"/categories/"+item_id} */}
                                    </Nav>
                                    <Nav>
                                        <Nav.Link>
                                            <Link to="/addQ"> <BsFillPencilFill /> Add Question</Link>
                                        </Nav.Link>
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
                </div>
            );
        } else {
            return (
                <div>
                    <div className="navBarContainer">
                        <Navbar expand="lg">
                            <Container fluid>
                                <div className="navBarLogo">
                                    <Navbar.Brand as={Link} to={"/"}>
                                        <img
                                            src={logoImage}
                                            className="d-inline-block align-top"
                                            width="60"
                                            height="60"
                                            alt="Home"
                                        />
                                    </Navbar.Brand>
                                </div>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: "200px" }}
                                        navbarScroll
                                    >
                                        {categories.map((item) => (
                                            <Nav.Link
                                                key={item._id}
                                                onClick={() => {
                                                    handleClick(item._id);
                                                }}
                                            >
                                                {item.name}
                                            </Nav.Link>
                                        ))}
                                    </Nav>
                                    <Nav>
                                        <Link to="/signup">
                                            {" "}
                                            <BsPersonPlusFill /> Signup
                                        </Link>
                                        <Link to="/login">
                                            {" "}
                                            <BsPersonCheckFill /> Login
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            );
        }
    }

    return <div>{showNavigation()}</div>;
}
export default NavBar;
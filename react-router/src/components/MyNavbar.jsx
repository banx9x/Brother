import React from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Button,
    Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Button as={Link} to="/cart" variant="primary">
                            <i class="bi bi-bag-heart-fill"></i>{" "}
                            <Badge bg="light" text="dark">
                                9
                            </Badge>
                            <span className="visually-hidden">items</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;

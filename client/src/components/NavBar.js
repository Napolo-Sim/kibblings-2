import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Kibblings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href={props.link1}>{props.link1Title}</Nav.Link>
                    <Nav.Link href={props.link2}>{props.link2Title}</Nav.Link>
                    <Nav.Link href={props.link3}>{props.link3Title}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar


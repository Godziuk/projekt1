import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">webflow</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/showcase">Showcase</Nav.Link>
        <Nav.Link href="/designers">Designers</Nav.Link>
        <Nav.Link href="/support">Learn & Support</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="/login">Log in</Nav.Link>
        <Nav.Link href="/signup">Sign up for Free</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)
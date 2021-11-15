import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import Link from "next/link"

const topNav = () => {
    return (<>
        <Navbar className="navbar2" expand="lg"  >
            <Navbar.Brand href="/">Exercise App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/signup" > <button className="btn btn-primary">Sign Up</button></Nav.Link>
                    <Nav.Link href="/login"  ><button className="btn btn-secondary">Login</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>

    );
}

export default topNav;